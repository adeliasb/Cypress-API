/// <reference types="cypress"/>

describe("Cadastrar Dispotivo", () => {
    it("Cadastrar dispositivo válido", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                name: "Dispositivo de teste 0002",
                data: {
                    year: "2025",
                    price: "4000",
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    cor: "amarel"
                
                }
            },
            failOnStatusCode: false            
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal("Dispositivo de teste 0002")
        })
    })
    it("Cadastrar dispositivo válido", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                id: "21",
                name: "Dispositivo de teste 0003",                
                data: {
                    year: "2025",
                    price: "4000",
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    cor: "amarelo"              
                }
            },
            failOnStatusCode: false            
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.name).contains.equal("Dispositivo de teste 0003")
        })
    })
})

