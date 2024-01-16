import express from 'express';
import students from './routes/student.js'
import teachers from './routes/Teacher.js'
import products from './product.js'
import path from 'path'
import route from './routes/route.js'
const app = express()
console.clear()

app.set('view engine', "ejs")
// app.use(express.static(path.join(process.cwd(), 'public'))) 
app.use('/', route);
app.use('/students', students);
app.use('/teachers', teachers);






app.listen(8001, ()=> console.log("server Up!!")) 
