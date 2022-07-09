import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
export default function ImageGallery({ images, selectedImg }) {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          tags={tags}
          selectedImg={() => selectedImg(largeImageURL, tags)}
        />
      ))}
    </ImageList>
  );
}
