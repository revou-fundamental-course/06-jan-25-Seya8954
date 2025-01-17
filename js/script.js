//ini file Javascript

console.log('Hello World!');

//fungsi untuk memvalidasi form
function formValidation() {
    let nameInput = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let messageInput = document.getElementById('message').value;

    console.log(nameInput);
    // kondisi untuk memvalidasi inputan nama
    if (nameInput === '') {
        alert('Name must be filled out');
    } 
    else {
        //menampilkan nama inputan
        document.getElementById('result-form').innerHTML = nameInput;
    }

    if (emailInput === '') {
        alert('Email must be filled out');
        return;
    } 
    else {
        //menampilkan nama inputan
        document.getElementById('result-form').innerHTML = nameInput;
    }

    if (messageInput === '') {
        alert('Message must be filled out');
        return;
    }
    else {
        //menampilkan nama inputan
        document.getElementById('result-form').innerHTML = nameInput;
    }

    //menampilkan nama inputan
    document.getElementById('result-form').innerHTML = nameInput; emailInput; messageInput;
    document.getElementById('result-form').innerHTML = `Name: ${nameInput}<br>Email: ${emailInput}<br>Message: ${messageInput}`;
}
