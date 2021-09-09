import mongoose, {Schema} from 'mongoose'
import IArticle from "./interface"

const articleScheme: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
})

export default mongoose.model<IArticle>('Article', articleScheme)