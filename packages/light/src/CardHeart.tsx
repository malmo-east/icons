import * as React from "react";
import { SVGProps } from "react";

const SvgCardHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M90.61 261.5c-26.21-26.6-24.81-70.6 4.69-95.4 22-18.7 54.2-18.1 77.6-2.2 3.5 2.3 6.9 4.2 9.9 8.2l9.4 9.6 8.9-9.6c2.6-2.6 5.3-5 8.2-7.1 23.5-16.9 56.5-18.1 79.8 1.1 29.1 24.8 30.5 68.8 4.2 95.4l-91.2 91.7c-5.2 6-15 6-20.7 0l-90.79-91.7zm177.99-70.9c-12.1-9.7-31.5-8.9-44.5 3.7l-31.3 33.9-32.7-33.7c-13.3-13.1-33.2-13.3-44-4.1l-.2.2c-15 12.6-15.7 35-2.5 48.4l78.8 79.6 78.3-79.6c13.3-13.4 12.6-35.7-1.9-48.4zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm32 0v384c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

export default SvgCardHeart;
