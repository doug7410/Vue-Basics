const ProductTwo = {
  template: `
  <div class="mb-2 card p-2">
      <div class="row">
          <div class="col-sm-4">
              <p v-if="product.isOnSale"
                 class="bg-success text-light on-sale">On Sale!</p>
              <img
                      :src="product.thumbnailImage"
                      @mouseover="$emit('show-modal')"
                      @mouseout="$emit('hide-modal')"
                      width="150"
                      height="150"
              />
          </div>
          <div class="col-sm-8">
              <p>Product Name: {{ product.name }}</p>
              <p>Description: {{ product.description }}</p>
              <p v-if="quantityLeft <= 0" class="bg-danger p-1">
                  {{ quantityLeft }} left, we're sold out
              </p>
              <p v-else-if="quantityLeft < 3 " class="bg-danger p-1">
                  {{ quantityLeft }} left, we're almost sold out
              </p>
              <p v-else-if="quantityLeft >= 3 &&  quantityLeft <= 5" class="bg-warning p-1">
                  {{ quantityLeft }} left, stock is running low
              </p>
              <p v-else class="bg-success p-1">
                  {{ quantityLeft }} left
              </p>
              <p>Sale Price {{ product.price }}</p>
              <button @click="$emit('add-to-cart')"
                      :disabled="quantityLeft <= 0"
                      class="btn btn-info btn-sm">
                  Add to card
              </button>
          </div>
      </div>
  </div>
  `,
  props: {
    product: Object,
    quantityLeft: Number
  }
};