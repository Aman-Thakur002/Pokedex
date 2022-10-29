 const poke_container = document.getElementById("poke-container")
 const poke_count =150
 const colors ={
    fire: "#fddfdf",
    grass:"#defde0",
    water:"#b4e7ff",
    electric:"#def3fd",
    ground:"#f4e7da",
    rock:"#d5d5d4",
    fairy:"#fceaff",
    poision:"#c39af7d8",
    bug:"#f8d5a3",
    dragon:"#97b3e6",
    psychic:"#eaeda1",
    flying:"#f9f9e5",
    fighting:"#e6e0d4",
    normal:"#f5f5f5"
 }

 const main_types = Object.keys(colors)

 const fecthPokemon = async()=>{
    for(let i=1;i<=poke_count;i++){
        await getPokemon(i)
    }
 }

 const getPokemon = async(id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    createCard(data)
 }
const createCard = (pokemon)=>{
    const pokeEl = document.createElement("div")
    pokeEl.classList.add("pokemon")
    const pokeName = pokemon.name[0].toUpperCase()+ pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_type = pokemon.types.map(type =>type.type.name)
    const type = main_types.find(type => poke_type.indexOf(type) >-1)
    const color = colors[type]
    pokeEl.style.backgroundColor= color

    const pokeInnerHML = `
    <div class="img-container">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${pokeName}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    </div>`

    pokeEl.innerHTML = pokeInnerHML

    poke_container.appendChild(pokeEl)
}

fecthPokemon()

