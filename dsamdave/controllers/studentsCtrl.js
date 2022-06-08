const Students = require ("../models/studentsModel")


const studentsCtrl = {
    getAllStudents: async (req, res) =>{

        const students = await Students.find()
        res.json(students)
    },

    getOneStudents: async (req, res) =>{

        const {name } = req.body

        const student = await Students.findOne({name})

        if(!student){
            res.json({msg: "This student does not exist"})
        }
        res.json(student)
    },

    postStudent: async (req, res)=>{
        const {name, state} = req.body

        const newStudent = new Students({name, state})

        await newStudent.save()

        res.json( newStudent)
    }
}

module.exports = studentsCtrl