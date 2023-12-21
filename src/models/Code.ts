import mongoose, { Schema } from "mongoose";

const CodeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
});

const Code = mongoose.model("Code", CodeSchema);
export default Code;
