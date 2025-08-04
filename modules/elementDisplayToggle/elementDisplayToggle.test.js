import { elementDisplayToggle } from "./elementDisplayToggle";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
jest.mock('fs');


describe('elementDisplayToggle', () => {
        
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    const toad = dom.window.document.createElement('div')
    
    beforeEach(() => {
        toad.style.display = 'flex'
    });
   
    test('Should change element display value to "none"', () => {
        expect(toad.style.display).toBe('flex');
        elementDisplayToggle(toad)
        expect(toad.style.display).toBe('none');
    });

    test('Should NOT change element display when function isnt called', () => {
        expect(toad.style.display).toBe('flex');
        expect(toad.style.display).toBe('flex');
    });

    test('Should change element display value to "none" and then back to "flex" ', () => {
        elementDisplayToggle(toad)
        expect(toad.style.display).toBe('none');
        elementDisplayToggle(toad)
        expect(toad.style.display).toBe('flex');
    });



})