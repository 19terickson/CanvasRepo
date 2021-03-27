// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO
let name = "John Smith"
let x = 10

let y

x = 18

const PI = 3.14

console.log(typeof x)
console.log(typeof PI)
console.log(typeof name)

console.log(name + " said that when he was " + x + " years old he learned that PI = " + PI + ".")
console.log(`${name} said that when he was ${x} years old he learned that pi = ${PI}.`)
console.log("Hello World!")

document.write('<table class="table">')
for(let i = 1;  i <= 12; i++){
    document.write("<tr>")
    for(let j = 1; j <= 12; j++){
       document.write(`<td>${i * j}</td>`)
    }
    document.write("</tr>")
}
document.write("</table>")

function render(){
let c = document.querySelector("#myCanvas")
if(c.getContext){
    let ctx = c.getContext("2d")
    ctx.clearRect(0,0, 800, 500)

    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(650, document.getElementById('y').value, 75, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#00FF00"
    ctx.fillRect(0, 400, 800, 100)

    ctx.fillStyle = document.getElementById('c').value
    ctx.fillRect(400, 300, 170, 100)

    ctx.fillStyle = "green"
    ctx.fillRect(200, 200, 50, 50)

    ctx.fillStyle = "green"
    ctx.fillRect(150, 250, 50, 50)

    ctx.fillStyle = "green"
    ctx.fillRect(250, 250, 50, 50)

    ctx.fillStyle = "#654321"
    ctx.fillRect(200, 250, 50, 150)

    ctx.fillStyle = "black"
    ctx.fillRect(420, 270, 25, 30)

    ctx.fillStyle = "#654321"
    ctx.fillRect(450, 350, 25, 50)

    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(467, 377, 4, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#ADD8E6"
    ctx.fillRect(510, 325, 30, 35)

    ctx.fillStyle = "black"
    ctx.fillRect(522, 325, 5, 35)

    ctx.fillStyle = "black"
    ctx.fillRect(510, 340, 30, 5)

    ctx.fillStyle = "#D3D3D3"
    ctx.beginPath()
    ctx.arc(430, 260, 10, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#D3D3D3"
    ctx.beginPath()
    ctx.arc(435, 245, 10, 0, 2 * Math.PI)
    ctx.fill()

    ctx.fillStyle = "#D3D3D3"
    ctx.beginPath()
    ctx.arc(432, 230, 10, 0, 2 * Math.PI)
    ctx.fill()

        }
}
document.getElementById('y').onchange = render
document.getElementById('c').onchange = render
