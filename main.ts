let Tiempo = 0
let Horas = 0
let Minutos = 0
let Segundos = 0
basic.forever(function () {
    Tiempo = 99999
    Horas = Tiempo / 3600
    Tiempo = Tiempo % 3600
    Minutos = Tiempo / 60
    Segundos = Tiempo % 60
    basic.showNumber(Horas)
    basic.showNumber(Minutos)
    basic.showNumber(Segundos)
})
