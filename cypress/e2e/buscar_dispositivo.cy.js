/// <reference types="cypress"/> 

describe("Buscar dispositivos", () => {
    it("Buscar dispositivo específico", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/7",            
        }).then((response) => {
            //console.log("Resposta: " ,response)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("7")
            cy.writeFile('cypress/reports/logs/api-log.json1', {
                status: response.status,
                body: response.body
            })

        }

        )

    }

    )
    // it("Buscar dispositivo inexistente", () => {
    //     cy.request({
    //         method: "GET",
    //         url: "https://api.restful-api.dev/objects/ERRO", 
    //         failOnStatusCode: false           
    //     }).then((response) => {
    //         console.log("Resposta: " ,response)
    //         expect(response.status).to.equal(404)
    //         expect(response.body.error).to.equal("Oject with id=ERRO was not found.")

    //     }

    //     )

    // }

    // )
    // it("Buscar dispositivo por ID", () => {
    //     cy.request({
    //         method: "GET",
    //         url: "https://api.restful-api.dev/objects/21",            
    //     }).then((response) => {
    //         //console.log("Resposta: " ,response)
    //         expect(response.status).to.equal(200)
    //         expect(response.body.id).to.equal("21")

        
    //     }

    //     )

    // }

    // )
}

)