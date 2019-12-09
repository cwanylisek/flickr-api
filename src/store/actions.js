import types from './types';

const add = photos => ({
    type: types.ADD, photos
});

const reset = () => ({
    type: types.RESET
});

export default {
    add,
    reset
}