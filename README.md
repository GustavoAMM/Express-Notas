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

## Nodemon 

 Para no estar que reiniciar la consola cada vez que se hace un cambio es recomendable instalar nodemon
 ```
 npm i nodemon -D
 ```
 Con el -D le digo que solo va a ser para el entorno de desarrollo y no de producción 
 
 Para correr ahora el proyecto es:
 ```
   npx nodemon nombre_del_archivo.js
 ```


## Express routing

Los metodos hacen que el navegador pueda pedir o mandar determinados recursos al servidor y despues decirle que hacer con esos recursos, ejemplo: get pide algo para mostra a el cliente, post manda datos desde el navegador para que los guarde el servidor, put manda datos para actualizar ciertos datos en el servidor y delete le dice a el servidor que elimine ciertos datos que tiene almacenados. 

Ejemplo de rutas tipo get:

```
  app.get("/", (req, res) => {
   res.send("Petición get recibida");
  });

```
> Sirven para devolver cosas 

Ejemplo de rutas tipo post:

```
  app.post("/post", (req, res) => {
    res.send("Petición post recibida");
  });
```
> Sirver para recibir determinados datos y procesar o guardar datos 

EJemplo de rutas tipo put:

```
  app.put("/update", (req, res) => {
    res.send("Petición actualización recibida");
  });
```
> Actualizar datos o administrarle logica para poder regresar al navegador

Ejemplo de rutas tipo delete:

```
  app.delete("/delete", (req, res) => {
    res.send("Petición eliminación recibida");
  });
```
> Tomar la info del navegaro para poder eliminarla en el servidor y regresar una respuesta al navegador
