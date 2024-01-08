const list = document.getElementById('list-container')
console.log(list)

const myList = ['Pane', 'Pasta', 'Vino', 'Mele', 'Noci', 'Insalata', 'Gelato'];

let listItems = '<ul class="list">';

for (let i = 0; i<myList.length; i++){
    listItems += `<li>${myList[i]}</li>`
}

listItems += '</ul>';

list.innerHTML += listItems;