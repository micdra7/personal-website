import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contact from './Contact';

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

describe('Contact.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Contact />, container);
        });

        expect(container.textContent)
            .toBe('');
    });
}); 