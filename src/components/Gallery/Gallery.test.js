import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Gallery from './Gallery.js';
import store from '../../store/store';

it('renders 1 box images', () => {

    const flickrPhotos = {
        props: {
            flickrPhotos: [
                {
                    url: 'test'
                },
                {
                    url: 'test'
                },
                {
                    url: 'test'
                },
                {
                    url: 'test'
                },
                {
                    url: 'test'
                }
            ]
        },
    }

    //todo

    const wrapper = mount(
        <Provider store={store}>
            <Gallery title="test" />
        </Provider>
    )
    wrapper.setProps(flickrPhotos)
    expect(wrapper.prop('title')).toEqual = ('test');
    console.log(wrapper.debug(), 'propsy')
    const boxImg = wrapper.find('.gallery__container');
    expect(boxImg).toHaveLength(1);
})

it('matches snapshot', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Gallery />
        </Provider>
    )

    expect(wrapper).toMatchSnapshot();
})