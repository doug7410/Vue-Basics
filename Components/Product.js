var Product = {
  props: {
    product: Object
  },
  template: `
    <div class="mb-2 card p-2">
        <p v-if="product.isOnSale" class="bg-success text-light-text-center">On Sale!</p>
        <p>Product Name: {{ product.name }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Quantity in stock: {{ product.quantityInStock }}</p>
        <p>Sale Price {{ product.price }}</p>
    </div>
  `
};