import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Technologies from './Technologies';

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

describe('Navbar.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Technologies />, container);
        });

        expect(container.textContent)
            .toBe('');
    });
}); 