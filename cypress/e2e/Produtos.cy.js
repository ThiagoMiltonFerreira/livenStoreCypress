describe("Produtos", () => {
  beforeEach(() => {
    cy.setMobileViewport(); // Configura a viewport para mobile antes de cada teste
    cy.visit("/"); //Acessa a rota principal da pagina
    cy.url().should("eq", "https://liven-store-prd.web.app/"); // Verifica se a URL é exatamente igual
  });
  it("Valida exibicao de produtos", () => {
    cy.contains("Produtos"); // Verifica se na tela possui o texto
    cy.get(".card.is-clickable.product-item") // Seleciona o elemento com as classes
      .should("exist"); // Verifica se o elemento existe na tela
  });
  it("Adicao de produto ao carrinho", () => {
    cy.get(".card-footer-item") // Seleciona o elemento com a classe card-footer-item
      .first() // Para clicar somente no primeiro elemento retornado
      .click(); // Clica no elemento
    cy.contains("Produto adicionado ao carrinho!"); // Valida exibição do modal de confirmacao de produto adicionado ao carrinho
  });
  it("Valida quantidade de paginas de produtos", () => {
    cy.get(".pagination-link").should("have.length", 7); // Valida se o retorno da pesquisa pela classse .pagination-link e igual a 7 ou seja possui 7 paginas
  });
  it("Valida acesso as paginas de produtos", () => {
    cy.get(".pagination-link").each(($el, index) => {
      // faz meio que um for em todos os elementos retornados em .pagination-link
      cy.get(".pagination-link").eq(index).click(); //Clica em cada elemento retornado na classe paginationLink
    });
  });
});
