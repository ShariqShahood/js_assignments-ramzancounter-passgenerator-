var date = new Date().getTime()
var firstramadan = new Date('12 March, 2024').getTime()
var diff = firstramadan - date;

function m1(){
    var month = Math.floor(diff /(1000*24*60*60 * 30));
    document.write("<center><h1>"+month + " Months Left in Ramadan </h1></center>")
}
function m2(){
var day = Math.floor(diff /(1000*24*60*60));
document.write("<center><h1>"+day + " Days Left in Ramadan"+"</h1></center>")
}
function m3(){
var hour = Math.floor(diff /(1000*60*60));
document.write("<center><h1>"+hour + " Hours Left in Ramadan </h1></center>")
}
function m4(){
var minute = Math.floor(diff /(1000*60));
document.write("<center><h1>"+minute + " Minutes Left in Ramadan </h1></center>")
}
function m5(){
var second = Math.floor(diff /(1000));
document.write("<center><h1>"+second + " Seconds Left in Ramadan </h1></center>")
}


var date = moment(new Date())
var firstramadan = moment('12 March, 2024')
var difference = firstramadan.diff(date, 'Days')
var difference1 = firstramadan.diff(date, 'Months')
var difference2 = firstramadan.diff(date, 'Hours')
var difference3 = firstramadan.diff(date, 'Minutes')
var difference4 = firstramadan.diff(date, 'Seconds')

document.write("<center><h1>Second Method</h1></center>")
document.write(difference+" Days<br>")
document.write(difference1+" Months<br>")
document.write(difference2+" Hours<br>")
document.write(difference3+" Minutes<br>")
document.write(difference4+" Seconds<br>")
