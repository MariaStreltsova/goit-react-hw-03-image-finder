import { GalleryItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ tags, previewImg, selectedImg }) {
  return (
    <GalleryItem>
      <Image src={previewImg} alt={tags} onClick={selectedImg} />
    </GalleryItem>
  );
}
