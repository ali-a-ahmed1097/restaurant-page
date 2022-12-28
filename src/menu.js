import Entrees from './entree.csv';
import Desserts from './desserts.csv';
import Elixirs from './elixirs.csv';

function buildMenu(menu, menuItems) {
    for (let i = 0; i < menuItems.length; i++){
        const item = document.createElement('div');
        const dish = document.createElement('div');
        const ingredients = document.createElement('div');
        const price = document.createElement('div');

        dish.textContent = menuItems[i][0];
        ingredients.textContent = menuItems[i][1];
        price.textContent = menuItems[i][2];

        item.appendChild(dish);
        item.appendChild(ingredients);
        item.appendChild(price);

        item.classList.add('item');

        menu.appendChild(item);
    }
}

function createMenu(title) {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menus');
    const mTitle = document.createElement('h2');
    mTitle.textContent = title;
    menuDiv.appendChild(mTitle);
    return menuDiv;
}

export default function genMenu() {
    const hContent = document.getElementById('content');
    hContent.innerHTML = '';
    hContent.className = '';
    hContent.style='margin-right: 250px; margin-left: 250px; margin-top: 50px;';
    hContent.classList.add('menu');

    const entreeDiv = createMenu('Entrees');
    buildMenu(entreeDiv, Entrees);
    
    const dessertDiv = createMenu('Desserts');
    buildMenu(dessertDiv, Desserts);

    const elixirDiv = createMenu('Elixirs');
    buildMenu(elixirDiv, Elixirs)

    hContent.appendChild(entreeDiv);
    hContent.appendChild(dessertDiv);
    hContent.appendChild(elixirDiv);
}