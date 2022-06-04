import * as React from "react";
import { SVGProps } from "react";

const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 400c0 8.836-7.164 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c8.8 0 16 7.2 16 16zm-112-16h-48c-8.836 0-16 7.162-16 16 0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-68-124c0-37.5 30.5-68 68-68s68 30.5 68 68c0 37.49-30.5 68-68 68s-68-30.5-68-68zm48 0c0 11.04 8.955 20 20 20 11.05 0 20-8.955 20-20 0-11.9-9-20-20-20-11.9 0-20 8.1-20 20zm248 0c0 37.49-30.58 67.1-68.07 67.1-.025 0 .025 0 0 0s.025 0 0 0c-37.5 0-68.07-30.5-68.07-67.1 0-37.5 30.58-67.1 68.07-67.1.025 0-.025 0 0 0s-.025 0 0 0C437.4 192 468 222.5 468 260zm-48.1 0c0-11.02-8.916-19.94-19.93-19.99C388.9 240.1 380 248.1 380 260c0 11.02 8.916 19.94 19.93 19.99C410.9 279.9 419.9 271 419.9 260zM448 384h-48c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h48c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm96-208v256c0 44.18-35.82 80-80 80H176c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80h120V24c0-13.25 10.8-24 24-24s24 10.75 24 24v72h120c44.2 0 80 35.8 80 80zm-48 0c0-17.64-14.36-32-32-32H176c-17.64 0-32 14.36-32 32v256c0 17.64 14.36 32 32 32h288c17.64 0 32-14.36 32-32V176zm96.1 16H576v192h16.08c17.72 0 31.92-14.3 31.92-32V224c0-17.7-14.3-32-31.9-32zM16 224v128c0 17.67 14.26 32 31.94 32H64V192H48.03C30.36 192 16 206.3 16 224z" />
  </svg>
);

export default SvgRobot;
