import * as React from "react";
import { SVGProps } from "react";

const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tornado_svg__fa-primary"
      d="M358.8 95.98H4.945c1.869 11.29 4.246 21.95 7.104 32h336.6c-.049-9.78 3.151-20.28 10.151-32zM257.1 351.1c11.15 9.299 20.34 19.99 27.99 32h148.6c4.68-10.91 7.824-21.53 10.19-32H257.1zm153-128H65.2c11.04 11.95 22.87 22.57 35.26 32h331.2c-5.96-10.6-13.06-21.2-21.56-32z"
    />
    <path
      d="M387.7 195.9c-22-25.31-38.93-44.9-39-67.93H12.05c11.48 40.4 30.36 71.34 53.15 96H411c-7.6-9.87-15.6-19.17-23.3-28.07zm20.1-153.81a23.951 23.951 0 0 0 6.688-26.5C410.1 6.219 401.1 0 391.1 0L24.16.031c-13 0-23.66 10.38-24 23.38-.705 26.94 1.188 50.8 4.789 72.57h353.9C367.9 80.74 383.4 63.37 407.8 42.09zm23.9 213.01H100.5c26.5 21.1 55.3 36.5 81.9 50.7 28.17 15.03 54.03 28.87 74.73 46.14h186.8C446.4 341.1 447.1 330.4 448 320c0-24.6-6.6-45.4-16.3-64.9zM303.6 485.3a24.01 24.01 0 0 0 13.44 24.28A23.42 23.42 0 0 0 327.4 512c6.219 0 12.34-2.406 16.94-7 43.71-43.59 73.32-83.65 89.35-121h-148.6c15.71 24.6 23.51 56 18.51 101.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTornado;