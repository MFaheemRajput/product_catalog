const product = {  
    name: '',
    quantity: 0,
    price: 0,
    id:'',

    toJSON: function () {
      return {
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        id: this.id
      }
    },

    // toModel: function () {
    //     this.name = name;
    //     quantity: this.cpus,
    //     price: this.price,
    //     id: this.id

    //     return this;
    // }
  }
  
  JSON.stringify(product);