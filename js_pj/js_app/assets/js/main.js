document.addEventListener('DOMContentLoaded', function(){

    const child = document.querySelector('.child');
    const cb = function(entries, observer){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                console.log('inview');
                entry.target.classList.add('inview');
            }else{
                console.log('out view');
                entry.target.classList.remove('inview');
            }
        });
    }
    
    const so = new IntersectionObserver(callback.bind(this),options)
    const options = {
        root:null,
        rootMargin:"-300px 0px",
        threshold:[0,0.5,1]
    };
    
    const io = new IntersectionObserver(cb,options);
    // io.observe(child);
    els.forEach(el => io.observer(el));
});

class ScrollObserver{
    constructor(els){
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root:null,
            rootMargin:"0px",
            threshold:0
            
        }
    }
}

_init(){
    const callback = function(entries,options){
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                this.cb(entry.target,false)
            }
        })
    }
}

destroy(){
    this.io.disconnect();
}