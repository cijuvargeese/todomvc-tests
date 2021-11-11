export class TodoPage {
    navigate(){
        // cy.visit("http://todomvc-app-for-testing.surge.sh")
        cy.visit("https://todomvc-app-for-testing.surge.sh/?different-title-color")
    }

    addTodoList(todoTxt) {
        cy.get('.new-todo').type(todoTxt+'{enter}')
    }
}

export function toggleNthTodoList(todoIndex){
    cy.get(':nth-child('+todoIndex + 1+') > .view > .toggle').click()
}

export function clickClearCompletedButton(){
    cy.contains('Clear').click()
}