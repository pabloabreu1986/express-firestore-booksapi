# API REST ExpressJS

## Endpoints

Create: POST => server:puerto/books

Update: PUT => server:puerto/books/id

Read:

- One: GET => server:puerto/books/id
- All: GET => server:puerto/books

Delete: DELETE => server:puerto/books/id

## Ejecutar API y disponibilizarla a la app:

- Clonar este repositorio
- Crear la cuenta de Firebase
- Crear la BD de Firestore
- Descargar el archivo.json de la cuenta de Firebase
- Crear el archivo .env
- Declarar la variable de entorno `GOOGLE_APPLICATION_CREDENTIALS` y asignarle la ruta del archivo.json descargado anteriormente
- Declarar y asignar los valores a las variables de entorno `PORT` (puerto del servidor) y `COLLECTION` (nombre de la colección en Firestore)
- Desde la consola entrar a la carpeta booksapi
- Instalar `ngrock` con `brew install ngrok`
- Instalar los paquetes de node con `npm install`
- Ejecutar el comando `npm run start`
- Ejecutar en otra consola `ngrok http 3000`
- En en el archivo `.env` de la app, definir la variable `BOOKS_API_URL` con el valor devuelto en consola por `ngrok` en _"Forwarding"_ seguido del la ruta `/books`
- Quedaría definida el `.env` de la siguiente manera:

  `BOOKS_API_URL=https://cadena-de-ngrok-mostrada-en-consola.ngrok-free.app/books`

## Próximos pasos

- Dockerizar

- Implementar seguridad de endpoints(Crear, Update y Delete)

- Hacer pruebas unitarias

- Definir .yml de despliegue en correspondencia con la tecnología a usar
