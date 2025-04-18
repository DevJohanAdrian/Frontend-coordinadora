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