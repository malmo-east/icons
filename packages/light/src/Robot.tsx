import * as React from "react";
import { SVGProps } from "react";

const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 96H336V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v80H192c-53.9 0-96 42.1-96 96v224c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96V192c0-53.9-43-96-96-96zm64 288h-16c-8.844 0-16 7.156-16 16s7.156 16 16 16h16c0 35.29-28.71 64-64 64H192c-35.29 0-64-28.71-64-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V192c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64v192zM36.72 228.6c3-3 6.94-4.6 11.12-4.6 8.82 0 16.13-7.1 16.16-16 .03-8.8-7.12-16-15.97-16-12.72 0-24.84 4.9-33.87 13.9C5.031 215 0 227.1 0 240v127.1C0 394.5 21.47 416 47.88 416c8.844 0 16.06-7.156 16.06-16s-7.156-16-16-16C39.19 384 32 376.8 32 367.1V240c0-4.3 1.69-8.4 4.72-11.4zM592.1 192c-8.844 0-16 7.156-16 16s7.2 16 16 16 15.9 7.2 15.9 16v127.1a16.04 16.04 0 0 1-4.719 11.41C600.3 382.4 596.3 384 592.1 384c-8.8 0-16.1 7.1-16.1 15.1-.9 9.7 7.1 16 15.9 16.9 12.72 0 24.88-4.938 33.91-13.94C634.1 392.1 640 380.9 640 367.1V240c0-26.5-21.5-48-47.9-48zM240 384h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 0h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.844 0 16-7.156 16-16s-7.2-16-16-16zm96 0h-32c-8.844 0-16 7.156-16 16s7.156 16 16 16h32c8.844 0 16-7.156 16-16s-7.2-16-16-16zM224 192c-35.3 0-64 28.7-64 64s28.72 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 96c-17.7 0-32-14.4-32-32s14.34-32 32-32 32 14.36 32 32-14.3 32-32 32zm192-96c-35.28 0-64 28.7-64 64s28.72 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 96c-17.66 0-32-14.36-32-32s14.34-32 32-32 32 14.36 32 32-14.3 32-32 32z" />
  </svg>
);

export default SvgRobot;
