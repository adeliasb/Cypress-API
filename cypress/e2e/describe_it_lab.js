/// <reference types="cypress" />

describe.only("Grupo de testes", () => {
    it.only("Um teste externo",() => {
        //cy.get("#campo").type("um texto")
        cy.visit('http://www.uol.com.br')
        cy.end
    })
    it.skip("Um teste externo",() => {
        cy.get("#campo").type("um texto")
    })
    it.skip("Um teste externo",() => {
        cy.get("#campo").type("um texto")
    })
    it.skip("Um teste externo",() => {
        cy.get("#campo").type("um texto")
    })
})