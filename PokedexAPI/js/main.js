const listPokemon = document.querySelector('#pokemon-list')
const headerBtn = document.querySelectorAll('.btn-header')
let url = 'https://pokeapi.co/api/v2/pokemon/'

for (let i=1; i <=151; i++){
    fetch(url + i)
        .then(response => response.json())
        .then(data => showPokemon(data))
}

function showPokemon(data) {
    let pokemonTypes = data.types.map((type) => `<p class = "${type.type.name} type">${type.type.name}</p>`)
    pokemonTypes = pokemonTypes.join('')
    //console.log(pokemonTypes);
    let pokemonId = data.id.toString().padStart(3, '0')
    //console.log(pokemonId);
    const div = document.createElement('div')
    div.classList.add('pokemon')
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokemonId}</p>
            <div class="pokemon-img">
              <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
            </div>
            <div class="pokemon-info">
              <div class="name-container">
                <p class="pokemon-id">#0.25</p>
                <h2 class="pokemon-name">${data.name}</h2>
              </div>
              <div class="pokemon-types">
                ${pokemonTypes}
              </div>
              <div class="pokemon-stats">
                <p class="stat">${data.height}m</p>
                <p class="stat">${data.weight}kg</p>
              </div>
            </div>
    `;
    listPokemon.appendChild(div)
}

headerBtn.forEach(button => {
    button.addEventListener('click', (event)=>{
        const buttonID = event.currentTarget.id
        listPokemon.innerHTML = ''

        for (let i=1; i <=151; i++){
            fetch(url + i)
                .then(response => response.json())
                .then(data => {
                    if(buttonID === 'ver-todos'){
                        showPokemon(data)
                    } else {                            
                        const types = data.types.map(type => type.type.name)
                        if (types.some(type => type.includes(buttonID))){
                            showPokemon(data)
                        }
                }
                    }
                )
            }
    })
})