import * as React from "react";
import { SVGProps } from "react";

const SvgSmoke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 206a8.068 8.068 0 0 0 4.844-1.625c3.5-2.656 4.188-7.688 1.531-11.22C23.75 173.9 16 151 16 127.1 16 65.81 65.81 16 127.1 16c39.19 0 74.75 20.38 95.09 54.47 1.21 2.03 3.21 3.41 5.51 3.81s4.719-.25 6.5-1.812C254.8 55 279.5 45.75 305.7 45.75c37.19 0 71.81 18.62 92.63 49.81 2.406 3.688 7.375 4.625 11.09 2.219 3.688-2.438 4.656-7.406 2.219-11.09-23.78-35.66-63.38-56.94-105.9-56.94-27.03 0-52.66 8.562-74.69 24.88C207.1 20.25 168.9 0 127.1 0 57 0 0 57 0 127.1c0 27.47 8.875 53.69 25.62 75.81A8.169 8.169 0 0 0 32 206zm208.7-19.3c-1.844 4-.063 8.75 3.938 10.62 4.031 1.75 8.75.094 10.62-3.938 17.09-37.16 54.38-61.16 94.97-61.16 24.66 0 47.97 8.688 67.34 25.16l7.219 6.125 4.844-8.125C448.8 123.2 482.3 104 519.3 104 577 104 624 150.1 624 208.7c0 19.25-5.312 37.63-15.75 54.59-2.312 3.75-1.156 8.688 2.625 11a7.892 7.892 0 0 0 4.188 1.188c2.688 0 5.312-1.344 6.812-3.812C633.7 252.4 640 230.6 640 208.7 640 142.1 585.9 88 519.3 88c-39.66 0-75.84 19.09-98.47 51.53C400 124.2 375.8 116.2 350.3 116.2c-46.9 0-89.9 27.6-109.6 70.5zM522.8 272c-15.34 0-30.5 3.25-45.19 9.688C450.8 236 403 208 351.2 208c-38.03 0-73.72 14.62-101.4 41.34C222.2 222.6 186.4 208 148.4 208 66.56 208 0 276.2 0 360s66.56 152 148.4 152h374.4c64.6 0 117.2-53.8 117.2-120s-52.6-120-117.2-120zm0 224H148.4C75.41 496 16 435 16 360s59.41-136 132.4-136c36.28 0 70.22 15 95.56 42.19l5.84 6.31 5.844-6.312C281 239 314.9 224 351.2 224c48.34 0 92.81 27.53 116 71.84l3.688 7.031 7.062-3.625C492.5 291.8 507.6 288 522.8 288c55.8 0 101.2 46.7 101.2 104s-45.4 104-101.2 104z" />
  </svg>
);

export default SvgSmoke;