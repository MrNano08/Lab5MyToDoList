# ToDo List en React con TypeScript + SWC

## Descripción
Este proyecto es una aplicación de lista de tareas (ToDo List) desarrollada en React con TypeScript y compilada con SWC. Permite a los usuarios agregar, marcar como completadas y eliminar tareas, almacenando los datos en el `localStorage` del navegador.

## Integrantes
- [MrNano08](https://github.com/MrNano08)
- [otomora](https://github.com/otomora)

## Tecnologías utilizadas
- React
- TypeScript
- SWC (Speedy Web Compiler)
- HTML & CSS

## Características
- Agregar tareas con una descripción y fecha de creación.
- Marcar tareas como completadas, registrando la fecha de finalización.
- Reorganizar la lista para mostrar las tareas completadas al final.
- Guardar y recuperar tareas desde `localStorage`.
- Resetear la lista de tareas.

## Instalación y Ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/MrNano08/Lab5MyToDoList.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd Lab5MyToDoList
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```
5. Abrir en el navegador: `http://localhost:5173` (o el puerto indicado en la terminal).

## Estructura del proyecto
```
Lab5MyToDoList/
│── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada de la aplicación
│   ├── App.css          # Estilos de la aplicación
│── public/
│── package.json        # Configuración de dependencias
│── tsconfig.json       # Configuración de TypeScript
│── vite.config.ts      # Configuración de Vite
```

## Uso
1. Escribir una tarea en el campo de texto.
2. Hacer clic en "Add Item" para agregar la tarea.
3. Marcar una tarea como completada utilizando el checkbox.
4. Hacer clic en "Reset List" para eliminar todas las tareas.

## Licencia
Este proyecto está bajo la licencia MIT.

