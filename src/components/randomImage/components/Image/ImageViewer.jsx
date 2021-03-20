import ImgsViewer from 'react-images-viewer';
import PropTypes from 'prop-types';

export const ImageViewer = ({ seState, api, isOpen, img, alt }) => {
	return (
		<ImgsViewer
			imgs={[{ src: `${api}${img}`, alt: { alt } }]}
			onClose={seState}
			isOpen={isOpen}
			onClickImg={seState}
			backdropCloseable={true}
			showImgCount={false}
		/>
	);
};

ImageViewer.propTypes = {
	seState: PropTypes.func,
	api: PropTypes.string,
	isOpen: PropTypes.bool,
	img: PropTypes.string,
	alt: PropTypes.string,
};
