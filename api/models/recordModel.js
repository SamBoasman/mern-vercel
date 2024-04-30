import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    name: String,
    position: String,
    level: String,
});

export default mongoose.model('Record', recordSchema);