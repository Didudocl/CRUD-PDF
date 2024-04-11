'use strict';

import express from 'express';
import { createReports } from '../controllers/report.controller.js';

const router = express.Router();

router.post('/', createReports);

export default router;