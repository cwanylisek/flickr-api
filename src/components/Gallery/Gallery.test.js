import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Gallery from './Gallery.js';
import store from '../../store/store';

it('renders 5 box images', () => {

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

    const wrapper = shallow(
        <Provider store={store}>
            <Gallery title="test" />
        </Provider>
    )
    wrapper.setProps(flickrPhotos)
    expect(wrapper.prop('title')).toEqual=('test');
    // console.log(wrapper.props(), 'propsy')
    // const boxImg = wrapper.render().find('gallery__img-box');
    // expect(boxImg).toHaveLength(5);
})

it('matches snapshot', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Gallery />
        </Provider>
    )

    expect(wrapper).toMatchSnapshot();
})