const axios = require('axios')
const url = `http://openlibrary.org/people/george08/lists.json` 

const Busquedas = async() => {
    const response = await axios.get(url)
    let arreglo_busquedas = response.data.entries
    arreglo_busquedas.forEach((busqueda) => {
        console.log(busqueda.name);
        console.log("---------------------");
    });
}

Busquedas()