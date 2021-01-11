const myThoughts = document.querySelector('.thought'),
    thoughtLength = document.querySelector('.thought-length'),
    shareBtn = document.querySelector('.share-btn'),
    oneThought = document.querySelector('li.one-thought');
    // likes = document.querySelectorAll('.likes');



// function likeThought(e) {
//     let like = e.target.querySelector('span').innerText * 1;
//     like++;
//     e.target.querySelector("span").innerText = like;
//     console.log(e.target.getElementsByTagName("span"));

//     // if (like > 1)
//     //     e.target.innerText = `${like} Likes`;
//     // else{}

//     // console.log(e.target.childNodes);
// }

myThoughts.addEventListener("input", (e) => {
    thoughtLength.innerText = myThoughts.value.length;

    if (myThoughts.value.length > 200) {
        myThoughts.classList.add('border-danger');
        shareBtn.classList.add("disabled")
    }
    else {
        myThoughts.classList.remove("border-danger");
        shareBtn.classList.remove("disabled");
    }

});

shareBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (myThoughts.value != "") {

        const newThought = oneThought.cloneNode(true);
        newThought.querySelector('.text').innerText = myThoughts.value;
        newThought.classList.remove('d-none');

        dLikes = newThought.querySelector(".likes");

        dLikes.addEventListener("click", (e) => {
            let like = dLikes.querySelector("span").innerText * 1;
            like++;
            dLikes.querySelectorAll("span")[0].innerText = like;
            if (like > 1)
                dLikes.querySelectorAll("span")[1].innerText = `Likes`;

        });
        oneThought.parentElement.appendChild(newThought);
        myThoughts.value = '';
        thoughtLength.innerText = 0;
    }
});

// likes.map()



