import * as React from "react";
import { SVGProps } from "react";

const SvgCartFlatbed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="cart-flatbed_svg__fa-primary"
      d="M448 32v128l-48-32-48 32V32h96zm192 383.1c0 17.6-14.4 32-32 31.1H96c-17.6 1.8-32-12.6-32-31.1V80c0-8.84-7.16-16-16-16H31.1C14.4 64 0 49.6 0 32S14.4 0 31.1 0H64c35.2 0 64 28.8 64 64v320h480c17.6 0 32 14.4 32 31.1z"
    />
    <path
      d="M576 32H448v128l-48-32-48 32V32H224c-17.6 0-32 14.4-32 32v224c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-31.1V64c0-17.6-14.4-32-32-32zM162.9 447.1c-1.7 5-2.9 11.3-2.9 16.9 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.625-1.292-11-2.917-16H162.9zm287.2 0c-1.75 5-2.928 10.38-2.928 16C448 490.5 469.5 512 496 512c26.5 0 48.01-21.5 48.01-47.1 0-5.625-1.282-11-2.907-16H450.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCartFlatbed;
