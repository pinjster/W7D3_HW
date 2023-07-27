console.log('Hellow world');
const body = document.getElementsByTagName('body')[0]
const button = document.createElement('button')
console.log(body);


darkMode()

const pokeCards = []

const main = document.getElementsByTagName('main')[0]
main.style.display = 'flex'
const heading = document.querySelector('.main-heading')
body.prepend(button)

function darkMode(){
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    button.innerText = 'Light Mode'
}

function LightMode(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    button.innerText = 'Dark Mode'
}

//body.appendChild(button)

button.addEventListener('click', () => {
    if(body.style.backgroundColor === 'black'){
        LightMode()
    }
    else{
        darkMode()
    }
})

const students = ['ben', 'david', 'michael']
const students2 = ['sima', 'tajay', 'christian', 'ben']

const studentContainer = document.querySelector('#student-container')

function titleCase(astring){
    const stringArray = astring.split(' ')
    let output = ''
    for(const name of stringArray){
        output += name[0].toUpperCase() + name.substring(1) + ' '
    }
    return output.trim()
}
for(const [i, student] of students.entries()){
    const listItem = document.createElement('li')
    listItem.id = i + 1
    listItem.innerText = titleCase(student);
    studentContainer.appendChild(listItem)
}
const listItems = document.getElementsByTagName('li')
let counter = listItems.length


for(const [i, student] of students2.entries()){
    counter++
    studentContainer.innerHTML += `<li id='${counter}'>${titleCase(student)}</li>`
}

const pokeForm = document.getElementById('poke-form')
pokeForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const pokeName = getPokeData()
    const pokeData = await pokeApiCall(pokeName)
    handlePokeData(pokeData)
})

//https://pokeapi.co/api/v2/pokemon/ditto

function getPokeData(){
    return document.querySelector('#poke-field').value
    //const pokeName = document.getElementById('#poke-field')
}

async function pokeApiCall(pokeName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    if(res.ok){
        const data = await res.json()
        console.log(data.name);
        return data
    }
    window.alert('Invalid Pokemon name')
}

const pokeContainer = document.querySelector('#poke-container')
pokeContainer.className = 'poke-container'
pokeContainer.style.display = 'flex'
pokeContainer.style.flexWrap = 'wrap'
// pokeContainer.style.columnGap = '10px'
pokeContainer.style.backgroundColor = 'gold'
pokeContainer.style.color = 'black'
pokeContainer.style.marginLeft = '20px'

function handlePokeData({name, sprites: { versions }, height, types, id, stats }){
    const sprite = versions['generation-v']['black-white'].animated.front_default
    if(!sprite){
        sprite = data.sprites.front_default
    }
    const pokeCard = document.createElement('div')
    const pokeHeading = document.createElement('h3')
    const pokeImg = document.createElement('img')
    const pokeHeight = document.createElement('h5')
    const pokeType = document.createElement('h5')
    const pokeId = document.createElement('h5')
    const pokeStats = document.createElement('ul')
    pokeHeading.innerText = name
    pokeImg.src = sprite
    pokeHeight.innerText = `height: ${height}`
    if(types[1]){
        pokeType.innerText = `Type: ${types[0].type.name}, ${types[1].type.name}`
    }
    else{
        pokeType.innerText = `Type: ${types[0].type.name}`
    }
    for(i of stats){
        let pokeStat = document.createElement('li')
        pokeStat.innerText = `${i.stat.name}: ${i.base_stat}`
        pokeStats.append(pokeStat)
    }
    pokeId.innerText = `ID: ${id}`
    pokeCard.append(pokeHeading, pokeImg, pokeHeight,pokeType, pokeId, pokeStats)
    pokeContainer.appendChild(pokeCard)
    

    pokeCard.addEventListener('click', () => pokeCard.remove())
}
