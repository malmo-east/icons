import * as React from "react";
import { SVGProps } from "react";

const SvgGlassWater = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="glass-water_svg__fa-primary"
      d="M72.96 156.5 96 167.1c20.1 11 43.9 11 64 0 20.1-9.2 43.9-9.2 64 0 20.1 11 43.9 11 64 0l23-10.6L290.2 448H93.78L72.96 156.5z"
    />
    <path
      d="M383.9 33.1 351.1 482c-.3 16.9-14.3 30-32 30H64.03c-16.87 0-30.86-13.1-31.99-30L.052 34c-.5-8.87 2.623-17.5 8.621-23.87C14.8 3.625 23.19 0 32.07 0H351.9c8.9 0 17.3 3.625 23.4 10.13 6 6.37 9.1 14.99 8.6 22.97zM317.6 64H66.35l27.43 384H290.2l27.4-384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGlassWater;
