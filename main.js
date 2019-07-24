const next = document.getElementById('next');
const prew = document.getElementById('prew');

let slides = document.getElementsByClassName('simple-slider_item');
for(let i = 0;i<slides;i++){
    slides[i].style.zindex = slides.length - i;
};

next.onclick = ()=>{
    let activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling){
        activeEl.style.left = "-100%";
        activeEl.classList.remove('active');
        activeEl.nextElementSibling.classList.add('active');
        this.classList.remove('disabled');
        prew.classList.remove('disabled');
        if(!activeEl.nextElementSibling.nextElementSibling){
            this.classList.add('disabled');
        }
    }
}
prew.onclick = ()=>{
    let activeEl = document.querySelector('active');
    if(activeEl.previousElementSibling){
        activeEl.previousElementSibling.style.left ="0%";
        activeEl.classList.remove('active');
        activeEl.previousElementSibling.classList.add('active');
        this.classList.remove('disabled');
        next.classList.remove('disabled');
        if(!activeEl.previousElementSibling.previousElementSibling){
            this.classList.add('disabled')
        }
    }
}



