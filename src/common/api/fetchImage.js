import axios from 'axios';
import { ALL_IMAGES_DEV } from '../constants';
import { getAllImages } from '../routers';

let urlGetImage = getAllImages;

if (process.env.NODE_ENV === 'development') {
	urlGetImage = ALL_IMAGES_DEV;
}

export const fetchImage = () => axios(urlGetImage);
