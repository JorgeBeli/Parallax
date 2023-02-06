let header = document.getElementById('header')
let nube1 = document.getElementById('nube1')
let fondo_transparente = document.getElementById('fondo_transparente')
let nube2 = document.getElementById('nube2')
let fondo = document.getElementById('fondo')
let viento = document.getElementById('viento')
let persona = document.getElementById('persona')
let eslogan = document.getElementById('eslogan')
let btn = document.getElementById('btn')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    fondo_transparente.style.marginLeft = value * 0.7 + 'px'
    nube1.style.left = value * - 2.5 + 'px'
    nube2.style.left = value * - 3.5 + 'px'
    btn.style.marginTop = value * 0.7 + 'px'
    eslogan.style.marginBottom = value * - 1 + 'px'
    viento.style.left = value * - 5 + 'px' 
    header.style.marginTop = value * 0.4 + 'px'
    persona.style.marginLeft = value * 1 + 'px'
})