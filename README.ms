📦 frontend/
│
├── 📁 public/                        # Archivos estáticos
│   └── index.html
│
├── 📁 src/
│   ├── 📁 presentation/             # UI + React App
│   │   ├── 📁 components/           # Componentes de presentation (Componentes pertenecientes al UI de la aplicación)
│   │   ├── 📁 pages/                # Vistas de cada ruta (LoginPage, Dashboard, etc.)
│   │   ├── 📁 routes/               # Definición de rutas con React Router
│   │   ├── 📁 styles/               # Tailwind y globales
│   │   ├── 📁 providers/            # Contextos, ThemeProvider, AuthProvider
│   │   └── App.tsx                 # App principal
│
│   ├── 📁 application/              # Casos de uso (lógica de negocio desacoplada)
│   │   └── usecases/
│   │       ├── auth/
│   │       │   └── loginUser.ts
│   │       └── shipments/
│   │           └── createShipment.ts
│
│   ├── 📁 domain/                   # Entidades y contratos
│   │   ├── 📁 entities/
│   │   │   ├── User.ts
│   │   │   └── Shipment.ts
│   │   └── 📁 repositories/
│   │       ├── AuthRepository.ts
│   │       └── ShipmentRepository.ts
│
│   ├── 📁 infrastructure/           # Implementaciones concretas
│   │   ├── 📁 services/             # Axios, JWT, APIs reales
│   │   └── 📁 repositories/         # Implementaciones de los repos
│   │       ├── AuthApiRepository.ts
│   │       └── ShipmentApiRepository.ts
│
│   ├── 📁 shared/                   # Código compartido (utils, hooks, constantes)
│   │   ├── 📁 hooks/
│   │   ├── 📁 utils/
│   │   ├── 📁 components/           # Componentes puros (botones, inputs, layouts)
│   │   └── constants.ts
│
│   ├── 📁 store/                    # Redux Toolkit o Context API
│   │   ├── store.ts
│   │   └── slices/
│   │       └── authSlice.ts
│
│   ├── main.tsx                    # Punto de entrada
│   └── vite-env.d.ts
│
├── tailwind.config.ts              # Config de Tailwind
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json




components -> slice -> caso de uso 
                    |-> apiRepository -> repository
                    |-> se hace el execute del caso de uso


Tablas
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL,
  refresh_token VARCHAR(500),
  token VARCHAR(500),

);


SELECT unnest(enum_range(NULL::productType));

CREATE TYPE shipmentStatus AS ENUM ('EN ESPERA', 'ENTRANSITO', 'ENTREGADO', 'CANCELADO');

CREATE TABLE shipments (
    id SERIAL PRIMARY KEY,
    product_type productType NOT NULL,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    weight NUMERIC(10,2) NOT NULL CHECK (weight > 0),
    height NUMERIC(10,2) NOT NULL CHECK (height > 0),
    width NUMERIC(10,2) NOT NULL CHECK (width > 0),
    length NUMERIC(10,2) NOT NULL CHECK (length > 0),
    user_id INTEGER NOT NULL REFERENCES users(id),
    status shipmentStatus NOT NULL DEFAULT 'EN ESPERA'
);

Vale necesito que leas todo el codebase de server y client  1 necesito que hagas el register  
ya tengo la ruta configurada y los componentes y su pagina. 2- Empieza por el front end (Client) realizando la parte del slice del register, 
y todo lo relacionado con la clean architecture 3- cuando termines con el front end pasa al banck end  
y has lo mismo teniendo en cuenta lo hecho en el front end. 
4 antes de realizar cualquier cambios lee todo el code base no omitas ningun archivo tanto de client como de server para que actualices  
el contexto y veas los cambios realizados.


ómo se integra createApi con Clean Architecture en React?
1. Infraestructura (Data Source/Adapter)
El archivo que usa createApi (shipmentApi.js) actúa como un adaptador de infraestructura: sabe cómo hablar con la API REST, pero no contiene lógica de negocio.
2. Repositorio
Crea un ShipmentRepository (por ejemplo, en src/infrastructure/repositories/ShipmentApiRepository.ts).
Este repositorio usa los hooks generados por createApi (useCreateShipmentMutation, useGetAllShipmentQuery, etc.) y expone métodos de dominio (ej: createShipment, getShipments, etc.).
El repositorio traduce entre los modelos de dominio y los datos crudos de la API.
3. Casos de Uso (Use Cases)
Los casos de uso (en /application/use-cases/) orquestan la lógica de negocio usando los métodos del repositorio.
Ejemplo: createShipmentUseCase llama a ShipmentRepository.createShipment() y maneja cualquier lógica adicional (validaciones, transformaciones, etc.).
4. Presentación (Componentes)
Los componentes React llaman a los casos de uso, no directamente a la API ni a los repositorios.
Así, la UI está desacoplada de la infraestructura.


Para el envio de confirmacion al registrarse hay que usar el servicio de email https://ethereal.email/create