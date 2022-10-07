input.onButtonPressed(Button.A, function () {
    for (let counter = 0; counter <= num; counter++) {
        basic.showNumber(counter)
    }
})
input.onButtonPressed(Button.AB, function () {
    counter = 1
    while (counter <= 10) {
        basic.showNumber(counter)
        counter += 2
    }
    caras()
})
function caras () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
input.onButtonPressed(Button.B, function () {
    counter = 2
    while (counter <= 10) {
        basic.showNumber(counter)
        counter += 2
    }
    caras()
})
let counter = 0
let num = 0
num = randint(5, 10)
basic.showNumber(num)
for (let counter = 0; counter <= num; counter++) {
    basic.showNumber(counter)
    for (let index = 0; index < counter; index++) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
