describe("Carrinho", () => {
  beforeEach(() => {
    cy.setMobileViewport(); // Configura a viewport para mobile antes de cada teste
    cy.visit("/"); //Acessa a rota principal da pagina
    cy.url().should("eq", "https://liven-store-prd.web.app/"); // Verifica se a URL é exatamente igual
  });
  it("Validar existencia de produto no carrinho", () => {
    cy.adicionaTodosProdDaPaginaAoCarrinho();
    cy.acessarTelaCarrinho();
    cy.get(".cart-product-list").should("exist");
  });
  it("Remover todos produtos do carrinho", () => {
    cy.adicionarProdutoAoCarrinho();
    cy.acessarTelaCarrinho();
    /*Clicar em todos os elementos encontrados na tela dessa classe no caso do botao menos*/
    cy.get(".media-right > :nth-child(1) > :nth-child(2)").each(($btn) => {
      cy.wrap($btn).click();
    });
  });
  it("Fechar pedido", () => {
    cy.adicionarProdutoAoCarrinho();
    cy.acessarTelaCarrinho();
    cy.get(".cart-product-list").should("exist");
    cy.get(".button.is-success").click();
    cy.contains("Funcionalidade não implementada!"); // Valida exibição do modal de funcionalidade nao implementada
  });
});
