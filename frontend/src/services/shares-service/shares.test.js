import {fetchShares} from './shares';
import axios from 'axios';

jest.mock('axios', () => ({
    get: jest.fn()
}))

describe('fetch shares', () => {
    it('should call axios get', () => {
        fetchShares()
        expect(axios.get).toHaveBeenCalledTimes(1);
    })
})