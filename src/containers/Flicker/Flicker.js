import axios from 'axios';
import actions from '../../store/actions';

const apiKey = '686cd0907cf68e0ddabc6415dd881700';//https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=686cd0907cf68e0ddabc6415dd881700&format=json&nojsoncallback=1&auth_token=72157712122396163-c654c47dbd3970a5&api_sig=68df3e1608e00bd31cbff12b002c90c4

const fetchPhotos = async () => {
    return await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1`, {
        // params: {
        //     method: 'flickr.photos.search',
        //     api_key: apiKey,
        //     tags: '',
        //     extras: 'url_n, owner_name, date_taken, views',
        //     page: 1,
        //     format: 'json',
        //     nojsoncallback: 1,
        //     per_page: 30,
        // }
    })
        .then(res => {
            console.log(res, 'res')
            const json = res.data.photos;
            console.log(json, 'json')
            return json
        })
        .catch(error => {
            console.log(error)
        })
}

export const getPhotos = () => {

    console.log('getphotos executed');
    return (
        async (dispatch) => {
            const photos = await fetchPhotos().then(data => data.photo)
            console.log(photos, 'photos in flicker.js')
            photos.map(photo => dispatch(actions.add(photo)))
        }
    )
}