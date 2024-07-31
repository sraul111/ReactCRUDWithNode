const express = require('express')
const app = express();
const mysql=require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: "33061",
    password: "mypassword",
    database:"employeeSystem",
});

app.post('/create',(req, res)=>{
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query("insert into employees (name, age, country, position, wage) values (?,?,?,?,?)",
        [name,age,country,position,wage], (err,result)=>{
             if(err) {
                console.log(err)
             } else{
                res.send("Values Inserted");
             }
        });
})

app.listen(3001, ()=>{
    console.log("ur server is running on port 3001")
})