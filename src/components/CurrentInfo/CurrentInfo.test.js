import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import CurrentInfo from './CurrentInfo';

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

describe('CurrentInfo.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <CurrentInfo />, container);
        });

        expect(container.textContent)
            .toBe('Student at Silesian University of Technology' +
                'Faculty of Automatic Control, Electronics and Computer Science');
    });
}); 