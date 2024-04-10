const grid = document.querySelector('.grid');

//array para os cards
const icons = [
    'Ship-1',
    'Ship-2',
    'Ship-3',
    'Wave',
    'Wave',
    'Wave',
    'Wave',
    'Wave',
    'Wave',
    'Bomb',
]
//essa funçao a tem como parametro a tag e a class para economizar cod

const createElement = (tag, classe) => {
    const element = document.createElement(tag);
    element.className = classe;
    return element;
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }  else{
    target.parentNode.classList.add('reveal-card');
    }
}

//CRIANDO O CARD PELO O JS

const createCard = (icon) => {
    //criando a div card, frente e verso
    //adicionando class
    
    const card = createElement('div', 'card');
    const frente = createElement('div', 'face frente');
    const verso = createElement('div', 'face verso');
    
    frente.style.backgroundImage = `url('img/${icon}.png')`;
    
    //colocando a div frente e a div verso dentro do card
    
    card.appendChild(frente);
    card.appendChild(verso);

    card.addEventListener('click', revealCard);

    return card;

}

const loadGame = () => {

    const multicons = [ ... icons, ... icons, ... icons, ... icons, ... icons, ... icons, ... icons, ... icons, ... icons, ... icons]

    const randomArray = multicons.sort( () => Math.random() - 0.5);

    randomArray.forEach((icon) => {

        const card = createCard(icon);
        grid.appendChild(card);

    });

}
loadGame();