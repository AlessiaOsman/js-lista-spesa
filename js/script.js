const list = document.getElementById('list-container')
console.log(list)

const myList = ['Pane', 'Pasta', 'Vino', 'Mele', 'Noci', 'Insalata', 'Gelato'];

let listItems = '<ul class="list">';

/*for (let i = 0; i<myList.length; i++){
    listItems += `<li>${myList[i]}</li>`
}*/

let i = 0

while (i < myList.length){

    listItems += `<li>${myList[i]}</li>`
    i++
}

listItems += '</ul>';

list.innerHTML += listItems;