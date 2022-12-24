export default function genContact() {
    const hContent = document.getElementById('content');
    hContent.innerHTML = '';
    hContent.className = 'contacts';
    hContent.style='text-align: center;';

    const addressDiv = document.createElement('div');
    const addressHead = document.createElement('h2');
    const addressBody = document.createElement('p');

    addressHead.textContent = 'Address';
    addressBody.textContent = '123 Nowhere Street, Toronto, ON, CA';
    addressDiv.appendChild(addressHead);
    addressDiv.appendChild(addressBody);

    const phoneDiv = document.createElement('div');
    const phoneHead = document.createElement('h2');
    const phoneBody = document.createElement('p');

    phoneHead.textContent = 'Phone';
    phoneBody.textContent = '123-456-7890';
    phoneDiv.appendChild(phoneHead);
    phoneDiv.appendChild(phoneBody);

    const emailDiv = document.createElement('div');
    const emailHead = document.createElement('h2');
    const emailBody = document.createElement('p');

    emailHead.textContent = 'Email';
    emailBody.textContent = 'random@example.com';
    emailDiv.appendChild(emailHead);
    emailDiv.appendChild(emailBody);

    const hoursDiv = document.createElement('div');
    const hoursHead = document.createElement('h2');
    const hoursBody1 = document.createElement('p');
    const hoursBody2 = document.createElement('p');
    
    hoursHead.textContent = 'Hours';
    hoursBody1.textContent = 'Monday to Sunday';
    hoursBody2.textContent = '10:00am to 10:00pm';
    hoursDiv.appendChild(hoursHead);
    hoursDiv.appendChild(hoursBody1);
    hoursDiv.appendChild(hoursBody2);

    hContent.appendChild(addressDiv);
    hContent.appendChild(phoneDiv);
    hContent.appendChild(emailDiv);
    hContent.appendChild(hoursDiv);
}