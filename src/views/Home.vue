<template>
  <search></search>
  <p id="cantidad-productos">Cantidad de productos: {{ productos.length }}</p>
  <div id="product-list">
    <div v-for="producto in productos" :key="producto.id" class="product">
      <router-link :to="{name: 'Product', params: {id: producto.id}}">
        <product-card :product="producto"></product-card>
      </router-link>
    </div>
  </div>
  <div id="footer">
    <p>Marketplace tecnicatura</p>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Search from '@/components/Search.vue';
import productService from '@/services/ProductService';

export default {
  name: 'Home',
  components: {
    ProductCard,
    Search,
  },
  data() {
    return {
      productos: [],
    };
  },
  created() {
    productService.getProducts()
      .then((response) => {
        this.productos = response.data;
      });
  },
};
</script>
