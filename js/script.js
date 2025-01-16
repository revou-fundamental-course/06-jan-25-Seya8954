//ini file Javascript

console.log('Hello World!');

//fungsi untuk memvalidasi form
function formValidation() {
    let nameInput = document.getElementById('name').value;

    console.log(nameInput);
    // kondisi untuk memvalidasi inputan nama
    if (nameInput === '') {
        alert('Name must be filled out');
    } else {
        //menampilkan nama inputan
        document.getElementById('result-form').innerHTML = nameInput;
    }

    //menampilkan nama inputan
    document.getElementById('result-form').innerHTML = nameInput;
}

document.getElementById('submit-btn').addEventListener('click', formValidation)


function formValidation() {
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let messageInput = document.getElementById('message').value;

    if (nameInput === '') {
        alert('Name must be filled out');
        return;
    }

    if (emailInput === '') {
        alert('Email must be filled out');
        return;
    }

    if (messageInput === '') {
        alert('Message must be filled out');
        return;
    }

    document.getElementById('result-form').innerHTML = `Name: ${nameInput}<br>Email: ${emailInput}<br>Message: ${messageInput}`;
}

document.getElementById('submit-btn').addEventListener('click', function() {
    let nameInput = document.getElementById('name').value;

    if (nameInput === '') {
        alert('Name must be filled out');
    } else {
        formValidation();
    }
});