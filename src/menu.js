import Entrees from './entree.csv';
import Desserts from './desserts.csv';
import Elixirs from './elixirs.csv';

export default function genMenu() {
    const hContent = document.getElementById('content');
    hContent.innerHTML = '';
    hContent.className = '';

    console.log(Entrees);
    console.log(Desserts);
    console.log(Elixirs);
}