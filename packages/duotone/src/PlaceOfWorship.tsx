import * as React from "react";
import { SVGProps } from "react";

const SvgPlaceOfWorship = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="place-of-worship_svg__fa-primary"
      d="M224 201.6v-92.3c0-8.5 3.4-16.67 9.4-22.67l75.3-75.31c6.2-6.253 16.4-6.253 22.6 0l75.3 75.31c6 6 9.4 14.17 9.4 22.67v92.3l40.7 24.4c14.5 8.7 23.3 24.3 23.3 41.2V512h-96v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-96V267.2c0-16.9 8.8-32.5 23.3-41.2l40.7-24.4z"
    />
    <path
      d="M160 512H48c-26.51 0-48-21.5-48-48v-89c0-18.8 11.08-36 28.3-43.7L160 272v240zm320-240 131.7 59.3C628.9 339 640 356.1 640 375v89c0 26.5-21.5 48-48 48H480V272z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlaceOfWorship;
