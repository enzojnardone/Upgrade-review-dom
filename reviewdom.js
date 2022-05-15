console.log('JS Review DOM');

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Creaamos el elemento "ul"
const list = document.createElement('ul');
// Creamos un contenedor "fragment"
const fragment = document.createDocumentFragment();
// Recorremos nuestro array y creamos un elemto "li" dandole el contenido que tenemos en la variable
for (const country of countries) {
    const itemList = document.createElement('li');
    itemList.textContent = country
    fragment.appendChild(itemList);
}
// Insertamos los elementos al "Dom" utilizando "appendChild"
list.appendChild(fragment);
document.body.appendChild(list);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const remove = document.querySelector('.fn-remove-me');
document.body.removeChild(remove);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carDiv = document.querySelector("div[data-function='printHere']");

const carLists = document.createElement('ul');
const carsFragment = document.createDocumentFragment();
for (const car of cars) {
    const itemList = document.createElement('li');
    itemList.textContent = car
    carsFragment.appendChild(itemList);
}

carLists.appendChild(carsFragment);
carDiv.appendChild(carLists);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

