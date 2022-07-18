var clear;
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
}
function stop() {
    clearInterval(clear);
    var score = document.getElementById('number').value;
    alert('Chúc mừng!!! Điểm của bạn là: ' + score);
    if (score < 200) {
        alert('200 điểm trở lên mới đậu,dưới trung bình, loại:)))))');
        document.body.style.display = 'none';
        document.write('<h1 style="font-family: sans-serif;">Oh no loại rồi, ấn reset để làm lại cuộc đời:)))</h1><div style="font-family: sans-serif;font-size: 25px;"><center><a style="text-decoration: none;" <a href="http://doananhquan.github.io/vongquaymayman/">Reset</a></center></div>')
    };
    document.getElementById('number').value = 0;
}