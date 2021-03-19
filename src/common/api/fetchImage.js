import axios from 'axios';
import { ALL_IMAGES_DEV } from '../constants';

export const fetchImage = () => axios(ALL_IMAGES_DEV);
