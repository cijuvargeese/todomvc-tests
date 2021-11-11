///<reference types="cypress" />

import { TodoPage } from "../page-objects/todoPage"
import {toggleNthTodoList, clickClearCompletedButton} from "../page-objects/todoPage"

describe('Active todos', () => {

    const todoPage = new TodoPage
    it('should navigate to todomvc site', () =>{
        todoPage.navigate()
        
    }) 
    
    it('should add a todo list', () =>{
        todoPage.addTodoList('Check Room')
        toggleNthTodoList(0)
        clickClearCompletedButton()
    }) 
    
    
    it('doing validations in todo list', () =>{
        cy.visit("http://todomvc-app-for-testing.surge.sh")
        cy.get('.new-todo').type("first list{enter}")
        cy.get('label').should('have.text','first list')
    
        //should to be used for all validations 
        cy.should('not.be.checked')
        cy.get('.toggle').click()
        cy.should('be.checked')
        cy.get('label').should('have.css','text-decoration-line','line-through')
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants','li')
     }) 
     
})


