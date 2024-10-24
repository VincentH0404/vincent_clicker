document.getElementById("count-el").innerText = 0
let t = document.createElement("title")
t.innerHTML = "Clicker"
document.head.appendChild(t)

let count = 0
let base_count = 1
let winning_num = Math.floor(Math.random() * 20 + base_count) 
function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count

    if (count % 10 == 0) {
        document.body.setAttribute("style", "filter: drop-shadow(32px 32px 40px blue) invert(205%);", "filter: hue-rotate(90deg);")
    }
    else {
        document.body.setAttribute("style", "filter: drop-shadow(0px 0px 0px white) invert(0%);", "filter: hue-rotate(0deg);")
    }
    if (count == winning_num) {
        document.getElementById("popup").setAttribute("style", "display: contents;")
    }
    else {
        document.getElementById("popup").setAttribute("style", "display: none;")
    }
    if (count % 20 == 0) {
        base_count += 20
        winning_num = Math.floor(Math.random() * 20 + base_count)
    }
    
}


let previous_str = document.getElementById("Previous")
let previous_count = 0
function save() {
    if (count != previous_count) {
        previous_str.innerHTML += count + " - "
        previous_count = count
    }

}
