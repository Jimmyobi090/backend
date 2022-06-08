const express = require ("express")
const studentsCtrl = require("../controllers/studentsCtrl")

const router = express.Router()

router.get("/allstudents", studentsCtrl.getAllStudents)
router.post("/onestudent", studentsCtrl.getOneStudents)
router.post("/addstudent", studentsCtrl.postStudent)


module.exports = router