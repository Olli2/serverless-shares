export const getStatus = (value) => {
    if (value > 0) {
        return 'positive';
    } else if (value === 0) {
        return 'neutral';
    }
    return 'negative';
}