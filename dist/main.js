const pManager = new ProductManager()
const renderer = new Renderer()

const loadPage = async function () {
  await pManager.getProducts()
  renderer.renderProducts(pManager.products)
  $("#loadAll").remove()
}

const loadInit = async function () {
  await pManager.getProducts()
  renderer.renderProducts(pManager.products.slice(0,6))
}


loadInit()