class ProductManager {
  constructor() {
    this.products = []
  }

  async getProducts() {
    const products = await $.get('/api/data')
    this.products = products
  }
}