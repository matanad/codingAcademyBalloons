'use strict'

var gElBalloons
var gBalloons
var gInterval
var gClicked
var gIsProccessing
const gPlaySound = new Audio('pop.wav')
const body = document.body

function onInit() {
    // gIsProccessing = false
    gClicked = 0
    gBalloons = [{bottom: 10, speed: 10},
                {bottom: 4, speed: 15},
                {bottom: 0, speed: 20},
                {bottom: 7, speed: 12},
                {bottom: 2, speed: 18}]
    gElBalloons = document.querySelectorAll('.balloon')
    gIsProccessing = false
    gInterval = setInterval(goUp, 150);
}

function goUp() {
    const elResetBtn = document.querySelector('button')
    for (var i = 0; i < gBalloons.length; i++) {
        if (gBalloons[gBalloons.length-1].bottom > body.clientHeight + body.clientHeight/1.5 ||
        gClicked === gBalloons.length) {
            clearInterval(gInterval)
            elResetBtn.style.opacity = 100
            return
        }
        gBalloons[i].bottom += gBalloons[i].speed
        gElBalloons[i].style.bottom = gBalloons[i].bottom
    }
}

function onBaloonClicked(elBalloon) {
    if (gIsProccessing) return
    elBalloon.style.opacity = '0'
    gPlaySound.play()
    gClicked++
}

function onResetBtn() {
    const elResetBtn = document.querySelector('button')
    clearInterval(gInterval)
    elResetBtn.style.opacity = 0
    for (var i = 0; i < gBalloons.length; i++) {
        gElBalloons[i].style.transition = '0s'
        gElBalloons[i].style.opacity = '100'
        gElBalloons[i].style.transition = '1.5s'
        gBalloons[i].bottom += 0
        gElBalloons[i].style.bottom = 0
    }
    gIsProccessing = true
    setTimeout(onInit, 2250)
}