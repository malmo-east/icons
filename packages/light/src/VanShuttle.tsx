import * as React from "react";
import { SVGProps } from "react";

const SvgVanShuttle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M584 384h-8c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96h-8c-30.93 0-56-25.1-56-56V88c0-30.93 25.07-56 56-56h409.7c13.7 0 26.6 5.78 35.7 15.89L627.7 188.2c7.9 7.9 12.3 20.2 12.3 32.1V328c0 30.9-25.1 56-56 56zM32 192h128V64H56c-13.25 0-24 10.75-24 24v104zm0 32v104c0 13.3 10.75 24 24 24h13.46c13.18-37.3 48.74-64 90.54-64 41.8 0 77.4 26.7 90.5 64h139c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H584c13.3 0 24-10.7 24-24V224H32zm160-32h160V64H192v128zm192 0h204.1L477.6 69.3c-3-3.37-7.3-5.3-11.9-5.3H384v128zm96 128c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zM160 448c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

export default SvgVanShuttle;