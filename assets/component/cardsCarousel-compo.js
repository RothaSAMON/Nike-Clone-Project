import { cardData, cardData2, cardData3 } from '../data/cardsCarousel-data.js';
        // import { cardData2 } from './card2-data.js';

        const dataSources = {
            'card-data': cardData,
            'card-2-data': cardData2,
            'card-3-data': cardData3,
        };

        const CreateCard = (cards) => {
            return `
                <div class="slideShow overflow-x-auto py-[20px] text-[18px] flex gap-[20px]">
                    ${cards.map((item) => `
                        <div class="flex-none slide-list">
                            <img class="w-[335px] md:w-[400px] lg:w-[599px]" src="${item.img}" alt="Image">
                            <div class="flex flex-col py-[10px]">
                                <a href="#">${item.title}</a>
                                <a href="#" class="text-gray-500">${item.info}</a>
                                <a href="#">${item.price}</a>
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

        customElements.define('slideshow-component', Card);