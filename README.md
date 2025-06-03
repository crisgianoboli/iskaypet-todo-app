# Tiendanimal Todo App

Una aplicación moderna de gestión de tareas construida con Next.js, TypeScript y Tailwind CSS. La aplicación permite a los usuarios gestionar sus tareas con una interfaz limpia y responsiva.

## 🚀 Características

- **Gestión de Tareas**
  - Crear nuevas tareas con título y descripción
  - Eliminar tareas existentes
  - Validación para evitar títulos duplicados
  - Paginación (3 tareas por página)

- **Arquitectura**
  - Integración con API externa (JSONPlaceholder)
  - Manejo de estado con React Hooks
  - Tipado estricto con TypeScript
  - Componentes reutilizables

## 🛠️ Stack Tecnológico

- **Frontend Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: React Icons
- **Formularios**: @tailwindcss/forms
- **API**: JSONPlaceholder

## 🚦 Rutas de la Aplicación

- `/` - Redirección a la página de tareas
- `/tasks` - Gestión principal de tareas
- `/my-data` - Sección de datos personales (en construcción)
- `/returns` - Sección de devoluciones (en construcción)

## 🏁 Inicio Rápido

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/yourusername/tiendanimal-todo-app.git
   cd tiendanimal-todo-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir el navegador**
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🔄 API Integration

La aplicación se integra con JSONPlaceholder para simular operaciones CRUD:

- `GET /todos` - Obtener lista de tareas
- `POST /todos` - Crear nueva tarea
- `DELETE /todos/:id` - Eliminar tarea

## 🛡️ Manejo de Errores

La aplicación implementa un manejo de errores robusto:
- Validación de formularios
- Mensajes de error amigables para el usuario

## 🔍 Buenas Prácticas Implementadas

- **Código Limpio**: Estructura clara y nombres descriptivos
- **TypeScript**: Tipado estricto para mejor mantenibilidad
- **Componentes**: Diseño modular y reutilizable
- **Estado**: Gestión eficiente con React Hooks
- **Accesibilidad**: Atributos ARIA y manejo de teclado
- **Performance**: Optimización de renderizado

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

