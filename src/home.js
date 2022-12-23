export default function genHome(){
    const hContent = document.getElementById('content');
    hContent.innerHTML = '';
    hContent.className = '';
    const about = document.createElement('h2');
    const description = document.createElement('h3');
    about.textContent = 'About';
    description.textContent = 'From the deserts of the Gerudo to the peaks of Hebra, Hyrule Canteen is a celebration of the varied ingredients found all across Hyrule. Our chefs have travelled Hyrule from top to bottom to discover the finest ingredients in all of Hyrule and combined them in one delicious plate. Order at Hyrule Canteen today and let your tastebuds celebrate.';
    hContent.appendChild(about);
    hContent.appendChild(description);
}