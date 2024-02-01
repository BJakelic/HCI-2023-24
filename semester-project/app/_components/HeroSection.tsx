import Image, { StaticImageData } from "next/image";

import heroImage1 from "@/public/hero/img1.jpg";
import heroImage2 from "@/public/hero/img2.jpg";
import heroImage4 from "@/public/hero/img3.jpg";
import heroImage3 from "@/public/hero/img4.jpg";

type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "10% 10% 10% 10%" },
  { image: heroImage2, borderRadius: "10% 10% 10% 10%" },
  { image: heroImage3, borderRadius: "10% 10% 10% 10%" },
  { image: heroImage4, borderRadius: "10% 10% 10% 10%" },
];

const HeroSection = () => (
  <section className="grid md:grid-cols-2 justify-evenly justify-items-center gap-8 .w-screen pt-20 pb-20 pr-10 pl-10">
    <div className="flex flex-col justify-center gap-5 max-w-xl">
      <h1 className="thin-screen-control lg:text-5xl font-bold text-brand-special-100 whitespace-break-spaces">
        <span className="font-roboto">Welcome to </span><span className="font-tahoma text-brand-blue-100 font-bold">Specs</span><span className="font-tahoma text-brand-special-300 font-bold">Checks</span><span className="font-roboto">!</span>
      </h1>
      <p className="font-roboto text-sm md:text-base whitespace-break-spaces italic font-bold text-brand-blue-300">
        Start your gaming journey now! <b/>
      </p>
      <p className="font-roboto text-sm md:text-base font-bold text-brand-special-100">
        Are you ready to level up your gaming experience? <b/>
        Introducing SpecsChecks, your go-to destination
        for ensuring that your computer is ready for the 
        latest and greatest games. Whether you&apos;re a dedicated
        gamer, a casual player, or a parent looking for
        family-friendly options, SpecsChecks has you covered.
      </p>
    </div>
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 grow">
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-48 w-48 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
            <Image
              src={imageObj.image}
              alt={`Hero image ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
                borderRadius: `${imageObj.borderRadius}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;