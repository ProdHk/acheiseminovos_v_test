import DbConnection from "@/services/Db/DbConnection";
import mongoose from "mongoose";

DbConnection()

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({

    /* _id: ObjectId() */
    stateAcconut: Boolean,


    name: String,
    email: String,
    pass: String,

    dataNasc: Date,
    dataCadastro: Date,

    empresa: {
        nome: String, // nome da empresa
        slogan: String,
        endereco: {
            rua: String,
            numero: String,
            bairro: String,
            cidade: String,
            estado: String,
        }
    },


})

/* const Usuarios = mongoose.model('Usuario', userSchema)
 */

export default mongoose.models.Usuario || mongoose.model('Usuario', UserSchema)