import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('App.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <App />, container);
        });

        expect(container.textContent).toBe('HomeTechnologiesOtherContactStudent at Silesian University' +
        ' of TechnologyFaculty of Automatic Control, Electronics and Computer' + 
        ' ScienceMichał DrabikFullstack Web Developer');
    });
}); 