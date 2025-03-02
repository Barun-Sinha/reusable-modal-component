const openmodalButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close");
const actionButtons = document.querySelectorAll(".action-button");
const modals = document.querySelectorAll(".modal");


openmodalButtons.forEach(button => {
    button.addEventListener("click",()=>{
        const modalID = button.getAttribute("data-modal");
        document.getElementById(modalID).style.display = "flex";
    });
});

closeButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        button.closest(".modal").style.display = "none";
    })
})

actionButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        button.closest(".modal").style.display = "none";
    })
})

modals.forEach(modal=>{
    modal.addEventListener("click",(event)=>{
        if(event.target === modal){
            modal.style.display = "none";
        }
    })
})