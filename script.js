document.body.innerHTML = `
<h1 class="heading_container">Pokemon Characters</h1>
<div id="mainContainer" class="main-container">  </div> `;
const poke_container=document.getElementById("mainContainer");


const getData = async id => {
    try {
      const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
      const res=await fetch(url);
      const pokemon=await res.json();
      pokeCards(pokemon);
      }
    catch (error) {
      console.error(error);
    }
  };
getData(1);


const totalpokemons=50;
const fetchpokemons=async()=>{
    for(let i=2; i<=totalpokemons; i++){
        await getData(i);
    }
}
fetchpokemons();


function pokeCards(pokemon){
    const pokemonEl=document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1);
    const pokeAbility=pokemon.abilities;
    const pokeMove=pokemon.moves;
    
    const pokeInnerHTML=
    `
    <div class="img-container">
    <img src="${pokemon.sprites.front_default}"
    </div>

    <p class="name"><b>Name:</b>
    ${name}</p>

    <p class="ability"><b>Abilities:</b>
    ${pokeAbility[0] && pokeAbility[1]? 
        `${pokeAbility[0].ability.name}, 
         ${pokeAbility[1].ability.name}`
          : "none"
    }</p>

    <p class="moves"><b>Moves:</b> 
    ${pokeMove[0].move.name}, 
    ${pokeMove[1].move.name}</p>

    <p class="weight"><b>Weight:</b>
    ${pokemon.weight}</p>

    `;
    pokemonEl.innerHTML=pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}
  
















