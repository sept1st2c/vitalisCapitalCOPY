import Image from "next/image";

const VitalisLogo = () => {
  return (
    <div className="flex items-center p-4 rounded-lg">
      <Image src="/VitalisLogo/v-black.png" alt="Vitalis Logo" width={150} height={50} />
      <div className="ml-3">
        <h1 className="text-white text-2xl font-bold">vitalis</h1>
        <h2 className="text-white text-2xl font-bold">capital</h2>
      </div>
    </div>
  );
};

export default VitalisLogo;
