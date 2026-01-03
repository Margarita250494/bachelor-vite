import {clsx} from 'clsx'

function ImageContainer({image, imageAlt, isBig}) {
  return (
    <div className="mb-8 l:mb-0 w-full l:w-[50%] max-w-full flex justify-center">
      <img
        src={image}
        alt={imageAlt}
        className={clsx(
          isBig ? "w-full h-full l:w-[80%] l:h-auto"
            : 'w-[80%] h-[80%] l:h-auto')}
        loading="lazy"
      />
    </div>
  );
}

export default ImageContainer;