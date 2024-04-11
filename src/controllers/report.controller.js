import Report from '../models/report.model.js';
import { createTable } from '../utils/pdf.js';

export async function createReports(req, res) {

    const report = new Report(req.body);
    
    const reportSave = await report.save();

    createTable();

    res.status(201).json({
        message: "Reportes enviados!",
        data: reportSave
    })

}
