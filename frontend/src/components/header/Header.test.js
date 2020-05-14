import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header'

describe('Header component', () => {
    it('should match with snapshot version', () => {
        const actual = render(<Header/>)
        expect(actual.container).toMatchSnapshot()
    })
})