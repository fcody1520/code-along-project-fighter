let createForm = document.getElementById('create-form')
let charName = document.querySelector('#create-name-input')
let charPower = document.getElementById('create-power-input')
let charHealth = document.getElementById('create-health-input')


createForm.addEventListener('submit',(evt) => {
    evt.preventDefault()
    if (isNaN(+charPower.value)){
        alert('Your power must be a number, dingus...')
        return
    }

    if (isNaN(+charHealth.value)){
        alert(`Bruh, what aren't you getting? Healh needs to be a number too!`)
        return
    }

    let maBod ={
        name: charName.value,
        power: charPower.value,
        health: charHealth.value
    }

    axios.post('/create-fighter', maBod)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })

})