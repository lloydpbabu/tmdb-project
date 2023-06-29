import Image from "next/image";
type Props = {
  imgUrl: string;
};
const Thumb = ({ imgUrl }: Props) => {
  return (
    <Image
    className="rounded-lg"
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      layout="fill"
      objectFit="cover"
      src={imgUrl}
      alt="thumbnail"
      unoptimized={true}
    />
  );
};

export default Thumb;
