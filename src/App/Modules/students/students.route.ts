import express from 'express'
import { StudentControllers } from './students.controller'

const router = express.Router()

// This will call controller function ;

router.post('/create-student' , StudentControllers.createStudent); 
router.get('/', StudentControllers.getAllStudets);
router.get("/:studentId", StudentControllers.getSingleStudent)

export const StudentsRoute = router ; 