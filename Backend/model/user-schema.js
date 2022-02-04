import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String,
    phone:Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,"user");
export default mongoose.model("user",userSchema);
 