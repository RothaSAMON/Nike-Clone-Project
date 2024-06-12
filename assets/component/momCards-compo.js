    // import { cardData, cardData2 } from '../data/membershipCarousel-data.js';
    const cardData = [
        {
            img: "/Nike-Clone-Project/Images/homePage-Img/the-y2Kolor.png",
            titleSm: "New from Nike Running",
            titleXl: "The Y2Kolor Collection",
            imgSec: "/Nike-Clone-Project/Images/homePage-Img/vapor-edge-grid.png",
            titleSmSec: "Ja'Marr Chase's Picks",
            titleXlSec: "AF1s, Vapor Edge Cleats & More",
        },
]
const cardData2 = [
    {
        img: "/Nike-Clone-Project/Images/homePage-Img/air-max-dn-grid.png",
        titleSm: "Feel the Unreal",
        titleXl: "Air Max Dn",
        imgSec: "/Nike-Clone-Project/Images/homePage-Img/chloe-kim.png",
        titleSmSec: "Make Your Move",
        titleXlSec: "Chloe Kim's Fitness Essentials",
    },
]

    const dataSources = {
        'card-data': cardData,
        'card-data2': cardData2,
    };

    const CreateCard = (cards) => {
        return `
            <div>
                ${cards.map((item) => `
                    <div class="relative">
                        <img src="${item.img}" alt="Image">
                        <div class="absolute bottom-[40px] left-[40px]">
                            <p>${item.titleSm}</p>
                            <p class="text-[20px]">${item.titleXl}</p>
                            <button class="bg-white text-black px-[20px] py-[6px] my-[20px] rounded-3xl hover:opacity-[0.7]">Shop</button>
                        </div>
                    </div>  
                    
                    <div class="relative">
                        <img src="${item.imgSec}" alt="Image">
                        <div class="absolute bottom-[40px] left-[40px]">
                            <p>${item.titleSmSec}</p>
                            <p class="text-[20px]">${item.titleXlSec}</p>
                            <button class="bg-white text-black px-[20px] py-[6px] my-[20px] rounded-3xl hover:opacity-[0.7]">Shop</button>
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

    customElements.define('mom-cards-component', Card);