export interface ImageErrorProps {}

const ImageError: React.FC<ImageErrorProps> = () => {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png';
  const urlTwo = 'https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif';
  return <img src={url} />;
};

export default ImageError;
