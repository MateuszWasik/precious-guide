import Image, { StaticImageData } from "next/image";

type ImageProps = {
  alt: string;
  imageSrc: string | StaticImageData;
};
export const ImageComponent = ({ alt, imageSrc }: ImageProps) => {
  return (
    <Image
      alt={alt}
      src={imageSrc}
      width={100}
      height={100}
      sizes="100"
      className="mx-auto h-full w-full"
      placeholder="blur"
    />
  );
};
