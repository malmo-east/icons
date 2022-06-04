import * as React from "react";
import { SVGProps } from "react";

const SvgRampLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M48 64v248.4l-48 88V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v336.4l-48-88V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16zm205 224c20.5 0 39.4 11.2 49.2 29.2l74 135.6c14.5 26.7-4.8 59.2-35.2 59.2H42.95c-30.36 0-49.652-32.5-35.113-59.2L81.83 317.2c9.82-18 28.67-30.1 48.27-30.1l122.9.9zM56.43 464H327.6L260 340.2c-1.4-2.6-4.1-4.2-7-4.2H130.1c-2 0-4.7 1.6-7 4.2L56.43 464z" />
  </svg>
);

export default SvgRampLoading;
