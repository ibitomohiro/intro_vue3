const app = Vue.createApp({
  data: function() {
    return {
      product: 'Socks',
      image: './images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id:2234, color: 'green' },
        { id:2235, color: 'blue'},
      ]
    }
  }
})