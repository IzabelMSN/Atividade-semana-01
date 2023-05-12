/*11 - Crie 3 eventos usando o “addEventListener” do Javascript no site criado por vocês no treinamento de HTML e CSS. 
Esses eventos devem fazer sentido dentro do site.*/

let tatuador = document.querySelectorAll('.swiper-slide');

tatuador.forEach((el, i) => {
    el.addEventListener("mouseover", function() {
        if (el.classList.contains('pont')) {
            el.children[3].innerHTML = "Renata Luz";
        }
        if (el.classList.contains('geo')) {
            el.children[3].innerHTML = "Kaike Soares";
        }
        if (el.classList.contains('black')) {
            el.children[3].innerHTML = "Melanie Rosa";
        }
        if (el.classList.contains('ver')) {
            el.children[3].innerHTML = "Astrid Rouge";
        }
    })
})

tatuador.forEach((el, i) => {
    el.addEventListener("mouseout", function() {
        if (el.classList.contains('pont')) {
            el.children[3].innerHTML = "";
        }
        if (el.classList.contains('geo')) {
            el.children[3].innerHTML = "";
        }
        if (el.classList.contains('black')) {
            el.children[3].innerHTML = "";
        }
        if (el.classList.contains('ver')) {
            el.children[3].innerHTML = "";
        }
    })
})

let btn = document.querySelector('.botaoS');

btn.addEventListener("click", function submetido() {
    alert("Agendamento solicitado com sucesso!");
})

