import * as React from "react";
import { SVGProps } from "react";

const SvgKitMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M200 296h48v48c0 8.828 7.172 16 16 16h48c8.828 0 16-7.172 16-16v-48h48c8.828 0 16-7.172 16-16v-48c0-8.828-7.172-16-16-16h-48v-48c0-8.828-7.172-16-16-16h-48c-8.828 0-16 7.172-16 16v48h-48c-8.828 0-16 7.172-16 16v48c0 8.8 7.2 16 16 16zm0-64h64v-64h48v64h64v48h-64v64h-48v-64h-64v-48zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h448c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zM96 464H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h32v416zm368 0H112V48h352v416zm96-48c0 26.47-21.53 48-48 48h-32V48h32c26.47 0 48 21.53 48 48v320z" />
  </svg>
);

export default SvgKitMedical;
