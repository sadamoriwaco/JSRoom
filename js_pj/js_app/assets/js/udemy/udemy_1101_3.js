// ■Classを使ったコード整理方法
<body>
    <div id="container">
        <div class="animate-title inview">
            <span class="char">A</span>
            <span class="char">N</span>
            <span class="char">I</span>
            <span class="char">M</span>
            <span class="char">A</span>
            <span class="char">T</span> 
            <span class="char">I</span>
            <span class="char">O</span>
            <span class="char">N</span>       
        </div>
    </div>
    <script src="main.js"></script>
</body>

// ※main.js
document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const el2 = document.querySelector('.animate-title-2');
    const str = el.innerHTML.trim().split("");
    const str2 = el2.innerHTML.trim().split("");

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">$[curr]</span>`;
    },"");

    el2.innerHTML = str2.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">$[curr]</span>`;
    },"");

}); 

class TextAnimation {
    constructor(el) {
        this.el = el;
        alert(el);
    }
}
const ta = new TextAnimation('hello world');
alert(ta.el);