console.log('JS Review DOM');

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Creaamos el item "ul"
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

// 1.2 Elimina el item que tenga la clase .fn-remove-me.

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

// 1.4 Crea dinamicamente en el html una lista de div que contenga un item 
// h4 para el titulo y otro item img para la imagen.

const images = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let creDiv = document.createElement("div");
creDiv.setAttribute = "picsum";

for (let i of images) {
	let h4$ = creDiv.appendChild(document.createElement("h4"));
	creDiv.className = "list"
	h4$.innerHTML = i.title;
	let img = creDiv.appendChild(document.createElement("img"));
	img.setAttribute('src', i.imgUrl)
}

document.body.appendChild(creDiv);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// item de la lista.

let button = document.createElement('button')

button.onclick = function(){
    let allDiv = document.querySelectorAll(".list");
    let arrDiv = Array.from(allDiv);
    document.body.removeChild(arrDiv[arrDiv.length-1])
}
button.innerText='Click Here!'
document.body.appendChild(button)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo item del html.

let lists = document.querySelectorAll('ul');
let arrayLi = Array.from(lists);

arrayLi.forEach(function(item){ 
    let button2 = document.createElement('button')

    button2.onclick = function(){
        let allList = item.querySelectorAll('li');
        let arrayLi = Array.from(allList);
        console.log(arrayLi);
        item.removeChild(arrayLi[arrayLi.length-1])
    }
    button2.innerText='Click here!'

    item.appendChild(button2)
})