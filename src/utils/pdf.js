import fs from 'fs';
import PDFDocument from 'pdfkit-table';
import Report from '../models/report.model.js';
import { v4 as uuidv4 } from 'uuid';

export async function createTable() {
  // Se crea la instancia del pdf
  const doc = new PDFDocument({ margin: 30, size: 'A4' });

  const reports = await Report.find();

  // Generar un nombre de archivo aleatorio
  const randomFileName = uuidv4();
  const filePath = `./src/Pdf/${randomFileName}.pdf`;

  // pipe the document to a writable stream
  doc.pipe(fs.createWriteStream(filePath));

  // Se define el contenido de la tabla
  const table = {
    title: {label: 'Reporte', color: 'blue'},
    headers: ['Email', 'Mensaje'], // Cambié los nombres de las columnas
    rows: []
  };

  // iterate over each report and extract values into the table rows
  reports.forEach(report => {
    const rowData = [report.email, report.mensaje]; // Utilizo las propiedades email y mensaje
    table.rows.push(rowData);
  });

  // draw the table
  await doc.table(table, { startY: 50 });

  // Agregar imagen al documento
  const imagePath = './src/images/report.png'; // Ruta de la imagen que deseas agregar
  doc.image(imagePath, 200, 300, { width: 200 }); // Ajusta las coordenadas y el tamaño según sea necesario

  // end the document
  doc.end();

  return filePath; // Retorna el nombre del archivo generado, en caso de tener que usar el nombre del archivo para enviar por correo
}


