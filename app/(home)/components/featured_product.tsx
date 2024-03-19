"use client";

import Share from "@/components/icons/share";
import { SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND } from "@/lib/constants";
import { Maybe, Product } from "@/types/shopify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  product: Maybe<Product>;
};
export default function FeaturedProduct({ product }: Props) {
  const [currentVariantID, setcurrentVariantID] = useState(product?.variants[0].id);

  if (!product) return null;

  const currentVariant = product.variants.find(({ id }) => id === currentVariantID);

  return (
    <section className="md:mx-8 lg:mx-12 md:mb-16 lg:mb-20 lg:p-12 min-[950px]:grid min-[950px]:grid-cols-[11fr_9fr] gap-12 md:rounded-3xl bg-white">
      <FeaturedProductImages product={product} />

      <div className="px-5 pb-12 md:px-12 lg:p-0 mt-5 lg:mt-0">
        <Link href="#" className="opacity-70 text-sm md:text-base">
          {product.vendor}
        </Link>

        <h2 className="my-2 md:my-4 font-bold text-[2rem] md:text-[2.5rem] leading-[1.1]">
          <Link href={`/products/${product.handle}`}>{product.title}</Link>
        </h2>

        <div className="flex justify-between gap-2 items-center">
          <p className="text-lg md:text-xl flex gap-1">
            <span>{product.priceRange.maxVariantPrice.currencyCode}</span>
            <span>{product.priceRange.maxVariantPrice.amount}</span>
          </p>
        </div>

        <hr className="my-6" />
        <div className="mb-2">
          <p className="flex gap-2 text-sm md:text-base">
            <span className="text-text/70">Color:</span>
            <span>{currentVariant?.title}</span>
          </p>
        </div>

        <div className="mb-6 flex gap-1 items-center">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              onClick={() => setcurrentVariantID(variant.id)}
              className={clsx(
                "w-7 h-7 aspect-square rounded-full relative",
                variant.id === currentVariantID &&
                  "m-1 before:shadow-[0_0_0_2px] before:absolute before:-inset-[3px] before:rounded-full"
              )}
              style={{
                background: SHOPIFY_COLOR_OPTION_T0_CSS_BACKGROUND.get(variant.title),
              }}
            >
              <span className="sr-only">Select {variant.title}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button
            type="button"
            className="px-8 md:px-10 py-4 md:py-4.5 rounded-button bg-[rgb(137_49_15)] grid place-items-center text-white w-full font-bold text-sm md:text-base"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="px-8 md:px-10 py-4 md:py-4.5 rounded-button bg-black grid place-items-center text-white w-full font-bold text-sm md:text-base"
          >
            Buy it now
          </button>
        </div>

        <p className="p-5 flex flex-col gap-2 text-xs md:text-sm text-center bg-[rgb(240_240_240)] rounded-md my-6">
          <span className="font-bold">Fast shipping</span>
          <span>Place your order before 12:00pm and receive it by tomorrow</span>
        </p>

        <Link
          href={`/products/${product.handle}`}
          className="underline hover:no-underline text-sm md:text-base"
        >
          View full details
        </Link>

        <button type="button" className="opacity-70 mt-6 flex hover:opacity-100 gap-2.5">
          <Share />
          <span className="text-sm md:text-base">Share</span>
        </button>
      </div>
    </section>
  );
}

type FeaturedProductImagesProps = {
  product: Product;
};
function FeaturedProductImages({ product }: FeaturedProductImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const handleImageButtonClick = (index: number) => {
    imagesRef.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative flex flex-col min-[1200px]:flex-row gap-12 h-fit">
      {/* THumbnails button for product images,, shows on desktop */}
      <div className="order-1 min-[1200px]:order-none lg:flex min-[1200px]:flex-col gap-2.5 shrink-0 hidden">
        {product.images.map((image, index) => (
          <button
            key={image.url}
            onClick={() => handleImageButtonClick(index)}
            className={twMerge(
              "relative after:block after:w-full after:h-0.5 after:bg-black after:mt-1 after:opacity-0",
              index === currentImageIndex && "after:opacity-100"
            )}
          >
            <Image
              src={image.url}
              width={64}
              height={64}
              alt={image.altText}
              className="rounded-md"
            />
          </button>
        ))}
      </div>

      <div className="relative w-full">
        <div className="flex gap-0.5 overflow-x-auto no-scrollbar snap-x snap-mandatory">
          {product.images.map((image, index) => (
            <div
              key={image.url}
              className={clsx(
                "aspect-square w-full shrink-0 relative lg:rounded-xl overflow-hidden snap-center snap-always"
              )}
              ref={(ref) => (imagesRef.current[index] = ref)}
            >
              <Image src={image.url} alt={image.altText} fill />
            </div>
          ))}
        </div>

        {/* Dot buttons for product images, shows on mobile */}
        <div className="absolute bottom-4 left-0 right-0 z-10 py-2 px-4 mx-auto w-fit order-1 lg:-order-none flex rounded-full bg-white/70 gap-2.5 lg:hidden">
          {product.images.map((image, index) => (
            <button
              key={image.url}
              onClick={() => handleImageButtonClick(index)}
              className={twMerge(
                "w-1.5 aspect-square bg-current opacity-30 rounded-full",
                index === currentImageIndex && "opacity-100"
              )}
            >
              <span className="sr-only">Go to product image {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
