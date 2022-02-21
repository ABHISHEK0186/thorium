function printDate(){
    let date_ob= new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    console.log(date);
}

function printMonth(){
    let date_ob= new Date();
    let month= ("0" + (date_ob.getMonth() + 1)).slice(-2);
    console.log(month);

}

function getBatchInfo(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
}

module.exports.dat= printDate
module.exports.mon= printMonth
module.exports.bat= getBatchInfo