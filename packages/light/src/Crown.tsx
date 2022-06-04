import * as React from "react";
import { SVGProps } from "react";

const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 96c-17.67 0-32 14.33-32 32 0 7.559 3.008 14.21 7.391 19.69l-104.5 83.58c-5.955 4.764-12.99 7.019-19.94 7.019-11.61 0-22.98-6.296-28.68-17.7L302.2 92.33C312.6 87.07 320 76.51 320 64c0-17.67-14.33-32-32-32s-32 14.33-32 32c0 12.51 7.367 23.07 17.83 28.33L209.7 220.6c-5.7 10.5-17.1 17.7-28.7 17.7-6.945 0-13.98-2.255-19.94-7.019L56.61 147.7C60.99 142.2 64 135.6 64 128c0-17.67-14.33-32-32-32S0 110.3 0 128c0 17.67 14.33 32 32 32 1.99 0 3.721-.785 5.611-1.133l48.83 268.6C91.98 457.9 118.5 480 149.4 480h277.2c30.93 0 57.43-22.12 62.97-52.55l48.83-268.6c1.9.35 3.6 1.15 5.6 1.15 17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32zm-85.9 325.7c-2.8 15.2-16 26.3-31.5 26.3H149.4c-15.47 0-28.71-11.05-31.48-26.28L78.78 206.4l62.32 49.86c11.31 9.049 25.49 14.03 39.93 14.03 24.43 0 46.39-13.56 57.3-35.39L288 135.6l49.67 99.35c10.91 21.83 32.87 35.39 57.3 35.39 14.44 0 28.62-4.984 39.93-14.03l62.32-49.86L458.1 421.7z" />
  </svg>
);

export default SvgCrown;
