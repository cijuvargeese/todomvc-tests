///<reference types="cypress" />

describe('Filter actions for todos', () => {

    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh")
        cy.get('.new-todo').type("first data{enter}")
        cy.get('.new-todo').type("second list{enter}")
        cy.get('.new-todo').type("third list{enter}")
        cy.get(':nth-child(2) > .view > .toggle').click()
    })
    
       
    it('should check active filter', () =>{
      cy.contains('Active').click()
      cy.get('.todo-list li').should('have.length', 2)

   
     }) 

     it('should check completed filter',() => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should check the clear completed functionality',() => {
        cy.contains('Clear completed').click()
        cy.get('.todo-list li').should('have.length', 2)
    })
     
})


