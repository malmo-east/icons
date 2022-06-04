import * as React from "react";
import { SVGProps } from "react";

const SvgBasketShopping = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="basket-shopping_svg__fa-primary"
      d="M149.9 265.8c-5.4 12.1-19.6 17.5-31.7 12.1-12.1-5.4-17.5-19.6-12.1-31.7l104-232.02c5.4-12.093 19.6-17.503 31.7-12.081 12.1 5.422 17.5 19.621 12.1 31.721l-104 231.98zM322.1 33.82c-5.4-12.1 0-26.299 12.1-31.721 12.1-5.422 26.3-.012 31.7 12.081l104 232.02c5.4 12.1 0 26.3-12.1 31.7-12.1 5.4-26.3 0-31.7-12.1l-104-231.98z"
    />
    <path
      d="m393 192 33.1 73.8c5.4 12.1 19.6 17.5 31.7 12.1 12.1-5.4 17.5-19.6 12.1-31.7L445.6 192H544c17.7 0 32 14.3 32 32s-14.3 32-32 32l-51.9 207.5c-8 28.5-32.7 48.5-62.1 48.5H145.1c-28.5 0-54.1-20-61.22-48.5L32 256c-17.67 0-32-14.3-32-32s14.33-32 32-32h98.4l-24.3 54.2c-5.4 12.1 0 26.3 12.1 31.7 12.1 5.4 26.3 0 31.7-12.1l32.2-73.8H393zM192 319.1c0-8-7.2-16-16-16s-16 8-16 16v96c0 9.7 7.2 16 16 16s16-6.3 16-16v-96zm80 0v96c0 9.7 7.2 16 16 16s16-6.3 16-16v-96c0-8-7.2-16-16-16s-16 8-16 16zm144 0c0-8-7.2-16-16-16s-16 8-16 16v96c0 9.7 7.2 16 16 16s16-6.3 16-16v-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBasketShopping;