import mongoose, {Schema} from "mongoose";

const proSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, {timestamps: true})


export const Product = mongoose.model("Product", proSchema)