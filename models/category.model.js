import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    /*
    // U Category ide array id-eva njenih SubCategory
    arrayOfSubcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    }],
    // U SubCategory ide id njene Category kad bi pravili subkategorije
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
    */
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
