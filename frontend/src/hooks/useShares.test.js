import { renderHook, act } from '@testing-library/react-hooks';
import useShares from './useShares';
import {fetchShares} from '../services/shares-service/shares';

jest.mock('../services/shares-service/shares', () => ({
    fetchShares: jest.fn(() => {
        console.log('asd')
        return Promise.resolve({})
    })
}))

describe('useShares custom hook', () => {
    it('should call fetchShares on render', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useShares());
        await waitForNextUpdate();
        expect(fetchShares).toHaveBeenCalledTimes(1);
    })
})