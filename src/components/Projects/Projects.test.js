import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Projects from './Projects';

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

describe('Projects.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Projects />, container);
        });

        expect(container.textContent)
            .toBe('');
    });
}); 