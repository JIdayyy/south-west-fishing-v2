import Image from "next/image";

const Section = ({
  image,
  text,
  title,
  position,
}: {
  image: string;
  text: string;
  title: string;
  position: "left" | "right";
}) => {
  return (
    <div
      className={`flex space-y-5 flex-col justify-between align-middle items-start w-full ${
        position === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`w-full md:w-[50%] md:pl-0 md:pr-10 md:pt-5 md:pb-0`}>
        <h3
          className={
            "text-[40px] uppercase font-anton lg:text-[80px] my-5 font-bold"
          }
        >
          {title}
        </h3>
        <p
          className={
            "whitespace-pre-wrap font-arima lg:text-[20px] text-[16px]"
          }
        >
          {text}
        </p>
      </div>

      <div className={`w-full  md:w-[40%] h-[400px] md:h-[600px] relative`}>
        <Image quality={100} objectFit={"cover"} fill src={image} alt={title} />
      </div>
    </div>
  );
};

export default Section;
