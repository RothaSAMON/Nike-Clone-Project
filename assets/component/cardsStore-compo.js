import { cardData, cardData2 } from '../data/cardsStore-data.js';
// import { cardData2 } from './card2-data.js';

const dataSources = {
    'card-data': cardData,
    'card-2-data': cardData2
};

const CreateCard = (cards) => {
    return `
        <div class="grid lg:grid-cols-3 lg:gap-[20px] grid-cols-2 gap-[10px]">
            ${cards.map((item) => `
                <div id="card-shop">
                    <div class="max-w-[400px]">
                        <a href="#"><img
                            class=""
                            src="${item.img}"
                            alt="Image"/></a>
                        <div class="py-4 px-[10px]">
                            <p class="text-red-800">${item.discount}</p>
                            <p>${item.title}</p>
                            <p class="text-gray-500">${item.info}</p>
                            <p class="text-gray-500">${item.colorInfo}</p>
                            <p class="py-2">${item.price}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
};

class Card extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || cardData; // Default to cardData if no attribute is found
        this.innerHTML = CreateCard(data);
    }
}

customElements.define('card-component', Card);