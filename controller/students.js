import express from 'express'

const allStudents = (req, res) => {
    res.send("All Students")}

const createStudent = (req, res) =>{
    res.send("Create Students")
}

const updateStudent = (req, res) => {
    res.send("update User")
}

const deleteStudent = (req, res) =>{
    res.send("Create Students")
}

export {
     allStudents,
     createStudent,
     updateStudent,
     deleteStudent
    }