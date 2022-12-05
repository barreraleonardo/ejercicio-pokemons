async function fillPokemonData(name, order) {
  //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
  // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
  const pokemonData = await getPokemonData(name);

  //Actividades

  // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
  // puedes explorar los elementos HTML utilizando las Dev Tools de tu
  // navegador.

  // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
  // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
  // tendrás que decidir el color que tendrá la barra en cada caso:
  // Si la habilidad es menor a 35, la barra será de color rojo
  // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
  // Si la habilidad es igual o mayor a 70, la barra será de color verde.
  // Deberás utilizar las clases que se encuentran en el archivo styles.css

  //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:
  const imagen = document.querySelector(`#imagen-pokemon-${order}`);
  const barraHp = document.querySelector(`#barra-hp-${order}`);
  const cantidadHp = document.querySelector(`#cantidad-hp-${order}`);

  const barraAtaque = document.querySelector(`#barra-ataque-${order}`);
  const cantidadAtaque = document.querySelector(`#cantidad-ataque-${order}`);

  const barraDefensa = document.querySelector(`#barra-defensa-${order}`);
  const cantidadDefensa = document.querySelector(`#cantidad-defensa-${order}`);

  const barraVelocidad = document.querySelector(`#barra-velocidad-${order}`);
  const cantidadVelocidad = document.querySelector(`#cantidad-velocidad-${order}`);


  console.log( pokemonData.stats);
  //Seteo la imagen
  imagen.setAttribute("src", pokemonData.imagen);


  //Seteo la cantidad HP
  cantidadHp.innerHTML = pokemonData.stats[0].amount;
  //Seteo barraHP
  barraHp.style.width = pokemonData.stats[0].amount + "%";
  if(pokemonData.stats[0].amount < 35){
    barraHp.classList.add("rojo");
  }else if(pokemonData.stats[0].amount >= 35 && pokemonData.stats[0].amount < 70){
    barraHp.classList.add("amarillo");
  }else{
    barraHp.classList.add("verde");
  }

  //Seteo cantidad de ataque
  cantidadAtaque.innerHTML = pokemonData.stats[1].amount;
  //seteo barra ataque
  barraAtaque.style.width = pokemonData.stats[1].amount + "%";
  if(pokemonData.stats[1].amount < 35){
    barraAtaque.classList.add("rojo");
  }else if(pokemonData.stats[1].amount >= 35 && pokemonData.stats[1].amount < 70){
    barraAtaque.classList.add("amarillo");
  }else{
    barraAtaque.classList.add("verde");
  }


  //Seteo cantidad de defensa
  cantidadDefensa.innerHTML = pokemonData.stats[2].amount;
  //seteo barra defensa
  barraDefensa.style.width = pokemonData.stats[2].amount + "%";
  if(pokemonData.stats[2].amount < 35){
    barraDefensa.classList.add("rojo");
  }else if(pokemonData.stats[2].amount >= 35 && pokemonData.stats[2].amount < 70){
    barraDefensa.classList.add("amarillo");
  }else{
    barraDefensa.classList.add("verde");
  }


   //Seteo cantidad de velocidad
   cantidadVelocidad.innerHTML = pokemonData.stats[3].amount;
   //seteo barra velocidad
   barraVelocidad.style.width = pokemonData.stats[3].amount + "%";
   if(pokemonData.stats[3].amount < 35){
     barraVelocidad.classList.add("rojo");
   }else if(pokemonData.stats[3].amount >= 35 && pokemonData.stats[3].amount < 70){
     barraVelocidad.classList.add("amarillo");
   }else{
     barraVelocidad.classList.add("verde");
   }


}

//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["pikachu", "bulbasaur", "charmander", "diglett"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
  const pokemonNumber = index + 1;
  createPokemonCard(pokemon, pokemonNumber);
  fillPokemonData(pokemon, pokemonNumber);
});
