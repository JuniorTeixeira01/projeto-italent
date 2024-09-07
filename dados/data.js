const leao = "./assets/leao.avif";
const gato = "./assets/gato.avif";
const cavalo = "./assets/cavalo.avif";
const cachorro = "./assets/cachorro.avif";
const baleia = "./assets/baleia.avif";
const tigre = "./assets/tigre.avif";

const lista = [
    {id: 1, nome: "Leão", descricao: "O leão é um Animal Selvagem", imagem: leao},
    {id: 2, nome: "Gato", descricao: "O Gato é um Animal Doméstico", imagem: gato},
    {id: 3, nome: "Cavalo", descricao: "O Cavalo é um Animal do Campo", imagem: cavalo},
    {id: 4, nome: "Cachorro", descricao: "O Cachorro é um Animal Doméstico", imagem: cachorro},
    {id: 5, nome: "Baleia", descricao: "A Baleia é um Animal Marítimo", imagem: baleia},
    {id: 6, nome: "Tigre", descricao: "O Tigre é um Animal Selvagem", imagem: tigre}
]

const cardsImg = document.querySelectorAll('.card img');
const cardsNome = document.querySelectorAll('.card h3');
const cardDescription = document.querySelectorAll('.card p');
const div = document.querySelector('.container-infinity');

const preenchDiv = () => {
    //Imagens
    cardsImg[0].src = lista[0].imagem;
    cardsImg[1].src = lista[1].imagem;
    cardsImg[2].src = lista[2].imagem;
    cardsImg[3].src = lista[3].imagem;
    cardsImg[4].src = lista[4].imagem;
    cardsImg[5].src = lista[5].imagem;
    //Imagens
    //Nomes
    cardsNome[0].innerHTML = lista[0].nome;
    cardsNome[1].innerHTML = lista[1].nome;
    cardsNome[2].innerHTML = lista[2].nome;
    cardsNome[3].innerHTML = lista[3].nome;
    cardsNome[4].innerHTML = lista[4].nome;
    cardsNome[5].innerHTML = lista[5].nome;
    //Nomes
    //Descrição
    cardDescription[0].innerHTML = lista[0].descricao;
    cardDescription[1].innerHTML = lista[1].descricao;
    cardDescription[2].innerHTML = lista[2].descricao;
    cardDescription[3].innerHTML = lista[3].descricao;
    cardDescription[4].innerHTML = lista[4].descricao;
    cardDescription[5].innerHTML = lista[5].descricao;
    //Descrição
}

export default preenchDiv;