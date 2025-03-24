import './style.css';

const numOfCards = 10;
const cards = [];

function seedCards() {
  for (let i = 1; i <= numOfCards; i++) {
    cards.push({
      id: i,
      image: `https://picsum.photos/300/300?sig=${i}`,
    });
  }
  return cards;
}

const React = {
  createElement(htmlTag, props, children) {
    // Create html element (div, button etc.)
    const element = document.createElement(htmlTag);

    // Set CSS class from className property
    element.className = props.className || '';

    // Copy all HTML attributes (src, alt, etc) except className
    for (let key in props) {
      if (key !== 'className') {
        element[key] = props[key];
      }
    }

    // Handle children elements
    if (typeof children === 'string') {
      // If children is text, set it directly
      element.textContent = children;
    }
    // If children is an array (like multiple divs inside parent), append all elements 
    else if (element.append(...[children].flat())) { // flat() [1, [2, 3]] -> [1, 2, 3]
      children.forEach((child) => {
        if (child) {
          // Skip null or undefined children
          element.appendChild(child);
        }
      });
    }

    return element;
  },
};

function createCard(card) {
  const cardItem = React.createElement('li', { className: 'cards_item' }, [
    React.createElement('div', { className: 'card' }, [
      React.createElement('div', { className: 'card_image' }, [
        React.createElement('img', {
          src: card.image,
          alt: `Card image ${card.id}`,
        }),
      ]),
      React.createElement('div', { className: 'card_content' }, [
        React.createElement('button', { className: 'btn' }, 'LEFT'),
        React.createElement('button', { className: 'btn' }, 'RIGHT'),
      ]),
    ]),
  ]);

  return cardItem;
}

function drawCards(cards) {
  const cardsContainer = document.querySelector('.cards');
  cards.forEach((card) => {
    const cardItem = createCard(card);
    // Add data attribute with card id
    cardItem.dataset.cardId = card.id;
    cardsContainer.appendChild(cardItem);
  });
}

// Handle card movement
document.body.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btn')) return;

  const action = e.target.textContent; // get button text
  const cardItem = e.target.closest('.cards_item'); // find parent card element from clicked button
  const cardId = Number(cardItem.dataset.cardId); // create card id from data attribute -> data-card-id="1"
  const cardIndex = cards.findIndex(card => card.id === cardId); // find card index in cards array

  // Move card left if not first
  if (action === 'LEFT' && cardIndex > 0) {
    [cards[cardIndex], cards[cardIndex - 1]] = [
      cards[cardIndex - 1],
      cards[cardIndex],
    ];
    redrawCards();
  }
  // Move card right if not last
  else if (action === 'RIGHT' && cardIndex < cards.length - 1) {
    [cards[cardIndex], cards[cardIndex + 1]] = [
      cards[cardIndex + 1],
      cards[cardIndex],
    ];
    redrawCards();
  }
});

function redrawCards() {
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = '';
  drawCards(cards);
}

function main() {
  const cardsList = seedCards();
  drawCards(cardsList);
}

main();

