/*
Quando clicar na seta avançar trocar a imgaem de background
    a imagem atual fica na posição 0
    assim que clicar em avançar temos que adicionar 1 ao 
    contador de imagens
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function(){
    const totalDeImagens = (imagensPainel.length - 1);
    if(imagemAtual == totalDeImagens){
        return;
    }

    imagemAtual++;
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual == 0){
        return;
    }

    imagemAtual--;
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
    
    imagensPainel[imagemAtual].classList.add('mostrar');
});