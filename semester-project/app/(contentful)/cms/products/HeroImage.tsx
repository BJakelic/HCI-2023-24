// HeroImage.tsx
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

interface HeroImageProps {
  productName: string;
  image?: string;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  image,
  productName,
  className,
}: HeroImageProps) => {
  if (!image) return null;

  return (
    <div className={cn("relative w-96 h-60", className)}>
      <Image
        src={image}
        alt={productName || "Product"}
        layout="fill"
        objectFit="cover"
        className="rounded-md hover:opacity-70"
      />
    </div>
  );
};

export default HeroImage; // Export HeroImage as default
