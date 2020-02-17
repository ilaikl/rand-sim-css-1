const pManager = new ProductManager()
const renderer = new Renderer()

const loadPage = async function () {
  await pManager.getProducts()
  renderer.renderProducts(pManager.products)
}

loadPage()