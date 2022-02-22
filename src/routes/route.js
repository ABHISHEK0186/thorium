const express = require('express');
const router = express.Router();
let obj= require('../logger/logger')
let cal= require('../util/helper')
let letter= require('../validator/formatter')
let lodash= require('lodash')

router.get('/test-me', function (req, res) {
    obj.wel()
    cal.dat()
    cal.mon()
    cal.bat()
    letter.tr()
    letter.lC()
    letter.uC()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let array1= ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
    let result= lodash.chunk(array1,3);
    console.log(result);



    let arr= [1,3,5,7,9,11,13,15,17,19]
    let res1= lodash.tail(arr);
    console.log(res1);



    let arrays= [1,2]
    let arr2= [2,3]
    let arr3= [4,5]
    let arr4= [5,6]
    let arr5 =[6,7,8]
    let resu= lodash.union([arrays,arr2,arr3,arr4,arr5]);
    console.log(resu);
    

    let movie1= ["horror" ,"The Shining"]
    let movie2= ["drama" , "Titanic"]
    let movie3= ["thriller" ,"shutter island"]
    let movie4= ["fantasy", "Pans labyrinth"]
    let outcome= lodash.fromPairs([movie1,movie2,movie3,movie4]);
    console.log(outcome);
    res.send('My first ever api! yayy')
});

module.exports = router;