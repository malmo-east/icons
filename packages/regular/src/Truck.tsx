import * as React from "react";
import { SVGProps } from "react";

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 416c0 53-43 96-96 96-53.9 0-96-43-96-96-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h288c35.3 0 64 28.65 64 64v32h42.7c14.9 0 29.1 5.9 39.6 16.4l93.3 93.3c10.5 10.5 16.4 24.7 16.4 39.6V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40c0 53-43 96-96 96-53.9 0-96-43-96-96H256zm96-368H64c-8.84 0-16 7.16-16 16v288c0 8.8 7.16 16 16 16h12.84c16.6-28.7 47.66-48 83.16-48s66.6 19.3 83.2 48H352c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16zm112.4 98.3c-1.5-1.5-3.5-2.3-5.7-2.3H416v96h142c-.1-.1-.2-.3-.3-.4l-93.3-93.3zM160 368c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm320 96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

export default SvgTruck;
