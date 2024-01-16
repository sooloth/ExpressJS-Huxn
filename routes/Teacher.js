import express from 'express'

const router = express.Router()

router.get('/all', (req, res) =>{
    res.send("All Teacher")
})
router.post('/create', (req, res) =>{
    res.send("Create Teacher")
})
router.put('/update', (req, res) =>{
    res.send("Update Teacher ID")
})
router.delete('/delete', (req, res) =>{
    res.send("Delete Teacher From DB")
})

export default router;