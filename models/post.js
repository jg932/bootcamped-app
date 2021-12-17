import mongoose from "mongoose"


const Schema = mongoose.Schema

const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String
  },
  description: {
    type: String,
    required: true
  }
})

const Post = mongoose.model("Post", postSchema)


export {
  Post
}