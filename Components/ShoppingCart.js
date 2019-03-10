const ShoppingCart = {
  template: `
      <div class="card">
          <div class="card-header">
              Shopping Cart
          </div>
          <table class="table table-sm table-striped" v-if="items.length">
              <tr>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price</th>
              </tr>
              <tr v-for="item in items" :key="item.id">
                  <td>
                      {{ item.name }}
                      <a href="#" @click.prevent="$emit('remove-from-cart', item.id)">remove</a>
                  </td>
                  <td>
                      <input type="text"
                             :value="item.quantity"
                             class="form-control"
                             style="max-width: 45px"
                             @keyup.enter="$emit('update-quantity', $event.target.value, item.id)"
                      >
                  </td>
                  <td>{{ item.price }}</td>
              </tr>
              <tr>
                  <th>Total:</th>
                  <th></th>
                  <th>{{ cartTotal }}</th>
              </tr>
          </table>
          <div v-else class="p-4">
              <strong>Your cart is empty</strong>
          </div>
      </div>
  `,
  props: {
    items: Array
  },
  computed: {
    cartTotal: function () {
      if (!this.items.length) {
        return 0;
      }

      return this.items.map(function (item) {
        return item.price * item.quantity
      }).reduce(function (accum, price) {
        return accum + price
      })
    }
  },
};