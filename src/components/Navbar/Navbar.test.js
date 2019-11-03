import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

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
        const links = [{ name: 'Home', href: '/' }, { name: 'Technologies', href: '/tech' }, 
        { name: 'Projects', href: '/projects'}, { name: 'Other', href: '/other' }, 
        { name: 'Contact', href: '/contact' }];

        act(() => {
            render( <MemoryRouter>
                        <Navbar links={links} />        
                    </MemoryRouter>, container);
        });

        expect(container.textContent)
            .toBe('HomeTechnologiesProjectsOtherContact');
    });
}); 