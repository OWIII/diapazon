export const SET_LOADING = 'SET_LOADING';
export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_REQUEST_ERROR = 'GET_IMAGE_REQUEST_ERROR';
export const CALL_IMAGE_REQUEST = 'CALL_IMAGE_REQUEST';

export const setIsLoading = (status) => ({
	type: SET_LOADING,
	payload: status,
});

export const getImageRequest = (image) => ({
	type: GET_IMAGE_REQUEST,
	payload: image,
});

export const getImageRequestError = (error) => ({
	type: GET_IMAGE_REQUEST_ERROR,
	payload: error,
});

export const callImageRequest = () => ({
	type: CALL_IMAGE_REQUEST,
});
