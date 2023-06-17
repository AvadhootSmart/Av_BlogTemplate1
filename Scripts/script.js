let btn_open = document.getElementById('open')
let btn_open2 = document.getElementById('open2')
let main = document.getElementsByClassName('main')
const content = document.getElementsByClassName('card')




showimg = () => {
    content[0].style.opacity = 0
}
btn_open.addEventListener("mouseover", showimg)

showtxt = () => {
    content[0].style.opacity = 1
}
btn_open.addEventListener("mouseout", showtxt)


showimg2 = () => {
    content[1].style.opacity = 0
}
btn_open2.addEventListener("mouseover", showimg2)

showtxt2 = () => {
    content[1].style.opacity = 1
}
btn_open2.addEventListener("mouseout", showtxt2)












