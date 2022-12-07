// ■DOMページの初期化
const dcl = document.querySelecteor('.dcl');
const load = document.querySelecteor('load');

document.addEventListener("DOMContentLoaded",function() {
    dcl.classList.add('done');
});

window.addEventListener("load", function() {
    load.classList.add('done');
});