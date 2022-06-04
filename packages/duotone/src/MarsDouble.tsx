import * as React from "react";
import { SVGProps } from "react";

const SvgMarsDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="mars-double_svg__fa-primary"
      d="m320.7 204.3 56.65-56.55 29.61 29.56C422.1 192.5 448 181.7 448 160.4V47.1c0-8.838-7.176-15.1-16.03-15.1H319.4c-21.42 0-32.15 25.85-17 40.97l29.61 29.56-56.61 56.57c-71.21-48.99-170.4-39.96-231.1 27.39-60.86 67.51-58.65 175 4.748 240.1 68.7 70.57 181.8 71.19 251.3 1.847C361.4 367.5 368 272.9 320.7 204.3zm-77.2 167.6c-37.5 37.43-98.51 37.43-136 0s-37.5-98.33 0-135.8c37.5-37.43 98.51-37.43 136 0 37.5 37.4 37.5 98.4 0 135.8z"
    />
    <path
      d="M176 240c-35.35 0-64 28.66-64 64s28.65 64 64 64 64-28.66 64-64-28.7-64-64-64zM623.1 32H510.5c-21.42 0-32.15 25.85-17 40.97l29.61 29.56L480 146.5v13.91c0 30.89-25.2 55.99-56.2 55.99-2.6 0-5.2-.4-7.8-.8v5.862c6.922 4.051 13.58 8.691 19.51 14.61 37.5 37.43 37.5 98.33 0 135.8-18.75 18.71-43.38 28.07-68 28.07-2.277 0-4.523-.488-6.795-.648-9.641 18.69-22.1 36.24-37.64 51.77-6.059 6.059-12.49 11.53-19.13 16.73C324.4 475.7 345.9 480 367.5 480c45.12 0 90.34-17.19 124.8-51.55 61.11-60.1 67.77-155.6 20.42-224.1l56.65-56.55 29.61 29.56c4.898 4.887 10.92 7.075 16.83 7.075C628.1 184.4 640 174.8 640 160.4V48c0-8.84-7.2-16-16.9-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMarsDouble;
