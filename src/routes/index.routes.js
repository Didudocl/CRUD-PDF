'use strict';

import express from 'express';
import reportRoutes from './report.routes.js';

const router = express.Router();

router.use('/report', reportRoutes);

export default router;