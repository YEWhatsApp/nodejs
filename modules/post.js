const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
header : String,
body : String,
footer : Number
});
const post = mongoose.model("post",postSchema);
module.exports = post;
