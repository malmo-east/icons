import * as React from "react";
import { SVGProps } from "react";

const SvgHandHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96c-17.67 0-32 14.33-32 32v112c0 8.8-7.2 16-16 16s-15.93-7.164-15.93-16L384 64c0-17.67-14.33-32-32-32s-32 14.33-32 32l.05 176c0 8.836-7.22 16-16.06 16s-15.95-7.164-15.95-16L288 32c0-17.67-14.33-32-32-32s-32 14.33-32 32l.073 208c.027 8.8-7.273 16-16.073 16s-15.9-7.2-15.9-16L192 64c0-17.67-14.33-32-32-32s-32 14.33-32 32v279.4l-59.72-59.7C60.47 275.9 50.23 272 40 272c-21.32 0-40 17.2-40 40 0 10.23 3.906 20.47 11.72 28.28l113.1 113.1C162.6 491.2 212.9 512 266.3 512H304c97.05 0 176-78.95 176-176V128c0-17.7-14.3-32-32-32zm-64.9 263.8c0 10.27-4.155 20.54-12.47 28.38l-60.47 57.08c-1.953 1.846-4.517 2.769-7.08 2.769s-5.127-.923-7.08-2.769l-60.47-57.08c-8.291-7.836-12.44-18.1-12.44-28.37 0-12.94 10.61-39.78 41.74-39.78 11.65 0 23.39 4.401 32.1 12.64l6.158 5.799 6.16-5.799c8.729-8.238 20.47-12.64 32.11-12.64C373.6 319.1 383.1 346.8 383.1 359.8z" />
  </svg>
);

export default SvgHandHeart;