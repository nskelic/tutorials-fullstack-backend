import mongoose, { Schema } from "mongoose";

const SubCategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
});
/*
const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

export default SubCategory;
*/
module.exports =
    mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema) 