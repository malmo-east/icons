import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 160h-36l-6.188-16.44C306.3 134.2 297.4 128 287.4 128h-62.8c-10 0-19 6.188-22.5 15.56L196 160h-36c-17.7 0-32 14.3-32 32v128c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V192c0-17.7-14.3-32-32-32zm-96 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-304C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleCamera;