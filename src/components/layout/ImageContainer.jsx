import {clsx} from 'clsx'

function ImageContainer({image, imageAlt, isBig,width, height}) {
  return (
    <div className="mb-8 l:mb-0 w-full l:w-[50%] max-w-full flex justify-center">
      <img
        width={width}
        height={height}
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