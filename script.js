const menu = document.getElementById('menu');
const mainMenu = document.getElementById('main-menu');
const acount = document.getElementById('acount');

menu.addEventListener('click', function () {
    mainMenu.classList.toggle('toggle');
});
menu.addEventListener('click', function () {
    acount.classList.toggle('toggle');
});



let coucou = document.getElementsByClassName('coucou');

function entry(elt, classname, duration) {
    for (let i = 0; i < elt.length; i++) {
        setTimeout(function () {
            elt[i].classList.add(classname)
        }, (i + 1) * duration)
    }
};
window.addEventListener('load', entry(coucou, 'coucou2', 500));




let limit = window.innerHeight;

function reveal(AnimatedItem, classname, duration) {
    
    let elts = document.querySelectorAll(AnimatedItem);

    window.addEventListener('scroll', function () {

        for (let i = 0; i < elts.length; i++) {

            function control(index) {

                let elt = elts[index];
                let rect = elt.getBoundingClientRect();


                if (rect.top < window.innerHeight) {

                    setTimeout(function () {
                        elt.classList.add(classname)
                    }, (index + 1) * duration);
                } else {
                    setTimeout(function () {
                        elt.classList.remove(classname)
                    }, (index + 1) * duration);
                }

            }
            control(i)
        }
    })
};

reveal('.hide', 'show', 300);


let nav = document.querySelector('.navbar');
let st1 = document.querySelector('.st1');
let st2 = document.querySelector('.st2');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 85) {
        nav.classList.add('bg-white');
        st1.classList.add('st1bis');
        st2.classList.add('st2bis');
    } else {
        nav.classList.remove('bg-white');
        st1.classList.remove('st1bis');
        st2.classList.remove('st2bis');
    }
})

let lastposition = 0;
function scrollDetect() {
    let base = document.documentElement;
    let limit = base.offsetHeight - base.clientHeight;
    if (lastposition < base.scrollTop && base.scrollTop > 85) {
        nav.classList.add('hidden');
        lastposition = base.scrollTop;
    }if (lastposition < base.scrollTop) {
        nav.classList.remove('fixed');
        lastposition = base.scrollTop;
    }
      if (lastposition > base.scrollTop && base.scrollTop < limit){
        nav.classList.add('fixed');
        nav.classList.remove('hidden');
        lastposition = base.scrollTop;
    }
console.log(limit, base.scrollTop)
}



window.addEventListener('scroll', scrollDetect)

let right = document.querySelector('.toright');
let left = document.querySelector('.toleft');
let slideshow = document.querySelector('.slideshow');
let slideElts = document.querySelectorAll('.slideable');
let slider = document.querySelector('.slide-container');

function slide() {

let nbColumns = 25;
let browserWidth = 100;
let val = browserWidth / nbColumns * 7;
let valMob = browserWidth / nbColumns * 22;
let position = 0;
let limit = slideElts.length;
let i = 0;

right.addEventListener('click', function () {
    if (window.innerWidth < 1190 && i < limit - 1) {
        position -= valMob;
        slider.style.transform = ("translateX(" + position + "vw)");
        i++;
    } else if (window.innerWidth >= 1190 && i < limit - 3) {
        position -= val;
        slider.style.transform = ("translateX(" + position + "vw)");
        i++;
    }
});

left.addEventListener('click', function () {
    if (window.innerWidth < 1190 && i > 0) {
        position += valMob;
        slider.style.transform = ("translateX(" + position + "vw)");
        i--;
    } else if (window.innerWidth >= 1190 && i > 0) {
        position += val;
        slider.style.transform = ("translateX(" + position + "vw)");
        i--;
    }
});
}

slide();