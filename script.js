const expand = document.querySelectorAll(".card");

expand.forEach(card => {
    card.addEventListener("click", function(){

        this.classList.toggle("expansion")


    });
});
