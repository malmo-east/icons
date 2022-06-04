import * as React from "react";
import { SVGProps } from "react";

const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="coin_svg__fa-primary"
      d="M464 330.1c18.3-10.7 34.8-24.3 48-40v29c0 28.7-17.8 54.5-48 75.5v-64.5zm-32 18.2v63.8c-27.1 13.7-59.8 23.6-96 29.5v-64.3c35.1-6 67.6-15.9 96-29zm-224 33.3c15.7 1.6 31.7 1.5 48 1.5s32.3.1 48-1.5v64.2c-15.5 1.4-31.6 1.3-48 1.3s-32.5.1-48-1.3v-64.2zm-32-4.3v64.3c-36.2-5.9-68.9-15.8-96-29.5v-63.8c28.4 13.1 60.9 23 96 29zM48 394.6c-30.21-21-48-46.8-48-75.5v-29c13.21 15.7 29.72 29.3 48 40v64.5zm38.59-242.8c12.01-11.3 27.71-20.1 43.51-26.8 34.5-13.4 78.7-21 125.9-21s91.4 7.6 125 21c16.7 6.7 32.4 15.5 44.4 26.8 12.1 11.5 22.6 27.7 22.6 48.2 0 20.5-10.5 36.7-22.6 48.2-12 11.3-27.7 20.1-44.4 25.9-33.6 14.3-77.8 21.9-125 21.9s-91.4-7.6-125.9-21.9c-15.8-5.8-31.5-14.6-43.51-25.9C74.5 236.7 64 220.5 64 200c0-20.5 10.5-36.7 22.59-48.2zM416 200c0-35.3-71.6-64-160-64S96 164.7 96 200s71.6 64 160 64 160-28.7 160-64z"
    />
    <path
      d="M256 264c-88.4 0-160-28.7-160-64s71.6-64 160-64 160 28.7 160 64-71.6 64-160 64zm0-200c141.4 0 256 64.5 256 144S397.4 352 256 352 0 287.5 0 208 114.6 64 256 64zM64 200c0 20.5 10.5 36.7 22.59 48.2 12.01 11.3 27.71 20.1 43.51 25.9C164.6 288.4 208.8 296 256 296s91.4-7.6 125-21.9c16.7-5.8 32.4-14.6 44.4-25.9 12.1-11.5 22.6-27.7 22.6-48.2 0-20.5-10.5-36.7-22.6-48.2-12-11.3-27.7-20.1-44.4-26.8-33.6-13.4-77.8-21-125.9-21-46.3 0-90.5 7.6-125 21-15.8 6.7-31.5 15.5-43.51 26.8C74.5 163.3 63.1 179.5 63.1 200h.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCoin;
