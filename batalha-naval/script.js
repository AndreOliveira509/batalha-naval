const grid = document.querySelector('.grid');
let jogadas = 16;
let pontos = 0;
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
    'Wave',
    'Wave',
    'Wave',
    'Wave',
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



//adicionando a class para a animação e de quebra pegando src da imagem para o sistema de pontos 

const revealCard = ({ target }) => {
    if (jogadas > 0) {
        if (target.parentNode.className.includes('reveal-card')) {
            return;
        } else {
            target.parentNode.classList.add('reveal-card');
            const frenteImg = target.parentNode.querySelector('.frente').style.backgroundImage;

            

            if (frenteImg.includes('Ship-1.png')) {
                pontos += 5;
            } else if (frenteImg.includes('Ship-2.png')) {
                pontos += 10;
            } else if (frenteImg.includes('Ship-3.png')) {
                pontos += 15;
            } else if (frenteImg.includes('Bomb.png')) {
                pontos = 0;
            }

            jogadas -= 1;

            var txtjog = document.getElementById('txtjog');
            txtjog.innerText = `Numero de jogadas = ${jogadas}`;

            var txtscore = document.getElementById('score');
            txtscore.innerText = `Score = ${pontos}`;

            
            var restart = document.getElementById('restart');
            restart.addEventListener('click',()=>{
                window.location.href = 'index.html';
            })

            if (jogadas == 0 && pontos < 30){
                txtscore.innerHTML += `<br>Tente Novamente!`;
                restart.style.display = 'flex';
                //window.location.href = 'index.html';
            } else if (jogadas == 0 && pontos >= 30){
                txtscore.innerHTML += `<br>Parabéns Você Ganhou!`;
                restart.style.display = 'flex';
            }
        }
    }
};


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

    const multicons = [ ... icons, ... icons, ... icons, ... icons,  ... icons]

    const randomArray = multicons.sort( () => Math.random() - 0.5);

    randomArray.forEach((icon) => {

        const card = createCard(icon);
        grid.appendChild(card);

    });

}
loadGame();