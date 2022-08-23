
let header = document.querySelector('header');
header.classList.toggle('fixed', window.scrollY > 0);


let upBtn = document.querySelector('.up');

window.addEventListener('scroll', function(){
   
    header.classList.toggle('fixed', window.scrollY > 0);

    
    if( window.scrollY > 0){
        upBtn.style.bottom = `${15}px`;
        upBtn.style.opacity = `${1}`;
    }else{
        upBtn.style.opacity = 0;
        upBtn.style.bottom = `${-100}px`;
    }
    sectionActive();
});



let barIcone = document.querySelector('.bar');
barIcone.addEventListener("click", function(){
    header.classList.toggle('active');
   
});


upBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
});


let sections = document.querySelectorAll("section");

function sectionActive(){
    let scrollPosition = document.documentElement.scrollTop;

    sections.forEach(section =>{
        if(scrollPosition >= section.offsetTop - section.offsetHeight * .5 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * .5){

            let sectionId = section.attributes.id.value;

            removeActiveClasses();
            addActiveClass(sectionId);
        }
    });
}

let navLinks = document.querySelectorAll("header nav a");


function removeActiveClasses(){
    navLinks.forEach(li =>{
        li.classList.remove('active');
    });
}


function addActiveClass(id){
    document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let section = document.querySelector(currentId);

    window.scroll({
      top: section.offsetTop,
      behavior: "smooth",
    });
  });
});


let skills = document.querySelector('.skills');

window.onscroll = function(){

    
    let skillsOffSetTop = skills.offsetTop;

 
    let skillsOffSetHeight = skills.offsetHeight;

    
    let windowHeight = this.innerHeight;

    
    let windowScroll = this.pageYOffset;


    if(windowScroll > (skillsOffSetTop + skillsOffSetHeight- windowHeight)){

        let allSpan = document.querySelectorAll('.skills-content .prograss-bar .prog');

        allSpan.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });

    };
}