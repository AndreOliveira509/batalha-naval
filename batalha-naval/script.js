const grid = document.querySelector('.grid');
//CRIANDO O CARD PELO O JS
//essa funçao a tem como parametro a tag e a class para economizar cod

const createElement = (tag, classe) => {
    const element = document.createElement(tag);
    element.className = classe;
    return element;
}

const createCaard = () => {
    //criando a div card, frente e verso
    //adicionando class
    
    const card = createElement('div', 'card');
    const frente = createElement('div', 'face frente');
    const verso = createElement('div', 'face verso');
    
    //colocando a div frente e a div verso dentro do card
    
    card.appendChild(frente);
    card.appendChild(verso);

    return card;

}

createCaard();