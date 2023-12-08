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
  { image: heroImage1, borderRadius: "20% 0 0 0" },
  { image: heroImage2, borderRadius: "0 20% 0 0" },
  { image: heroImage3, borderRadius: "0 0 0 20%" },
  { image: heroImage4, borderRadius: "0 0 20% 0" },
];

const HeroSection = () => (
  <section className="container flex justify-around items-center gap-10 .w-screen p-20">
    <div className="flex flex-col justify-start gap-5 max-w-xl">
      <h1 className="font-roboto text-5xl font-bold text-brand-special-100 whitespace-break-spaces">
        Welcome to SpecsChecks!
      </h1>
      <p className="font-roboto text-m whitespace-break-spaces italic font-bold text-brand-blue-300">
        Start your gaming journey now! <b />
      </p>
      <p className="font-roboto font-bold text-brand-special-100">
        Are you ready to level up your gaming experience? <b/>
        Introducing SpecsChecks, your got-to destination
        for ensuring that your computer is ready for the 
        latest and greatest games. Whether you&apos;re a dedicated
        gamer, a casual player, or a parent looking for
        family-friendly options, SpecsChecks has you covered.
      </p>
    </div>
    <div className="flex-shrink-0">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 grow">
        {images.map((imageObj, index) => (
          <div key={index} className="relative h-52 w-52">
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