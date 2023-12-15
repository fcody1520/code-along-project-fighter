import express from "express";
import { dirname,join } from 'path';
import { fileURLToPath } from "url";


let app = express();


app.use(express.json())

let db = []
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

app.get('/fighters', (req,res) => {
    res.status(200).send(db)
})

app.post('/create-fighter', (req,res) => {
    db.push(req.body);
    res.status(200).send(db)
})

app.delete('/delete-fighter/:name', (req,res) => {
    let deleteName = req.params.name
    // loop through the database and see if there is a match
    for( let i=0;i < db.length; i++){
        if(db[i].name === deleteName){
            db.splice(i, 1)
        } 
    }

    res.send(db)
    //if you find a match, delete the match

    // did you delete anything?

    // 1: yes, send success response

    // 2: no, send failed response


    
})

app.listen(8080, () => {
    console.log('We have started the server on port 8080.');
})

