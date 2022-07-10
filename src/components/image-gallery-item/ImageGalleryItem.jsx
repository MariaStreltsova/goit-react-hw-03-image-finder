import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ tags, previewImg, selectedImage }) {
  return (
    <GalleryItem>
      <Image src={previewImg} alt={tags} onClick={selectedImage} />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  selectedImage: PropTypes.func,
};
