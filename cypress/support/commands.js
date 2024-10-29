Cypress.Commands.add("setMobileViewport", () => {
  cy.viewport("iphone-6"); // Ou outro dispositivo que você queira simular
});
Cypress.Commands.add("adicionarProdutoAoCarrinho", () => {
  cy.get(".card-footer-item") // Seleciona o elemento com a classe card-footer-item
    .first() // Para clicar somente no primeiro elemento retornado
    .click(); // Clica no elemento
  cy.contains("Produto adicionado ao carrinho!"); // Valida exibição do modal de confirmacao de produto adicionado ao carrinho
});
Cypress.Commands.add("adicionaTodosProdDaPaginaAoCarrinho", () => {
  cy.get(".card-footer-item").each(($el) => {
    cy.wrap($el).click();
    cy.contains("Produto adicionado ao carrinho!");
  });
});
Cypress.Commands.add("acessarTelaCarrinho", () => {
  cy.get(".navbar-burger").click(); // Clica nomenu
  cy.get('a[href="/cart"]').click();
  cy.url().should("eq", "https://liven-store-prd.web.app/cart");
  cy.contains("Carrinho");
});
