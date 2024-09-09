'use strict';
const fs = require('fs');

const path = require('path');

const express = require('express');

const router = express.Router();


let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../', 'views', 'shop1.html'));
// });

router.get('/', function (req, res, next) {
  //setInterval(() => {
    
  res.render('index', {student}) 
 
}
);


router.get('/nextpage', function (req, res, next) {
  //setInterval(() => {
    
  res.render('index1', {}) 
 
}
);
// router.get("/ftg1", function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../', 'views', 'ftg1.html'));
  
// });

module.exports = router;
