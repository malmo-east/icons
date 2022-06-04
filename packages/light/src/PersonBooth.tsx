import * as React from "react";
import { SVGProps } from "react";

const SvgPersonBooth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M240 336c-8.8 0-16 7.2-16 16v144c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-8.8-7.2-16-16-16zM64 128c35.35 0 64-28.65 64-64S99.35 0 64 0 .002 28.65.002 64 28.65 128 64 128zm0-96c17.64 0 32 14.36 32 32S81.64 96 64 96 32 81.64 32 64s14.36-32 32-32zM528 0H272c-26.5 0-48 21.53-48 48v144c0 8.844 7.156 16 16 16s16-7.2 16-16V48c0-8.83 7.2-16 16-16h64l.266 221.1-32 176c-1.594 8.688 4.172 17.02 12.88 18.59.954.21 1.954.31 2.854.31 7.594 0 14.34-5.406 15.73-13.14L368 256V32h32v400c0 8.844 7.156 16 16 16s16-7.156 16-16V32h32v400c0 8.844 7.156 16 16 16s16-7.156 16-16V32h32c8.8 0 16 7.17 16 16v448c0 8.844 7.156 16 16 16s16-7.156 16-16V48c0-26.47-21.5-48-48-48zM240 240h-61.9c-5.594 0-10.86-2.984-13.73-7.766L142.2 195.2C129.1 173.5 105.3 160 80 160H64C28.7 160 .025 188.8.025 224.1L0 496c0 8.8 7.156 16 16 16s15.94-7.156 15.94-16L32 224c0-17.64 14.36-32 32-32h16c14.14 0 27.47 7.531 34.75 19.67l22.2 37.05C145.6 263.1 161.4 272 178.1 272H240c8.8 0 16-7.2 16-16s-7.2-16-16-16zM121.7 343.9c-6.3-8.3-9.7-18.6-9.7-29V256c0-8.844-7.156-16-16-16s-16 7.2-16 16v58.94c0 17.27 5.734 34.38 16.14 48.19l22.17 29.39c6.29 8.28 9.69 18.58 9.69 28.88V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-74.56c0-17.27-5.734-34.38-16.14-48.19L121.7 343.9z" />
  </svg>
);

export default SvgPersonBooth;
