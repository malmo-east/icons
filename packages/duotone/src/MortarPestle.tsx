import * as React from "react";
import { SVGProps } from "react";

const SvgMortarPestle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="mortar-pestle_svg__fa-primary"
      d="M496 191.1H16c-8.875 0-16 7.125-16 16v32c0 8.875 7.125 16 16 16l15.1.9c0 81 50.25 150.1 121.1 178.4-12.75 16.88-21.75 36.75-25 58.63-.4 9.87 7 18.97 17 18.97h223.5c10 0 17.51-9.125 16.13-19-3.25-21.88-12.25-41.75-25-58.63C429.8 406.1 479.1 337 479.1 256l16.9-.9c8.875 0 16-7.125 16-16v-32c0-8-7.1-16-16-16z"
    />
    <path
      d="M402.5 159.1H251.1L454.9 6.2c10.88-8.125 25.25-9.375 37.38-3.375 21.75 10.88 26.5 40 9.25 57.13L402.5 159.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMortarPestle;
