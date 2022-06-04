import * as React from "react";
import { SVGProps } from "react";

const SvgPersonSnowboarding = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="person-snowboarding_svg__fa-primary"
      d="M511.1 224c0-9.738-4.417-19.37-12.8-25.65l-111.5-83.48a160.186 160.186 0 0 0-45.42-23.79l-63.66-21.23-26.12-52.12c-4.8-10.492-15.8-16.528-27.1-16.528-24.82 0-32.04 22.62-32.04 32.03 0 4.404.915 8.88 2.849 13.16l29.12 58.12a47.872 47.872 0 0 0 27.67 23.98l16.45 5.522L227.3 154.6c-21.7 10.8-35.4 33-35.4 57.2v53.1l-74.1 24.7a31.949 31.949 0 0 0-21.85 30.3c0 14.07 8.819 21.76 10.33 23.09l23.96 8.68c2.645-.08 5.26-.523 7.793-1.292l85-28.38c19.56-6.511 32.77-24.87 32.77-45.48v-20.53l60.51 45.27-19.66 92a30.947 30.947 0 0 0-.592 5.911 31.29 31.29 0 0 0 3.333 14.01l42.27 15.31a31.676 31.676 0 0 0 17.78-21.89l21.88-101.1a48.35 48.35 0 0 0 1.05-10c0-14.91-6.957-29.19-19.17-38.4l-52.01-39 66.01-30.5 83.52 62.88c5.763 4.321 12.52 6.393 19.22 6.393C497.5 256 511.1 241.9 511.1 224zM431.9 95.99c26.52 0 48-21.49 48-47.1S458.5 0 431.9 0s-48 21.49-48 47.1 21.5 48.89 48 48.89z"
    />
    <path
      d="M496 481.1c0-18.62-17.14-23.96-24.06-23.96-3.388 0-6.715.717-9.998 2.248-5.172 2.437-10.85 3.662-16.49 3.662-4.463 0-8.887-.763-13.13-2.324L67.6 328.9C41.34 319.4 48.8 295 23.97 295 5.13 295 0 312.37 0 319.09c0 8.423 13.33 41.29 51.13 54.88l364.1 132.8c2.87 1.03 15.17 5.23 30.47 5.23 9 0 50.3-2.6 50.3-30.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonSnowboarding;