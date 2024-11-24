let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = 'none';
}


function openModal(imageName) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = `pictures/${imageName}.jpg`;
    captionText.innerHTML = imageName; // You can change this to a more descriptive text if needed
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

