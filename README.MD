create Folder
npm init
npm i express
create instance express
provide port
basic Route

next() use for jump to next function
regular expression
app.route()
controller
routes
middleware
serving static file
ejs


//Basic Routing
// app.get('/', (req, res) =>{
//     res.send("<h1>Hello</h1>")
// })
// //String Pattern path  
// app.get('/ab?cd', (req, res) =>{
//     res.send("If the user hit (ab?cd) or (abcd) then this will run")
// })
// //regex Expression
// app.get(/^\/users\/[0-9]{4}$/, (req, res) =>{
//     res.send("Working")
// } )
// //req and res advanced use next()
// app.get("/double-cb", (req, res, next) =>{
//     console.log("first Callback");
//     next()
// },
// (req, res) => {
//     res.send("Second Callback");
// })


// //Array-cb

// const cb1 = (req, res, next) => {
//     console.log("First Callback")
//     next()
// }
// const cb2 = (req, res, next) => {
//     console.log("Second Callback")
//     next()
// }
// const cb3 = (req, res, next) => {
//     console.log("Third Callback")
//     res.send("Array of Callbacks");
// }
// app.get("/array-cb",[cb1, cb2, cb3]);

// //ugly code
// app.get('/student', (req,res) =>{
//     res.send("get All students");
// })
// app.post('/student', (req,res) =>{
//     res.send("create All students");
// })
// app.put('/student', (req,res) =>{
//     res.send("update All students");
// })
// app.delete('/student', (req,res) =>{
//     res.send("delete All students");
// })

//=============================  Refactor ====================================
app
.route('/student')
.get((req, res) => res.send("All Students"))
.post((req, res) => res.send("Add New Student"))
.put((req, res) => res.send("Update Student"))
.delete((req, res) => res.send("Delete Student"));

//Router advanced
// 1. create routes folder and put your routes in a separate file
// 2. create instance of express.Route()
// 3. instead of app.method change that to "route.method"
// 4. export router
// 5. import router
// 6. use the (app.use) built-in middleware & provide your routes


// Route Params
app.get('/product/:category/:id', (req, res) =>{
    const { category, id} = req.params;
    res.send(`Product Category (${category}) Product ID (${id})`);
})

app.get('/product/order/:day/:month/:year', (req, res) =>{
    const { day, month, year} = req.params;
    res.send(`Product was ordered on: ${day}/${month}/${year}`);
})

=============================================
controller

router.get('/all', allStudents)
router.post('/create', createStudent)
router.put('/update', updateStudent)
router.delete('/delete', deleteStudent)

==============================================
//query string 

app.get('/product', (req, res) =>{
    const {category, id} = req.query;
    res.send(`Product Category ${category} & Product ID: ${id}`);
})


sending data from backend to frontend
========================================

import products from './product.js'

// send data from backend to frontend 
app.get('/products', (req, res) =>{
    res.json(products)
})

==================== Credentials ============================
import userCredentials from './middlewares/Logs.js'

app.get("/", userCredentials,(req, res) => {
    res.send("<h1>Hello admin</>")
})

==================== Serving Static file ===============
import path from 'path'

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use(userCredentials);

===================== EJS ===================================
use res.render for render ejs file

create folder views for render ejs file