import * as React from "react";
import { SVGProps } from "react";

const SvgConveyorBelt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M159.1 288h320c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32h-320c-16.7 0-32 14.4-32 32v224c0 17.6 15.3 32 32 32zm96-272h128v144l-64-32-64 32V16zm-112 16c0-8.822 7.178-16 16-16h80v144c0 5.545 2.871 10.7 7.588 13.61C250.2 175.2 253.1 176 255.1 176c2.445 0 4.896-.56 7.156-1.689L319.1 145.9l56.84 28.42c3.16 1.08 5.66 1.68 7.16 1.68 2.926 0 5.842-.8 8.412-2.389C397.1 170.7 399.1 165.5 399.1 160V16h80c8.822 0 16 7.178 16 16v224c0 8.822-7.178 16-16 16h-320c-8.822 0-16-7.178-16-16V32zm-32 336c-26.62 0-48 21.38-48 48s21.38 48 48 48 48-21.38 48-48-20.5-48-48-48zm0 80c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-13.5 32-32 32zm208-80c-26.62 0-48 21.38-48 48s21.38 48 48 48 48-21.38 48-48-20.5-48-48-48zm0 80c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-13.5 32-32 32zm208-80c-26.62 0-47.1 21.38-47.1 48s21.38 48 47.1 48c26.62 0 48-21.38 48-48s-20.5-48-48-48zm0 80c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-13.5 32-32 32zM544 320H96c-53.02 0-96 42.98-96 96s42.98 96 96 96h448c53.02 0 96-42.98 96-96s-43-96-96-96zm-.9 176h-448c-44.11 0-80-35.89-80-80s35.89-80 80-80h448c44.11 0 80 35.89 80 80s-35 80-80 80z" />
  </svg>
);

export default SvgConveyorBelt;
