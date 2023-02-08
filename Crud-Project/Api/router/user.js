const express = require("express")
const router = express.Router()
const db = require("../database")

router.post("/add", (req, res)=> {
    console.log("ADD API IS CALLED", req.body)
    db.query(`INSERT INTO data (name, age, city) VALUES ("${req.body.name}", ${req.body.age}, "${req.body.city}")`, (err, result) => {
        console.log(err, result)
        if(result){
            return res.json({isSuccess : true})
        }
        else{
            return res.json({isSuccess : false})
        }
    })
    
})

router.post("/update", (req, res)=> {
    console.log("UPDATE API IS CALLED", req.body)
    db.query("UPDATE data SET name=?,age=?,city=? WHERE id = ?", [req.body.name,req.body.age,req.body.city, req.body.id], (err, result) => {
        console.log(err, result)
        if(result){
            return res.json({isSuccess : true})
        }
        else{
            return res.json({isSuccess : false})
        }
    })
})

router.post("/delete", (req, res)=> {
    console.log("DELETE API IS CALLED", req.body)
    db.query('DELETE FROM data WHERE id=?', [req.body.id], (err, result) => {
        console.log(err, result)
        if(result){
            return res.json({isSuccess : true})
        }
        else{
            return res.json({isSuccess : false})
        }
    })
})

router.get("/", (req, res)=> {
    db.query("Select * from data", (err, result) => {
        if(result){
            console.log(result)
            return res.json({isSuccess : true, data : result})
        }
        else{
            return res.json({isSuccess : false})
        }
    })
    
})

module.exports = router