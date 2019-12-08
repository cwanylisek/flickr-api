import axios from 'axios';
import actions from '../../store/actions';

const apiKey = '686cd0907cf68e0ddabc6415dd881700';

const fetchPhotos = async () => {
    await axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.getPopular&api_key=686cd0907cf68e0ddabc6415dd881700&format=json&nojsoncallback=1&auth_token=72157712122396163-c654c47dbd3970a5&api_sig=68df3e1608e00bd31cbff12b002c90c4', {
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
    })
}

export const getPhotos = () => {
    console.log('getp')
    const photos = fetchPhotos()
    console.log(photos, 'photos in flicker.js')
    return(
        async () => {
            
        }
    )
}