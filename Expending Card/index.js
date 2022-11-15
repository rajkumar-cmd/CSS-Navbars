const pannels=document.querySelectorAll('.pannel');

pannels.forEach(pannel=>{
    pannel.addEventListener("click",()=>{
        removeElementDisplay();
        pannel.classList.add('active');
    })
})

function removeElementDisplay(){
    pannels.forEach(pannel=>{
        pannel.classList.remove('active');
    })
}