import * as React from "react";
import { SVGProps } from "react";

const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M144 240h-22.9C98.81 240 80 258.8 80 282v38h64v-80zM80 390c0 23.2 18.81 42 41.1 42H208v-80H80v38zm96-70h128v-38c0-23.2-18.8-42-42.9-42H176v80zm198.6-201.4L265.3 9.3C259.4 3.371 251.2 0 242.7 0H64C28.8 0 0 28.8 0 64v384c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V141.3c0-8.5-3.4-16.7-9.4-22.7zM336 448c0 8.75-7.25 16-16 16H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h172.1l99.9 99.9V448zm-96-16h21.1c24.1 0 42.9-18.8 42.9-42v-38h-64v80z" />
  </svg>
);

export default SvgSimCard;