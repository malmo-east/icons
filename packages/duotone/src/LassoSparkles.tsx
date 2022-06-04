import * as React from "react";
import { SVGProps } from "react";

const SvgLassoSparkles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="lasso-sparkles_svg__fa-primary"
      d="M336 0c6.7 0 12.7 4.168 15 10.45l14.7 39.81 39.9 14.73C411.8 67.32 416 73.3 416 80c0 6.7-4.2 12.68-10.4 15.01l-39.9 14.69-14.7 39.9c-2.3 6.2-8.3 10.4-15 10.4-6.7 0-12.7-4.2-15.9-10.4l-13.8-39.9-39.9-14.69C260.2 92.68 256 86.7 256 80c0-6.7 4.2-12.68 10.4-15.01l39.9-14.73 13.8-39.81C323.3 4.168 329.3 0 336 0zm160 352c6.7 0 12.7 4.2 15 10.4l14.7 39.9 39.9 13.8c6.2 3.2 10.4 9.2 10.4 15.9 0 6.7-4.2 12.7-10.4 15l-39.9 14.7-14.7 39.9c-2.3 6.2-8.3 10.4-15 10.4-6.7 0-12.7-4.2-15.9-10.4l-13.8-39.9-39.9-14.7c-6.2-2.3-10.4-8.3-10.4-15 0-6.7 4.2-12.7 10.4-15.9l39.9-13.8 13.8-39.9c3.2-6.2 9.2-10.4 15.9-10.4z"
    />
    <path
      d="m281.4 25.36-26.1 9.62c-15.1 5.6-26.1 18.28-29.9 33.45C132.2 81.97 64 125 64 176c0 61.9 100.3 112 224 112s224-50.1 224-112c0-31.2-25.6-59.5-66.8-79.79C447 91.1 448 85.63 448 80c0-20.08-12.5-38.05-31.3-45.02l-26.1-9.62-5.6-15.12C496.4 34.58 576 99.61 576 176c0 97.2-128.9 176-288 176-13.2 0-26.3-.5-39.9-1.6 5.5 12.8 7.9 26.5 7.9 40.6 0 66.8-54.2 121-121 121H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h71c31.5 0 57-25.5 57-57 0-21.6-12.2-41.3-31.5-51l-46.8-23.4.2-.4C44.69 284.1 0 233.2 0 176 0 78.8 128.9 0 288 0c.9 0 1.8.003 2.7.008l-9.3 25.352z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLassoSparkles;