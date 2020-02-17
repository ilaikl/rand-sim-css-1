class Renderer {
  constructor() {
    this.source = $('#products-template').html()
    this.template = Handlebars.compile(this.source)
  }

  renderProducts(data) {
    const html = this.template({ data })
    $('#container').empty().append(html)
  }
}