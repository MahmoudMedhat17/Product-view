import { productOptions } from "./Data";

export default function Component() {
  return (
    <div className="w-full md:w-[50%] container mx-auto p-4">
      <h3 className="text-[#193789] font-semibold text-[18px]">
        Product variants
      </h3>
      {productOptions.map((product) => (
        <table className="w-full border-collapse border-2 border-[#193789]">
          {product.productOptions.map((productItem) => (
            <>
              <tr className="text-[#193789]">
                <td className="border-2 border-[#193789] p-2 text-left font-semibold">
                  {productItem.name.en}
                </td>
                {productItem.values.map((values) => (
                  <>
                    <td className="border-2 border-[#193789] p-2 text-center">
                      {values.name.en}
                    </td>
                  </>
                ))}
              </tr>
              <tbody>
                <tr className="text-[#193789]">
                  <th className="border-2 border-[#193789] p-2 text-left font-semibold">
                    Added Price
                  </th>
                  {productItem.values.map((values) => (
                    <td className="border-2 border-[#193789] p-2 text-center">
                      {values.price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </>
          ))}
        </table>
      ))}
    </div>
  );
}
