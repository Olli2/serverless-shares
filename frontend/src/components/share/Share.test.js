import React from 'react';
import {render} from '@testing-library/react';
import {Share} from './Share';
import { getStatus } from '../../utils/get-status/getStatus'

jest.mock('../../utils/get-status/getStatus', () => ({
    getStatus: jest.fn() 
}))

describe('Share component', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should match with snapshot', () => {
        const actual = render(<Share share={{}}/>)
        expect(actual.asFragment).toMatchSnapshot()
    })

    it('should call getStatus', () => {
        render(<Share share={{performance: 999}}/>)
        expect(getStatus).toHaveBeenCalledTimes(1)
        expect(getStatus).toHaveBeenCalledWith(999)
    })
})