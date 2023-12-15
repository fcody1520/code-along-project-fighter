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
        loadFightersToDom(response.data);
    })
    .catch((error) => {
        console.log(error);
    })

})

axios.get('/fighters')
.then((result) => {
    loadFightersToDom(result.data);
})
.catch((error) => {
    console.log(error);
})

function loadFightersToDom(fightersArray){
    // loop through array to get each object called fighter
    document.getElementById('fighters-display').innerHTML = ''
    // start with a clean slate
    for (let i = 0; i< fightersArray.length; i++){
        // make 4 new elements
        let container = document.createElement('div')
        let heading = document.createElement('h3')
        let powerP = document.createElement('p')
        let healthP = document.createElement('p')
        //three of those will need to go in the one
        container.appendChild(heading)
        container.appendChild(powerP)
        container.appendChild(healthP)
        
        heading.innerHTML = fightersArray[i].name
        powerP.innerHTML = 'power: ' + fightersArray[i].power
        healthP.innerHTML = 'Health: ' + fightersArray[i].health
        // add the container to fighters-display div
        document.getElementById('fighters-display').appendChild(container)

        
    }
}

let deleteFrom = document.getElementById('delete-form')

deleteFrom.addEventListener('submit', (event) => {
    event.preventDefault()

    let deleteName = document.getElementById('delete-name-input').value;
    axios.delete(`/delete-fighter/${deleteName}`)
    .then((response)=> {
        loadFightersToDom(response.data)
    })
})