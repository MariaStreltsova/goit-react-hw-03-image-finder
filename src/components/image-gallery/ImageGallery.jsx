import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';

export default function ImageGallery({ images, selectedImg }) {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          previewImg={webformatURL}
          tags={tags}
          selectedImg={() => selectedImg(largeImageURL, tags)}
        />
      ))}
    </ul>
  );
}
