export default function ImageGalleryItem({ tags, previewImg, selectedImg }) {
  return (
    <li class="gallery-item">
      <img src={previewImg} alt={tags} onClick={selectedImg} />
    </li>
  );
}
