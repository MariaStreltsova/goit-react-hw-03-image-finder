import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ tags, previewImg, selectedImg }) {
  return (
    <GalleryItem>
      <Image src={previewImg} alt={tags} onClick={selectedImg} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  selectedImage: PropTypes.func,
};
