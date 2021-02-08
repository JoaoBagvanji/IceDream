/*show menu /mostrar menu*/
//pega os elementos de botao de alteracao(toggle) e navegacao 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    //tentar validar as duas variaveis ou botoes
    // Validate that variables exist
    if(toggle && nav){
        //evento ao clicar
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            //mostrar
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*remover menu mobile/remove menu mobile*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*seccao scrool link de activacao/scrool sections active link*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*mudar background do cabecalho/change background header*/

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag

    if(this.scrollY >=200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*show scroll top*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag

    if(this.scrollY >=560) scrollTop.classList.add('scroll-top');else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll',scrollTop)

/*================ Dark Light theme ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'light'


//We validate if the user previously choose a topic
if(selectedTheme){
    // If the validation is fulfilled ,we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}

//Activate/deactivate the theme
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user choose

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*===============Scroll reveal animation ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:true
});

sr.reveal(`.home__data, .home__img,
.about__data,.about__img,
.services__content,.menu__content,
.app__data,.app__img,
.contact__data,.contact__button,.footer__content`,{
    interval : 200
})

