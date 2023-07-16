import noImage from '../assets/no-image-placeholder.webp';

/**
 * @param url
 * @returns placeholder image (or) imageUrl
 *
 * To generate a cropped image of 600x400 size, if the url doesn't exist then it will return a default placeholder image
 */
const getCroppedImageUrl = (url: string) => {
  if (!url) {
    return noImage;
  }

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
