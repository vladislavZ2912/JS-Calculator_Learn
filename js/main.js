const metr_range = document.querySelector('#square-range')
const metr_input = document.querySelector('#square-input')
const bacePrice = 6000;
const totalPriceEl = document.querySelector('#total-price')

const typeFixs = document.querySelectorAll('input[name="type"]')
const typeBuiding = document.querySelectorAll('input[name="building"]')
const typeRooms = document.querySelectorAll('input[name="rooms"]')
const typeCeils = document.querySelectorAll('input[type="checkbox"]')

const promoT = document.querySelector('#PromoText')
const promoB = document.querySelector('#PromoBTN')
const promoCode = '2022'

let totalPrice





metr_range.addEventListener('input', function(){
    metr_input.value = metr_range.value
})
metr_input.addEventListener('input', function(){
    metr_range.value = metr_input.value
})

function calculater(){
    totalPrice = bacePrice*parseInt(metr_input.value)

    for (let radio of typeFixs){
        if (radio.checked){
            totalPrice = totalPrice*parseFloat(radio.value)
            totalPriceEl.textContent = totalPrice.toFixed()
        }
    }
    for(let radio of typeBuiding){
        if (radio.checked){
            totalPrice = totalPrice*parseFloat(radio.value)
            totalPriceEl.textContent = totalPrice.toFixed()
        }
    }
    for(let radio of typeRooms){
        if (radio.checked){
            totalPrice = totalPrice*parseFloat(radio.value)
            totalPriceEl.textContent = totalPrice.toFixed()
        }
    }
    for(let radio of typeCeils){
        if (radio.checked){
            totalPrice = totalPrice*parseFloat(radio.value)
            totalPriceEl.textContent = totalPrice.toFixed()
        }
    }
}

const inputs = document.querySelectorAll('input')
for (let input of inputs){
    input.addEventListener('input',function(){
        calculater();
    })
}

promoB.addEventListener('click', function(){
    if(promoT.value === promoCode){
        totalPrice = totalPrice*0.9
        totalPriceEl.textContent = totalPrice.toFixed()
    }
})

calculater()