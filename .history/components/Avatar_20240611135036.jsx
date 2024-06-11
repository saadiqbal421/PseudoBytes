import Image from "next/image";

const Avatar = () => {
  return (
    <div className="">
      <Image
        src="/2.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
