import * as React from "react";
import { SVGProps } from "react";

const SvgCardHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M90.61 261.5c-26.21-26.6-24.81-70.6 4.69-95.4 24.6-21 62.1-17.6 84.8 4.2 1.5.5 2.1 1.1 2.7 1.8l9.4 9.6 8.9-9.6 2.1-2.1c23.6-21.6 60.5-24.8 85.9-3.9 29.1 24.8 30.5 68.8 4.2 95.4l-91.2 91.7c-5.2 6-15 6-20.7 0l-90.79-91.7zm188.19-83.1c-19.1-15.7-48-13.2-66.2 4.8l-20.1 21.7-21-21.6c-18.4-18.3-47.8-20.4-65.8-5h-.1c-22.27 18.7-23.32 51.9-3.6 72l90.2 91.1 89.7-91.1c19.8-20 18.7-53.2-3.1-71.9zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm16 0v384c0 26.5 21.49 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgCardHeart;
