import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import FlipSection from './FlipSection';

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

describe('FlipSection.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <FlipSection />, container);
        });

        expect(container.textContent).toBe('');
    });
}); 