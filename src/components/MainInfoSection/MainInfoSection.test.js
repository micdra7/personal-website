import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MainInfoSection from './MainInfoSection';

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

describe('MainInfoSection.js', () => {
    it('renders properly', () => {
        act(() => {
            render( <MainInfoSection />, container);
        });

        expect(container.textContent).toBe('Michał DrabikFullstack Web Developer');
    });
}); 