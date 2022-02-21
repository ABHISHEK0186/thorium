const express = require('express');
const router = express.Router();
let obj= require('../logger/logger')
let cal= require('../util/helper')
let letter= require('../validator/formatter')
let lod= require('../loadash/load')

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
    lod.ch()
    lod.ta()
    lod.un()
    res.send('My first ever api! yayy')
});

module.exports = router;