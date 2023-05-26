/// <reference types="cypress" />

describe('Find or get Elements by Locators',()=>{
    beforeEach(()=>{
        //run before each test case,beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login')
    })
    it('Check different locators ', ()=>{
        //by CSS
        cy.get("input[name = 'username']").type("CydeoStudent");
        cy.get("[type='text']").clear();

        cy.get("input").each((item,index,list)=>{
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })


        
    })
   
})