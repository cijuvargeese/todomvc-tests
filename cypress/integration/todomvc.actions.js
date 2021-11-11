///<reference types="cypress" />

describe('Active todos', () => {

    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh")
        cy.get('.new-todo').type("first data{enter}")
        cy.get('.new-todo').type("second list{enter}")
        cy.get('.new-todo').type("third list{enter}")
    })
    
       
    it('should check the lists added', () =>{
        cy.get(':nth-child(2) > .view > label').should('have.text','second list')
   
     }) 

     it('should check toggle button is working',() => {
        cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')
        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
        cy.get('.completed > .view > label').should('have.css','text-decoration-line','line-through')
    })

    it('should check the clear completed functionality',() => {
        cy.get(':nth-child(2) > .view > .toggle').click()
        cy.contains('Clear completed').click()
        cy.get('.todo-list li').should('have.length', 2)
    })
     
})


