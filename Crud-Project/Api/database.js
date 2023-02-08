const mysql = require("mysql")

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'userdata'
})

db.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!:)');
    }
  });

module.exports = db








