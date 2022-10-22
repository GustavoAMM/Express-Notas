const express = require("express");
const app = express();
const morgan = require("morgan");

// function logger(req, res, next) {
//   console.log(
//     `Route received: ${req.protocol}://${req.get("host")}${req.originalUrl}`
//   );
//   next();
// }

//Settings
app.set('appName','AngelExpress')
app.set('port','3000')
app.set('view engine','ejs')

//middlewares
app.use(express.json());
app.use(morgan('dev'));


//Metodo all() de express 
// app.all(`/user`, (req, res, next) => {
//   console.log("Por qui paso");
//   next();
// });


//Rutas

app.get('/',(req,res)=>{
  const data = [{name:"angel"},{name:"gus"},{name:"eje"},{name:"ejemplo"}]
  res.render("index.ejs",{personas:data})
});

app.get("/user", (req, res) => {
  res.json({
    nombre: "angel",
    apellido: "montoya",
    age: 20,
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Petición post recibida");
});

app.put("/update/:id", (req, res) => {
  console.log(req.body);
  res.send(`user ${req.params.id} update`);
});

app.delete("/delete/:userId", (req, res) => {
  res.send(`usuario ${req.params.userId} deleted`);
});


//Middleware static
app.use(express.static('public'))


//Puerto de escucha
app.listen(app.get('port'), () => {
  console.log(app.get('appName'))
  console.log("server on port 3000");
});
