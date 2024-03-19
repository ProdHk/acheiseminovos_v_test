import DbConnection from "@/services/Db/DbConnection";
import mongoose from "mongoose";

DbConnection()

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ProductSchema = new Schema({

    categoria: String,

    marca: String,
    modelo: String,

    ano: Number,
    km: Number,
    fotos: Array,


})

export default mongoose.models.Produto || mongoose.model('Produto', ProductSchema)