import ImgsViewer from 'react-images-viewer';

export const ImageViewer = ({ viewerIsOpen, seState, api, isOpen, img, alt}) => {

  return (
    <ImgsViewer
      imgs={[{ src: `${api}${img}`, alt: {alt} }]}
      onClose={seState}
      isOpen={isOpen}
      onClickImg={seState}
      backdropCloseable={true}
      showImgCount={false}
    />
  )
}