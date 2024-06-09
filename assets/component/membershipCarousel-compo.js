import { cardData, cardData2 } from '../data/membershipCarousel-data.js';

        const dataSources = {
            'card-data': cardData,
            'card-2-data': cardData2
        };

        const CreateCard = (cards) => {
            return `
                <div class="slideShow overflow-x-auto py-[20px] text-white flex gap-[20px]">
                    ${cards.map((item) => `
                        <div class="flex-none relative slide-list">
                            <img class="w-[380px] md:w-full" src="${item.img}" alt="Image">
                            <div class="absolute bottom-[40px] left-[40px]">
                                <p>${item.titleSm}</p>
                                <p class="text-[18px]">${item.titleXl}</p>
                                <button class="bg-white text-black px-[20px] py-[6px] my-[20px] rounded-3xl hover:opacity-[0.7]">${item.button}</button>
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

        customElements.define('membership-cards-component', Card);
