// ■DOM練習アニメーション
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
    // console.log(el.innerHTML.trim());
    const str = el.innerHTML.trim();
    let concatStr = '';

    for(let c of str){
        c = c.replace(/\s+/,'&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }
    console.log(concatStr);
}); 