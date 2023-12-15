import express from "express";
import { dirname,join } from 'path';
import { fileURLToPath } from "url";


let app = express();

// showing how we derived the full path to out HTML file
// console.log(import.meta.url);
// console.log(fileURLToPath(import.meta.url));
// console.log(dirname(fileURLToPath(import.meta.url)));
// console.log(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html'));


app.get('/', (req,res) => {
    res.sendfile(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html'))
})

app.get('/css', (req,res) => {
    res.sendfile(join(dirname(fileURLToPath(import.meta.url)), '/public/styles.css'))
})

app.get('/js', (req,res) => {
    res.sendfile(join(dirname(fileURLToPath(import.meta.url)), '/public/main.js'))
})

app.listen(8080, () => {
    console.log('We have started the server on port 8080.');
})

