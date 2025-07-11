//Create event for save data in localStorage
document.getElementById('saveData').addEventListener('click', () => {
    const nameInput = document.getElementById('username');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('Form elements not found or do not exist');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);


    if (name && !isNaN(age)) {
        localStorage.setItem('username', name);
        localStorage.setItem('age', age);
        displayData();
    } else{
        alert('Username or age invalid. Please enter valid data');
    }
});


//Function to display data from localStorage
function displayData() {
    const name = localStorage.getItem('username');
    const age = localStorage.getItem('age');
    const outputDiv = document.getElementById('output');

    if (name && age) {
        outputDiv.innerText = `Holisss ${name}, tienes ${age} añoss ✨`;
    } else {
        outputDiv.innerText = 'No saved user data found.';
    }
}

window.onload = displayData;


//Count the number of times the user has visited the page
if (!sessionStorage.getItem('visitCount')) {
    sessionStorage.setItem('visitCount', 0);
}

//Update the visit count
function updateVisitCount() {
    let count = parseInt(sessionStorage.getItem('visitCount'));
    count++;
    sessionStorage.setItem('visitCount', count);
    console.log(`You have visited this page ${count} times.`);
    alert(`You have visited this page ${count} times.`);
    displayData();
}

document.getElementById('saveData').addEventListener('click', updateVisitCount);
document.getElementById('clearData').addEventListener('click', updateVisitCount);


//Clear data from localStorage and content page
document.getElementById('clearData').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});