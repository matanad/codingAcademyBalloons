'use strict'

var gIsMark
var gElModal
var gModalTimeOutIdx

function onInit() {
    gElModal = document.querySelector('.modal')
    gIsMark = false
    setTimeout(changeHeader, 3000)
}

function changeHeader() {
    const elHeader = document.querySelector('h1')
    elHeader.innerText = 'I Love JS'
}

function onMark(elBtn) {
    elBtn.innerText = gIsMark ? 'Mark' : 'Unmark'
    var elSpans = document.querySelectorAll('.box span')
    for (var i = 0; i < elSpans.length; i++) {
        elSpans[i].classList.toggle('mark')
    }
    gIsMark = !gIsMark
}


function onMouseOver(elImg) {
    elImg.src = 'img\\ca.png'
}

function onMouseOut(elImg) {
    elImg.src = 'img\\ninja.png'
}

function onImgClicked() {
    onBless()
}

function onChangeSubHeader(elSpan) {
    if (elSpan.className !== 'mark') return
    const elSubHeader = document.querySelector('h2')
    var str = 'its so...' + elSpan.innerText
    elSubHeader.innerHTML = str
}

function onHandleKey(ev) {
    if (ev.key === 'Escape') onCloseModal()
}

function onOpenModal() {
    clearTimeout(gModalTimeOutIdx)
    gElModal.style.display = ('block')
    gModalTimeOutIdx = setTimeout(onCloseModal, 5000)
}
function onCloseModal() {
    clearTimeout(gModalTimeOutIdx)
    gElModal.style.display = ('none')
}


function onBless() {
    const elModalHeader = document.querySelector('.modal h2')
    var currTime = getTime()
    elModalHeader.style.color = getRandomColor()
    elModalHeader.innerText = `You were blessed at ${currTime}`
    onOpenModal()
}


function getTime() {
    return new Date().toString().split(' ')[4];
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

