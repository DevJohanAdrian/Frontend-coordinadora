export interface User {
    id: string;
    nombres: string;
    apellidos: string;
    email: string;
    token: string;
    refreshToken: string;
  }



  export interface Error {
    message: string;
    statusCode: number;
    error: boolean;
  }


  
