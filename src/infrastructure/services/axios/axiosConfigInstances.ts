import axios from 'axios'
import {store} from '@/presentation/store/store'
import { refreshToken } from '@/presentation/store/slices/authSlice'

// Axios instance
export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  withCredentials: true // Incluye cookies automáticamente
})
// Axios instance
export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Incluye cookies automáticamente
})

// Interceptor de solicitud (request)
axiosPrivate.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  // Maneja la respuesta exitosa
  (response) => {
    return response; // Devuelve la respuesta tal cual si no hay problemas
  },
  async (error) => {
    const originalRequest = error.config; // Guarda la solicitud original en caso de necesitarla

    // Verifica si el error es 401 (no autorizado) y si no se ha intentado renovar el token aún
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Marca la solicitud para evitar reintentos infinitos

      // Intenta obtener un nuevo `accessToken` usando el `refreshToken` almacenado en la cookie
      try {
        await store.dispatch(refreshToken()); // Refresco la cookie en el servidor
      

        // Reintenta la solicitud original, agregando el nuevo `accessToken` al header
        originalRequest.headers['Authorization'] = `Bearer ${ store?.getState()?.auth?.user?.token}`;
        return axios(originalRequest); // Vuelve a hacer la solicitud original con el nuevo token
      } catch (refreshError) {
        // Si la renovación falla, rechaza la promesa y maneja el error
        return Promise.reject(refreshError);
      }
    }

    // Si no es un error 401 o ya se intentó renovar, pasa el error
    return Promise.reject(error);
  }
);

export const axiosPrivateBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, body, params, headers }: { url: string; method: string; body: any; params: any; headers: any }) => {
    try {
      const result = await axiosPrivate({
        url: baseUrl + url,
        method,
        data: body, // data no se puede cambiar el nombre  es obligatorio
        params,
        headers,
      })
      return { data: result.data }
    } catch (axiosError: any) {
      const err = axiosError 
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }


