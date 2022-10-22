# Notas del curso de Express

> Sábado 22 de octubre de 2022
>
> Requerimientos: 
>  - Conceptos basicos de Front-End (html,css,javaScript)
>  - Conceptos basicos de nodeJs(npm)
>
> By Gustavo Angel Montoya Martínez 

## ¿Qué es?

Es un framework de nodejs (js) que nos permite crear aplicaciones del lado del servidor usando codigo de terceros.

Facilita la creacion de aplicaciones web ya que Express ya nos da el codigo de funcionalidades.

Permite compartir codigo entre el navegador y el servidor.

Express forma parte de algunos stack web, por ejemplo:  MEAN o MEARN

Se pueden crear aplicaciones MVC (modelo vista controlador) 

## Instalación

[Documentación express](https://expressjs.com/)

> Nota: Es de buenas practicas crear un archivo package.json ya que este archivo describe nuestro programa.
>
>   ```
>   npm init -y
>   ```

Instalar Express **solo** para este proyecto 
```
npm i express 
```


## Node vs Express (Servidor - Hola mundo)

Node:

```
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("hello world");
  });

  server.listen(3000,()=>{
    console.log("server on port 3000")
  })
```

Express:

```
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.listen(3000, () => {
    console.log("server on port 3000");
  });
```
