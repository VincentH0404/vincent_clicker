document.getElementById("count-el").innerText = 5
let t = document.createElement("title")
t.innerHTML = "Clicker"
document.head.appendChild(t)

let count = 0
function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}
