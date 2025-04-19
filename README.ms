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

Vale necesito que leas todo el codebase de server y client  1 necesito que hagas el register  
ya tengo la ruta configurada y los componentes y su pagina. 2- Empieza por el front end (Client) realizando la parte del slice del register, 
y todo lo relacionado con la clean architecture 3- cuando termines con el front end pasa al banck end  
y has lo mismo teniendo en cuenta lo hecho en el front end. 
4 antes de realizar cualquier cambios lee todo el code base no omitas ningun archivo tanto de client como de server para que actualices  
el contexto y veas los cambios realizados.