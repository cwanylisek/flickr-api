import types from './types';

const add = animals => ({
    type: types.ADD_ANIMALS, animals
});

const reset = () => ({
    type: types.RESET_ANIMALS
});

export default {
    add,
    reset
}