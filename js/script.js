window.onload = function() {
    let modalAdd = document.querySelector('.modal_add');
    let add = document.querySelector('.add');
    let close = document.querySelector('.btn-close');
    
    add.addEventListener('click', function () {
        modalAdd.classList.toggle("hidden");
    })
    
    close.addEventListener('click', function () {
        modalAdd.classList.add("hidden");
    }) 

    
    
}



