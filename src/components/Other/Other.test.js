import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Other from './Other';

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

describe('Other.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Other />, container);
        });

        expect(container.textContent)
            .toBe('');
    });
}); 