let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let zero = document.getElementById('0')
let clear = document.getElementById('c')
let equal = document.getElementById('equal')
let display = document.getElementById('disp')

let add = document.getElementById('add')
let sub = document.getElementById('sub')
let mul = document.getElementById('mul')
let div = document.getElementById('div')

let disp_val = ""

/* Numbers*/

one.onclick = function(){
    disp_val += 1
    display.textContent = disp_val
}
two.onclick = function(){
    disp_val += 2
    display.textContent = disp_val
}
three.onclick = function(){
    disp_val += 3
    display.textContent = disp_val
}
four.onclick = function(){
    disp_val += 4
    display.textContent = disp_val
}
five.onclick = function(){
    disp_val += 5
    display.textContent = disp_val
}
six.onclick = function(){
    disp_val += 6
    display.textContent = disp_val
}
seven.onclick = function(){
    disp_val += 7
    display.textContent = disp_val
}
eight.onclick = function(){
    disp_val += 8
    display.textContent = disp_val
}
nine.onclick = function(){
    disp_val += 9
    display.textContent = disp_val
}
zero.onclick = function(){
    disp_val += 0
    display.textContent = disp_val
}
clear.onclick = function(){
    disp_val = disp_val.slice(0,-1)
    display.textContent = disp_val
}

/* Symbols */
add.onclick = function(){
    disp_val += "+"
    display.textContent = disp_val
}
sub.onclick = function(){
    disp_val += "-"
    display.textContent = disp_val
}
mul.onclick = function(){
    disp_val += "*"
    display.textContent = disp_val
}
div.onclick = function(){
    disp_val += "/"
    display.textContent = disp_val
}

/* Calculation Process */


equal.onclick = function(){
    let res = eval(disp_val)
    display.textContent = res
}