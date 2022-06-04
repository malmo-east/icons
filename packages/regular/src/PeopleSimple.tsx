import * as React from "react";
import { SVGProps } from "react";

const SvgPeopleSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 128c35.38 0 64-28.62 64-64S419.38 0 384 0s-64 28.62-64 64 28.6 64 64 64zm-256 0c35.38 0 64-28.62 64-64S163.4 0 128 0 64 28.62 64 64s28.63 64 64 64zm377.5 215.2-39.08-136.8C458.6 178.9 433.5 160 404.9 160h-41.85c-28.58 0-53.69 18.94-61.54 46.42l-39.08 136.8C256.6 363.7 271.1 384 293.2 384H320v104c0 13.25 10.75 24 24 24s24-10.75 24-24V384h32v104c0 13.25 10.75 24 24 24s24-10.7 24-24V384h26.78c21.22 0 36.62-20.3 30.72-40.8zM314.4 336l33.25-116.4c2.05-6.9 8.25-11.6 15.45-11.6h41.85a15.99 15.99 0 0 1 15.38 11.6L453.6 336H314.4zM160 160H96c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v136c0 13.3 10.75 24 24 24s24-10.75 24-24V352h32v136c0 13.3 10.8 24 24 24s24-10.7 24-24V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm16 144H80v-80c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v80z" />
  </svg>
);

export default SvgPeopleSimple;
