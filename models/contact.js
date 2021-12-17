import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  title: {
    type: String,
  }, 
  email: {
    type: String
  },
  linkedin: {
    type: String
  },
  gaGrad: {
    type: Boolean,
    default: false
  }
})

const Contact = mongoose.model('Contact', contactSchema)

export { Contact }