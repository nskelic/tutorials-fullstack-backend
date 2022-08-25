import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'SubCategory'
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;
