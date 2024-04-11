'use strict';

import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    mensaje: {
        type: String,
        required: true
    }
});

export default mongoose.model('Report', reportSchema);