Vue.createApp({
    data() {
        return {
            id: 1,
            title: "Notebook HP 14-dq2024la",
            description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            imageUrl: "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
            factoryUrl: "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            price: 100000,
            urlImagenes: [
                "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
                "https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000"
            ],
            variedadesNotebooks: [
                {cantidadRam: '8 GB',  precio: 100000},
                {cantidadRam: '16 GB',  precio: 125000},
            ],
            cantidadProductosComprados: 0
        }
    },
    methods: {
        comprarProducto() {
            this.cantidadProductosComprados++;
        },
        cambiarImagen(urlImagen) {
            this.imageUrl = urlImagen;
        },
        cambiarPrecio(precio) {
            this.price = precio;
        }
    }
}).mount('#app')