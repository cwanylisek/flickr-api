import types from './types';

const add = photos => ({
    type: types.ADD, photos
});

const reset = () => ({
    type: types.RESET
});

const loading = () => ({
    type: types.LOADING
});

export default {
    add,
    reset,
    loading
}