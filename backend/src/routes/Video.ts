import { Schema, model } from "mongoose";

const videoSchema = new Schema(
    {
        url: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model("Video", videoSchema);