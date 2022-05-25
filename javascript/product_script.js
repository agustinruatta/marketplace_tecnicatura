Vue.createApp({
    data() {
        return {
            id: 1,
            title: "Notebook HP 14-dq2024la",
            description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            imageUrl: "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
            factoryUrl: "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            price: 100000,
            imagesURL: [
                "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
                "https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000"
            ],
            notebooksTypes: [
                {ramAmount: '8 GB',  price: 100000},
                {ramAmount: '16 GB',  price: 125000},
            ],
            boughtNotebooks: [],
        }
    },
    methods: {
        buyNotebook() {
            this.boughtNotebooks.push({title: this.title, price: this.price});
        },
        changeImage(imageUrl) {
            this.imageUrl = imageUrl;
        },
        changePrice(price) {
            this.price = price;
        },
        totalAmount() {
            let total = 0;
            for(let boughtNotebook of this.boughtNotebooks) {
                total+= boughtNotebook.price;
            }

            return total;
        }
    }
}).mount('#app')