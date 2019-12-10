import axios from 'axios';
import actions from '../../store/actions';

const apiKey = '686cd0907cf68e0ddabc6415dd881700';
const tags = 'marilyn+monroe';

const fetchPhotos = async () => {
    return await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=9&format=json&nojsoncallback=1`, {
    })
        .then(res => {
            const json = res.data.photos;
            return json
        })
        .catch(error => {
            console.log(error)
        })
}
export const getPhotos = () => {

    let resultArray = [];
    return (
        async (dispatch) => {

            await fetchPhotos().then(data => {
                let itemId = [];
                data.photo.map(item => {
                    return itemId = [...itemId, item.id];
                });
                return itemId
            })
                .then(res => {
                    return Promise.all(res.map(item => {
                        return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${item}&format=json&nojsoncallback=1`)
                            .then(res => {

                                const arrResult = res.data.sizes.size;
                                //const getLastItemFromResult = arrResult.slice(-1);
                                resultArray = [...resultArray, arrResult[3]]

                                return resultArray
                            })
                    })).then(resultArray => resultArray)
                })

            resultArray.map(photo => dispatch(actions.add(photo)))
        }
    )
}