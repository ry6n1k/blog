import mongoose, {Schema} from "mongoose"
import IBook from "./interface"

const BookSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        extraInformation: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model<IBook>('Book', BookSchema)