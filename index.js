var clear;
var Colors = [
    "rgb(252, 78, 78)",
    "rgb(85, 245, 49)",
    "rgb(49, 167, 245)",
    "white",
    "#e28743",
    "blue"
]
var MyEYE = Colors[Math.floor(Math.random() * Colors.length)];
var getValue = function () {
    var number = document.getElementById('number').value;
    number++;
    if (number == 500) {
        number = 0;
    }
    document.getElementById('number').value = number;
}
function start() {
   clear =  setInterval(getValue, 1);
   document.body.style.backgroundColor = MyEYE;
}
function stop() {
    clearInterval(clear);
    var score = document.getElementById('number').value;
    alert('Chúc mừng!!! Điểm của bạn là: ' + score);
    if (score < 200) {
        alert('200 điểm trở lên mới đậu, dưới trung bình, loại:)))))');
        document.body.style.display = 'none';
        document.write('<h1 style="font-family: sans-serif;">Oh no loại rồi, ấn reset để làm lại cuộc đời:)))</h1><div style="font-family: sans-serif;font-size: 25px;"><center><a style="text-decoration: none" href="http://doananhquan.github.io/vongquaymayman/">Reset</a></center></div>')
    };
    document.getElementById('number').value = 0;
    window.location.href = 'https://doananhquan.github.io/vongquaymayman/';
}
// while (true){
//     var MyEYE = Colors[Math.floor(Math.random() * Colors.length)];
//     document.getElementById("number").style.color = MyEYE;
// }
