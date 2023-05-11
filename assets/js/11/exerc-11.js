/*11 - Crie 3 eventos usando o “addEventListener” do Javascript no site criado por vocês no treinamento de HTML e CSS. 
Esses eventos devem fazer sentido dentro do site.*/
let tatuador = document.querySelector('.swiper-slide');


tatuador.addEventListener("mouseover", function nomeTaduador() {
    document.querySelector('.estilo-tatuador').innerHTML = "Renata Luz";
    document.querySelector('.estilo-tatuador.geo').innerHTML = "Kaike Soares";
    document.querySelector('.estilo-tatuador.black').innerHTML = "Melanie Rosa";
    document.querySelector('.estilo-tatuador.ver').innerHTML = "Astrid Rouge";
})

tatuador.addEventListener("mouseout", function nomeTaduadorSai() {
    document.querySelector('.estilo-tatuador').innerHTML = "";
    document.querySelector('.estilo-tatuador.geo').innerHTML = "";
    document.querySelector('.estilo-tatuador.black').innerHTML = "";
    document.querySelector('.estilo-tatuador.ver').innerHTML = "";
})


let btn = document.querySelector('.botaoS');

btn.addEventListener("click", function submetido() {
    alert("Agendamento solicitado com sucesso!");
})

