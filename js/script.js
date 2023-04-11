window.onscroll = () => {
let header = document.querySelector('.menu')

header. classList.toggle('sticky', window.scrollY > 100)

}