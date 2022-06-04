import * as React from "react";
import { SVGProps } from "react";

const SvgSnake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 88c0 8.84-7.2 16-16 16s-16-7.16-16-16 7.2-16 16-16 16 7.16 16 16zm-32 48c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM175.1 512h.8-57.2c-14.9 0-29.64-3.5-42.97-10.1l-61.42-30.7A25.979 25.979 0 0 1 0 448c0-9.8 5.54-18.8 14.31-23.2l61.42-30.7c6.51-3.2 13.35-5.7 20.37-7.4 7.4-1.8 14.9-2.7 22.6-2.7H320c8.8 0 16-7.2 16-16s-7.2-16-16-16H168c-17.3 0-33.9-2.9-49.3-8.2-5.8-1.9-11.3-4.2-16.7-7.7-50.89-23.7-86.9-75.8-86.9-136.1 0-83.9 68.95-152 152-152h115.8c20.7-25.08 51.7-40 84.8-40 16 0 31.8 3.51 46.4 10.29l54.4 25.41C495 56.08 512 82.72 512 112c0 29.3-17 55.9-43.5 68.3l-54.4 25.4c-14.6 6.8-30.4 10.3-46.4 10.3-16.8 0-33.1-3.8-47.7-10.9-14.2-6.8-26.9-16.7-37.1-29.1H167.1c-12.4 0-24 10.7-24 24s11.6 24 24 24H320c16.7 0 32.7 2.8 47.7 8.1 16.4 5.8 31.6 14.4 44.7 25.4C443.9 283.9 464 323.6 464 368c0 79.5-64.5 144-144 144H175.1zM305.6 96H167.1c-56.5 0-104 46.6-104 104s47.5 104 104 104H320c35.3 0 64 28.7 64 64s-28.7 64-64 64H118.7c-7.5 0-14.8 1.7-21.5 5.1L75.33 448l21.87 10.9c6.7 3.4 14 5.1 21.5 5.1h57.2-.8H320c53 0 96-43 96-96 0-53.9-43-96-96-96H167.1c-38.9 0-72-32.2-72-72s33.1-72 72-72h138.5l14.4 17.5c11.6 14.1 29 22.5 47.7 22.5 9 0 17.9-2 26.1-5.8l54.4-25.4c9.6-4.5 15.8-14.2 15.8-24.8 0-10.6-6.2-20.3-15.8-24.8l-54.4-25.41A61.93 61.93 0 0 0 367.7 56 61.7 61.7 0 0 0 320 78.49L305.6 96z" />
  </svg>
);

export default SvgSnake;