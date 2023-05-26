/// <reference types="cypress" />

describe('Context: My first Tests',()=>{
    before(()=>{
        //runs once before all test cases in this describe block, like beforeClass in TestNG
    })
    beforeEach(()=>{
        //run before each test case,beforeMethod in TestNG
        cy.clearAllCookies();
    })
    after(()=>{
        //similar to afterClass in TestNG, runs once after all tests finished
    })
    afterEach(()=>{
        //similar to afterMethod in TestNG
    })
    it('Opening a web application', ()=>{
        cy.visit('registration_form');
        cy.get(':nth-child(5) > a').click;
    })
})