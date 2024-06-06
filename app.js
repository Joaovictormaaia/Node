const fs = require("fs")

//fs.readFile('demo.html', 'utf8', function (err,data){

//    console.log(data)
//})

//fs.readFile('style.css', 'utf8', function (err,data){

//    console.log(data)
//}) 

//fs.readFile('demo.html', 'utf8', function (err,data){

//    console.log(data)
//}) 

// let data = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <link rel="stylesheet" href="style.css">
// <body>
//     <h1>O tata é foda</h1>
//     <img src="https://i.ytimg.com/vi/CCvRaDoxXw8/hqdefault.jpg" alt="">
// </body>
// </html>`

// let data2 = `
// h1{
//    color:red;
//    font-size:20rem;
// }
// img{
//     width:100vw;
// }`

// fs.writeFile("index.html",data,(error)=>{
//     if(error){
//         console.log("Erro na criação do arquivo")
//     } else {
//         console.log("Arquivo criado com sucesso")
//     }
// })

// fs.writeFile("style.css",data2,(error)=>{
//     if(error){
//         console.log("Erro na criação do arquivo")
//     } else {
//         console.log("Arquivo criado com sucesso")
//     }
// })

// const path = 'src/assets'
// const path2 = 'src/app/page'
// const path3 = 'src/app/components'
// fs.mkdir(path, { recursive: true }, error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Pasta criada com sucesso")
//     }
// });

// fs.mkdir(path2, { recursive: true }, error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Pasta criada com sucesso")
//     }
// });

// fs.mkdir(path3, { recursive: true }, error => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Pasta criada com sucesso")
//     }
// });

// fs.unlink("src/app/components/index.html",error=>{
//     if(error) {
//         console.log("Error ao remover arquivos")
//     } else {
//         console.log("Arquivo removido com sucesso")
//     }
// })

// fs.rm("src",{recursive:true,force:true},error=>{
//     if(error) {
//         console.log("Error ao remover arquivos")
//     } else {
//         console.log("Pasta removido com sucesso")
//     }
// })
// let text = "\n  2     Walter    00748788328"

// fs.appendFile("log.txt",text, error=> {
//     if(error) {
//         console.log("Erro ao escrever no arquivo")
//     } else {
//         console.log("Texto adicionado com sucesso")
//     }
// })