import * as React from "react";
import { SVGProps } from "react";

const SvgHands = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hands_svg__fa-primary"
      d="m330.8 242.3-107.7-33.2c-12.8-3.9-26.1 3.2-30 15.8-3.9 12.7 3.2 26.1 15.8 30L256 272H56.9c-11.61 0-22.25 7.844-24.44 19.24C29.51 306.6 41.19 320 56 320h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H24.9c-11.61 0-22.25 7.844-24.44 19.24C-2.49 370.6 9.193 384 24 384h160c4.4 0 8 3.6 8 8s-3.6 8-8 8H56.9c-11.61 0-22.25 7.844-24.44 19.24C29.51 434.6 41.19 448 56 448h128c4.4 0 8 3.6 8 8s-3.6 8-8 8H88.9c-11.61 0-22.25 7.844-24.44 19.24C61.51 498.6 73.19 512 88 512h208c66.28 0 120-53.73 120-120v-32.03c0-53.37-34.9-100.57-85.2-117.67z"
    />
    <path
      d="M202 99.74c-15.51 1.807-24.79 16.99-20.33 31.11l15.36 48.61c5.986-2.148 12.32-3.482 18.98-3.482 5.508 0 10.99.81 16.5 2.471l16.11 4.975L227.7 117.2c-3.5-11-14.1-18.81-25.7-17.46zm285.1 44.76c-13.27.098-23.95 10.91-23.86 24.16l-2.082 50.04-59.98-189.8c-3.496-11.07-14.18-18.86-25.71-17.51-15.51 1.807-24.79 16.99-20.33 31.11l38.56 122.1a8 8 0 0 1-5.219 10.04 8.001 8.001 0 0 1-10.04-5.217l-47.93-151.7c-3.496-11.07-14.18-18.86-25.71-17.51-15.51 1.807-24.79 16.99-20.33 31.11l43.37 137.8a8.001 8.001 0 0 1-15.259 4.823l-33.46-106.4C275.6 56.39 264.9 48.6 253.4 49.94c-15.51 1.807-24.79 16.99-20.33 31.11l34.15 108.1 73.7 22.76C404.1 233.3 448 292.8 448 359.9v27.91c38.27-21.17 63.28-61.24 64-106.7V168.4c-.2-13.3-11.7-23.9-24.9-23.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHands;
