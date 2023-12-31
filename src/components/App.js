/* eslint-disable no-unused-vars */
//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon); 

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo! Aquí deben verse las tarjetas, tengo la idea, pero debo trabajarlo más :3';
  el.innerHTML += '';
  el.innerHTML += `
    <div>
      <h1>'HELLO HELLO'</h1>
    </div>
  `;

  return el;
};

export default App;
