import genHome from "./home";
import img from "./bg-image/hyrule.jpg";
import './style.css'

genHome();

document.body.style.backgroundImage = `url(${img})`;

const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

function selectTab(selected, off1, off2) {
    if (!(selected.classList.contains('selected'))) selected.classList.toggle('selected');
    if (off1.classList.contains('selected')) off1.classList.toggle('selected');
    if (off2.classList.contains('selected')) off2.classList.toggle('selected');
}

homeTab.addEventListener('click', () => {
    genHome();
    selectTab(homeTab, menuTab, contactTab);
});

menuTab.addEventListener('click', () => {
    selectTab(menuTab, homeTab, contactTab);
});

contactTab.addEventListener('click', () => {
    selectTab(contactTab, menuTab, homeTab);
});