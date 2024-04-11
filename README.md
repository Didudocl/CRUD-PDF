> [!IMPORTANT]
> Se creó esto para que los estudiantes de Ingeniería de Software tengan una noción de cómo hacer un reporte y dejarlo en un pdf.

## CRUD con reportes en PDF 📧

### Dependencias utilizadas 🛠️

- [Dotenv](https://www.npmjs.com/package/dotenv#-documentation): Para cargar variables de entorno desde un archivo .env a process.env.
- [Express](https://expressjs.com/): Es un framework de Node.js que nos permite crear aplicaciones web.
- [Mongoose](https://mongoosejs.com/): Mongoose es una biblioteca de modelo de objetos MongoDB para Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): Es un middleware de registro de solicitudes HTTP para Node.js.
- [Nodemon](https://www.npmjs.com/package/nodemon): Es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación cuando se detectan cambios en el directorio.
- [Pdfkit-table](https://github.com/natancabral/pdfkit-table): Github con la documentación de como utilizar pdfkit-table.
- [uuid](https://www.npmjs.com/package/uuid): uuid es un generador de identificadores únicos.

### Cosas a tener en cuenta 💡

- Al realizar un reporte nuevo se genera un archivo pdf en la carpeta `util` con un id aleatorio utilizando `uuid`.
- Al crear un nuevo reporte en el controlador, se invoca la función `createTable()` que está en el archivo pdf.js, al invocar la función se generá la consulta y se crea el reporte en el pdf.
- Esta función puede ser modificada para lo que deban utilizarlo y se puede reutilizar.
