app.component('product-card', {
    template:
        `<img :src="product.image_url" class="product-image" alt="Imagen de notebook">
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>`,
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
})