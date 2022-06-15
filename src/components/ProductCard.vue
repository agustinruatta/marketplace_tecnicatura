<template>
  <img :src="product.image_url" class="product-image" alt="Imagen de notebook">
  <p>{{ product.title }}</p>
  <p>{{ product.description }}</p>
  <p>{{ product.price }}</p>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
