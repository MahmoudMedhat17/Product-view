import { productData } from "./Data";
import CarouselComponent from "./CarouselComponent";
import ProductVariants from "./ProductVariants";

const ProductView = () => {

  return (
    <div className="p-6 md:p-8">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-10">
        {/* Carousel */}
        <CarouselComponent />
        <div className="w-full md:w-[50%] flex flex-col space-y-8">
          {productData.map((product) => (
            <div className="space-y-2 md:space-y-0">
              <h1 className="text-[#1E3B8A] font-semibold text-[20px] sm:text-[22px] md:text-[24px]">
                {product.description}
              </h1>
              <p className="text-[#1E3B8A] font-medium text-[16px] sm:text-[25px] md:text-[32px]">
                ${product.price}
              </p>
              <div className="space-y-2 md:space-y-0">
                <p className="text-[#1E3B8A] font-bold">
                  <span className="font-bold text-[15px] sm:text-[18px] md:text-[20px]">
                    Brand:{" "}
                  </span>
                  {product.stockStatus}
                </p>
                <p className="text-[#1E3B8A] font-bold">
                  <span className="font-bold text-[15px] sm:text-[18px] md:text-[20px]">
                    Stock:{" "}
                  </span>
                  {product.stockStatus}
                </p>
                <p className="text-[#1E3B8A] font-bold">
                  <span className="font-bold text-[15px] sm:text-[18px] md:text-[20px]">
                    Can be Refand:{" "}
                  </span>
                  {product.stockStatus}
                </p>
              </div>
            </div>
          ))}
          <div className="space-y-4 md:space-y-0">
            <h3 className="text-[#1E3B8A] text-[16px] sm:text-[20px] md:hidden font-semibold">
              Description
            </h3>
            <p>
              <span className="text-[#1E3B8A] font-medium">
                <span className="pr-0.52">•</span> Two-Port High-Speed Charging:{" "}
              </span>
              <p className="text-[#676767] font-semibold text-[16px]">
                Experience high-speed charging with dual USB-C ports and
                advanced PowerIQ 3.0 technology, delivering an impressive 22.5W
                output.
              </p>
            </p>
            <p>
              <span className="text-[#1E3B8A] font-medium">
                <span className="pr-0.5">•</span>Foldable USB-C Connector:{" "}
              </span>{" "}
              <p className="text-[#676767] font-semibold text-[16px]">
                Say goodbye to cable tangles and protect your USB-C connector
                with a convenient foldable design for hassle-free charging.
              </p>
            </p>
            <p>
              <span className="text-[#1E3B8A] font-medium">
                <span className="pr-0.5">•</span>The Perfect Size
              </span>
              <p className="text-[#676767] font-semibold text-[16px]">
                Enjoy the perfect blend of style and functionality, meticulously
                crafted to effortlessly fit into your pocket or purse.
              </p>
            </p>
            <p>
              <span className="text-[#1E3B8A] font-medium">
                <span className="pr-0.5">•</span>All-Day Power:{" "}
              </span>
              <p className="text-[#676767] font-semibold text-[16px]">
                Get uninterrupted charging during your travels with the reliable
                5,000mAh capacity, keeping your devices powered up wherever you
                go.
              </p>
            </p>
            <p>
              <span className="text-[#1E3B8A] font-medium">
                <span className="pr-0.5">•</span>What You Get:{" "}
              </span>
              <p className="text-[#676767] font-semibold text-[16px]">
                Anker Nano Power Bank (22.5W, Built-In USB-C Connector), 2 ft /
                0.6 m USB-C to USB-C cable, welcome guide, user manual, 24-month
                worry-free warranty, and our friendly customer service.
              </p>
            </p>
          </div>
        </div>
      </div>
      {/* Table */}
      <ProductVariants />
    </div>
  );
};

export default ProductView;
