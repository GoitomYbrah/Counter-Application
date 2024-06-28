let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let counterTitle = document.getElementById("counter-title")
let counterName = document.getElementById("counter-name")
let count = 0

counterName.addEventListener("input", updateCounterName)

function updateCounterName() {
    counterTitle.textContent = counterName.value + ":"
}

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0) {
        count -= 1
        countEl.textContent = count
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    reset()
}

function reset() {
    countEl.textContent = 0
    count = 0
}