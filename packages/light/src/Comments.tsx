import * as React from "react";
import { SVGProps } from "react";

const SvgComments = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 41.48 17.07 79.54 45.44 109.6-15.17 32.34-38.65 58.07-38.95 58.38-6.514 6.836-8.309 16.91-4.568 25.67C5.754 378.4 14.26 384 23.66 384c54.19 0 97.76-20.73 125.9-39.17C168.1 349.4 187.7 352 208 352c114.9 0 208-78.8 208-176zM208 320c-16.96 0-34.04-2.098-50.75-6.232L143.7 310.4l-11.7 7.7c-20.43 13.38-51.58 28.99-89.85 32.97 9.377-12.11 22.3-30.63 32.24-51.82l9.242-19.71L68.72 263.7C44.7 238.2 32 207.9 32 176c0-79.4 78.1-144 176-144s176 64.6 176 144-79 144-176 144zm398.4 115.4c21.2-28.3 33.6-62.5 33.6-99.4 0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 5.43-.467 10.76-.941 16.09.341.01.641-.09.941-.09 88.22 0 160 64.6 160 144 0 28.69-9.424 56.45-27.25 80.26l-13.08 17.47 11.49 18.55c6.568 10.61 13.18 19.74 18.61 26.74-18.26-1.91-36.45-6.625-54.3-14.09l-12.69-5.305-12.58 5.557C495.9 475 472.3 480 448 480c-75.05 0-137.7-46.91-154.9-109.7-10.1 3.336-20.5 6.132-31.2 8.271C282.7 455.1 357.1 512 448 512c29.82 0 57.94-6.414 83.12-17.54C555 504.5 583.7 512 616.3 512c9.398 0 17.91-5.57 21.73-14.32 3.74-8.758 1.945-18.84-4.568-25.67-.162-.21-13.862-15.21-27.062-36.61z" />
  </svg>
);

export default SvgComments;
