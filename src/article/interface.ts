import { Document } from 'mongoose'

export default interface IArticle extends Document {
    title: string
    content: string
}