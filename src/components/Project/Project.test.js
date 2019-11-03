import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Project from './Project';

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

describe('Project.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <Project />, container);
        });

        expect(container.textContent)
            .toBe('');
    });
}); 