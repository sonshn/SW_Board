var express = require('express');
var router = express.Router();
//MySQL loading
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 5,
  host : 'localhost',
  user: 'root',
  password: '1234',
  database: 'tutorial'
});
//multer loading (multer:이미지 업로드를 도와주는 node.js module)
var multer = require('multer');

/* GET home page. */
router.get('/', function(req,res,next) {
  pool.getConnection(function(err,connection){
    connection.query('SELECT * FROM board',function(err,rows){
      if(err) console.error("err : "+err);
      console.log("rows : " + JSON.stringify(rows));

      res.render('index', { title: 'test',rows: rows});
      connection.release();
    });
  });
});

module.exports = router;
