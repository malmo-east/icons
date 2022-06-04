import * as React from "react";
import { SVGProps } from "react";

const SvgSnake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="snake_svg__fa-primary"
      d="m403.6 25.79 79.8 39.9c17.5 8.77 28.6 26.7 28.6 45.41 0 20.5-11.1 38.4-28.6 47.2l-79.8 39.9c-30.8 15.4-68 9.4-92.4-15L288 159.1H176c-26.5 0-48 22.4-48 48 0 27.4 21.5 48 48 48h144c70.7 0 128 58.2 128 128.9s-57.3 128-128 128H111.6c-10.3 0-20.59-1.7-30.38-4.9l-66.04-22C6.114 482 0 473.6 0 464c0-9.6 6.114-18.9 15.18-21.1L64 426.7V464c0 8.8 7.16 16 16 16s16-7.2 16-16v-46.7c5.1-.9 10.4-1.3 15.6-1.3H160v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c2.9 0 5.6-.4 8.3-1.1l28.4 28.4c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-28.4-28.4c.7-2.7 1.1-5.4 1.1-8.3 0-2.9-.4-5.6-1.1-8.3l28.4-28.4c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0l-28.4 28.4c-2.7-.7-5.4-1.1-8.3-1.1h-32v-48c0-8.8-7.2-16-16-16s-16.9 7.2-16.9 16v48h-64v-48c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v47.1c-26.9-3-52.3-14-72.98-30.6l21.18-21.2c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.37-6.3-22.61 0l-21.2 21.2c-16.57-20.7-27.54-46.1-30.61-73.9H79.1c9.74 0 16-7.2 16-16s-6.26-16-16-16H32.88c3.07-27.8 14.04-53.2 30.61-73.9l21.2 21.2c6.24 6.3 16.41 6.3 22.61 0 6.3-6.2 6.3-16.4 0-22.6L86.12 95.49c20.68-16.57 46.08-27.54 72.98-30.61V112c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16V63.1h64V112c0 8.8 8.1 16 16.9 16 8.8 0 16-7.2 16-16V63.1l23.2-22.33c24.4-24.35 61.6-30.38 92.4-14.98zM368 96c8.8 0 16-7.16 16-16s-7.2-16-16-16-16 7.16-16 16 7.2 16 16 16zm0 32c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"
    />
    <path
      d="M192 64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64.88c5.3-.58 10.6-.88 16-.88h16zm96 0v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h32zM81.22 420.9c4.83-1.6 9.77-2.8 14.78-3.6V464c0 8.8-7.16 16-16 16s-16-7.2-16-16v-37.3l17.22-5.8zM192 416v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h32zm96 0v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h32zm62.9-23.7 28.4 28.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-28.4-28.4c11-3.8 18.8-11.6 22.6-22.6zm-22.6-39.2 28.4-28.4c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-28.4 28.4c-3.8-11-11.6-19.7-22.6-22.6zM256 352v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h-32zm-80 0c-5.4 0-10.7-.3-16-.9V304c0-8.8 7.2-16 16-16s16 7.2 16 16v48h-16zM63.49 297.9l21.2-21.2c6.24-6.3 16.41-6.3 22.61 0 6.3 6.2 6.3 16.4 0 22.6l-21.18 21.2c-8.36-6.7-15.95-14.3-22.63-22.6zM32 208c0-5.4.3-10.7.88-16H80c8.84 0 16 7.2 16 16s-7.16 16-16 16H32.88c-.58-5.3-.88-10.6-.88-16zm75.3-91.3c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.37 6.3-22.61 0l-21.2-21.2c6.68-8.3 14.27-15.9 22.63-22.61l21.18 21.21z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSnake;