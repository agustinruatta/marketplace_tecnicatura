<template>
  <search></search>
  <product-info v-if="product" :product="product"></product-info>
  <div id="footer">
    <p>Marketplace tecnicatura</p>
  </div>
</template>
<script>
import Search from '@/components/Search.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import productService from '@/services/ProductService';

export default {
  name: 'Product',
  components: {
    Search,
    ProductInfo,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    productService.getProduct(this.id)
      .then((response) => {
        this.product = response.data;
      });
  },
};
</script>
