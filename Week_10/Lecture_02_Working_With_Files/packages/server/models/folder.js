import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const folderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subFolders: [
    {
      type: ObjectId,
      ref: 'Folder'
    }
  ],
  files: [
    {
      type: String,
      required: true
    }
  ]
}, { timestamps: true })

const Folder = model('Folder', folderSchema)

export default Folder