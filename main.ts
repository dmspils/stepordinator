input.onGesture(Gesture.Shake, function () {
    Steps += 1
    basic.showNumber(Steps)
})
let Steps = 0
Steps = 0
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < 20 && input.rotation(Rotation.Roll) > -20) {
        music.ringTone(0)
    } else {
        music.ringTone(523)
    }
})
