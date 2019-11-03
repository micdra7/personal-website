import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Navbar from './Navbar';

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
            render( <Navbar />, container);
        });

        expect(container.textContent)
            .toBe('HomeTechnologiesOtherContact');
    });
}); 