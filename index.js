const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// model appeare karne ka function 

const openModal = () => {
    console.log(" modal is open now");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    
}


// model close karne wala function 

const closeModal = ()=> {
    console.log("modal has been shut down");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}