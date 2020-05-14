import React from 'react';
import {render} from '@testing-library/react';
import {SharesList} from './SharesList';

jest.mock('../share/Share', () => ({
    Share: jest.fn((obj) => {
        return `ShareMock-${obj.share.id}`
    })
}))

const mockShares = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
]

describe('Shares list component', () => {
    it('should match with snapshot', () => {
        const actual = render(<SharesList shares={mockShares}/>)
        expect(actual.asFragment).toMatchSnapshot()
    })

    it('should map all objects', () => {
        const actual = render(<SharesList shares={mockShares}/>)
        expect(actual.container).toHaveTextContent('ShareMock-1')
        expect(actual.container).toHaveTextContent('ShareMock-2')
        expect(actual.container).toHaveTextContent('ShareMock-3')
    })
})