import express from 'express'
import { 
    allStudents,
    createStudent,
    updateStudent,
    deleteStudent 
} 
from '../controller/students.js'
const router = express.Router()

router.get('/all', allStudents)
router.post('/create', createStudent)
router.put('/update', updateStudent)
router.delete('/delete', deleteStudent)

export default router;