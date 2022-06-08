const mongoose = require ("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    state: {
        type: String
    }
},
{
    timestamps: true
  })

const Students = mongoose.model("Students", studentSchema)

module.exports = Students