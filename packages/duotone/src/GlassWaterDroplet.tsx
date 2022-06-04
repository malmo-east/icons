import * as React from "react";
import { SVGProps } from "react";

const SvgGlassWaterDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="glass-water-droplet_svg__fa-primary"
      d="M127.1 196c0-24.9 34.6-70.1 53.1-93.5 6.1-7.73 17.5-7.73 23.6 0 18.5 23.4 52.2 68.6 52.2 93.5 0 33.1-28.7 60-64.9 60-34.4 0-64-26.9-64-60zM288 304l12.1-6.5-9.9 150.5H93.79L83.05 297.5 95.1 304c21 10.1 44.8 10.1 64 0 21-10.1 44.8-10.1 64.9 0 20.1 10.1 43.9 10.1 64 0z"
    />
    <path
      d="M383.9 33.1 351.1 482c-.3 16.9-14.3 30-32 30H64.03c-16.87 0-30.86-13.1-31.99-30L.052 34c-.5-8.87 2.623-17.5 8.621-23.87C14.8 3.625 23.19 0 32.07 0H351.9c8.9 0 17.3 3.625 23.4 10.13 6 6.37 9.1 14.99 8.6 22.97zM317.6 64H66.35l27.43 384H290.2l27.4-384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGlassWaterDroplet;
