const homeController = (req, res) =>{
    const data ={
        name: "Soloth"
    }
    res.render("index", data);
}


export {
    homeController
}