import genHome from "./home";
import img from "./bg-image/hyrule.jpg";
import './style.css'

genHome();

document.body.style.backgroundImage = `url(${img})`;

const homeTab = document.getElementById('home');
homeTab.addEventListener('click', genHome);