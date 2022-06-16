<template>
  <div id="product-info">
    <div>
      <img @mouseover="changeImage(url)"
           v-for="url in product.imagesURL"
           :key="url"
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
      <p id="precio-producto">$ {{ price }}</p>
      <button @click="buyNotebook">Comprar</button>
      <p>RAM:</p>
      <ul>
        <li @click="changeSelectedNotebook(index)"
          v-for="(notebooksType, index) in product.notebooksTypes" :key="notebooksType">
          <button>{{notebooksType.ramAmount}}</button></li>
      </ul>
    </div>
    <div>
      <p>Carro:</p>
      <ul>
        <li v-for="boughtNotebook in boughtNotebooks" :key="boughtNotebook.id">
          {{boughtNotebook.title}}: $ {{boughtNotebook.price}}:
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedNotebook: 0,
      imageUrl: this.product.image_url,
      boughtNotebooks: [],
    };
  },
  computed: {
    totalAmount() {
      let total = 0;
      this.boughtNotebooks.forEach((boughtNotebook) => {
        total += boughtNotebook.price;
      });

      return total;
    },
    price() {
      return this.product.notebooksTypes[this.selectedNotebook].price;
    },
  },
  methods: {
    buyNotebook() {
      this.boughtNotebooks.push({ title: this.product.title, price: this.price });
    },
    changeImage(imageUrl) {
      this.imageUrl = imageUrl;
    },
    changeSelectedNotebook(index) {
      this.selectedNotebook = index;
    },
  },
};
</script>
