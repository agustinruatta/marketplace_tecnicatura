app.component('product-info', {
    template:
        `<div id="product-info">
            <div>
                <img @mouseover="changeImage(url)"
                     v-for="url in product.imagesURL"
                     class="imagen-previsualizacion"
                     :src="url">
            </div>
            <div>
                <img id="imagen-producto" class="product-image" alt="Imagen de notebook" :src="imageUrl">
            </div>
            <div>
                <h1 id="titulo-producto">{{ product.title }}</h1>
                <p id="descripcion-producto" class="product-description">{{ product.description }}</p>
                <a id="link-producto" :href="product.factoryUrl">Sitio fabricante</a>
                <p id="precio-producto">$ {{ product.price }}</p>
                <button @click="buyNotebook">Comprar</button>
                <p>RAM:</p>
                <ul>
                    <li @click="changePrice(notebooksType.price)" v-for="notebooksType in product.notebooksTypes"><button>{{notebooksType.ramAmount}}</button></li>
                </ul>
            </div>
            <div>
                <p>Carro:</p>
                <ul>
                    <li v-for="boughtNotebook in boughtNotebooks">{{boughtNotebook.title}}: $ {{boughtNotebook.price}}:</li>
                </ul>
            </div>
        </div>`,
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            imageUrl: this.product.imagesURL[0],
            boughtNotebooks: []
        }
    },
    computed: {
        totalAmount() {
            let total = 0;
            for (let boughtNotebook of this.boughtNotebooks) {
                total += boughtNotebook.price;
            }

            return total;
        }
    },
    methods: {
        buyNotebook() {
            this.boughtNotebooks.push({title: this.product.title, price: this.product.price});
        },
        changeImage(imageUrl) {
            this.imageUrl = imageUrl;
        },
        changePrice(price) {
            this.product.price = price;
        },
    }
})