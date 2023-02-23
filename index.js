function userData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUserdata2(data))
}

function displayUserdata2(data) {
    const ul = document.getElementById('list-container');
    const email = document.getElementById('email-container');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
        const emailLi = document.createElement('li');
        emailLi.innerText = user.email;
        email.appendChild(emailLi)
    }
    
    
}