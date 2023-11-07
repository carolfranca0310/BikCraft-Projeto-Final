// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function AtivarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(AtivarLink);

// ativar itens orçamento

const parametros = new URLSearchParams(location.search);

function AtivarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(AtivarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function AtivarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls)
    
    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");

    pergunta.setAttribute("aria-expanded", "true");
}

function EventosPerguntas(pergunta) {
    pergunta.addEventListener("click", AtivarPergunta);
}

perguntas.forEach(EventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const GaleriaContainer = document.querySelector(".bicicleta-imagens");

function TrocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
        GaleriaContainer.prepend(img);
    }
}

function EventosGaleria(img) {
    img.addEventListener("click", TrocarImagem);
}
galeria.forEach(EventosGaleria);

// animação
if (window.SimpleAnime){
    new SimpleAnime();
}