const sname = document.getElementsByName("surname")[0];
const fname = document.getElementsByName("fname")[0];
const email = document.getElementsByName("email")[0];
const btns = document.querySelectorAll("button");

// console.log(sname, fname, email, btns);


// console.log(btns[1])
function btnClick(e) {
    e.preventDefault();
    if (e.target.innerText == 'Add Me') {
        if (sname.value && fname.value && email.value) {

            const newCard = document.querySelector(".card").cloneNode(true);
            newCard.classList.remove('d-none');

            document.querySelector('.card').parentElement.appendChild(newCard);
            newCard.querySelector('.card-title').innerText = `${sname.value}  ${fname.value}`
            newCard.querySelector('.card-body').textContent = email.value;
            console.log(newCard);
        //    console.log('You have just added a new student')
        // console.log(`
        // Surname: ${sname.value},
        // First Name: ${fname.value},
        // Email Address: ${email.value}
        // `);

            sname.value = '';
            fname.value = '';
            email.value = '';
        }
        else {
            alert("Some Value is missing");
            exit(0);

        }

}
    else if (e.target.innerText == "Clear Form") {
           sname.value = "";
           fname.value = "";
           email.value = "";
  console.log("Form Cleared");
}
}

btns.forEach(btn => {
    btn.addEventListener('click', btnClick)
    // console.log(btn);
})
// let names = ['john', 'Daniel', 'Emmanuel']

// names.map(function (name, index) {
//     console.log(`${name} is Student ${index + 1}`);
// })

// names.map((name, index) => {

// })

