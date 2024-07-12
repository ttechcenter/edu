//  change navbar styles on scroll

window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll' , window.scrollY > 0)
}) 

//show/hide faq answers

const faqs = document.querySelectorAll('.faq'); 
faqs.forEach(faq => {

    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //change icon

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
    
})

//show /hide nav menu

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closebtn.style.display = "inline-block"
    menubtn.style.display = "none"
})

//close nav menu


const closeNav = () => {
    menu.style.display = "none"
    closebtn.style.display = "none"
    menubtn.style.display = "inline-block" 
}

closebtn.addEventListener('click', closeNav)