import { elementDisplayToggle } from "./elementDisplayToggle";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
jest.mock('fs');


describe('elementDisplayToggle', () => {
        
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    const mockElement = dom.window.document.createElement('div')
    mockElement.style.display = 'flex'

    afterEach(() => {
        mockElement.style.display = 'flex'
    });
   
    test('Should change element display value to "none"', () => {
        expect(mockElement.style.display).toBe('flex');
        elementDisplayToggle(mockElement)
        expect(mockElement.style.display).toBe('none');
    });

    test('Should NOT change element display when function isnt called', () => {
        expect(mockElement.style.display).toBe('flex');
        expect(mockElement.style.display).toBe('flex');
    });

    test('Should change element display value to "none" and then back to "flex" ', () => {
        elementDisplayToggle(mockElement)
        expect(mockElement.style.display).toBe('none');
        elementDisplayToggle(mockElement)
        expect(mockElement.style.display).toBe('flex');
    });

     test('Should NOT change element display value if the original is neither "flex" nor "none"', () => { 
        mockElement.style.display = 'block'
        expect(mockElement.style.display).toBe('block');
    }); 

})