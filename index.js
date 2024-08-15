//import json-server in index.js using ES5
const jsonServer =  require('json-server')
//create a server for media player app
const mediaPlayerServer = jsonServer.create()
//setup the path/route for json file
const router = jsonServer.router("db.json")
//middleware used for converting json data to js
const middleware = jsonServer.defaults()
//Set up port for running server
const PORT = 4000 || process.env.PORT
//use middle ware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)


mediaPlayerServer.listen(PORT,()=>{
    console.log(`Media plyer app started at port:${PORT} and waiting for client requests!!!`);
})
