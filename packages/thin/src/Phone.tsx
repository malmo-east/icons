import * as React from "react";
import { SVGProps } from "react";

const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m493.1 351.2-108.5-46.5c-12.78-5.531-27.78-1.806-36.47 8.975l-44.08 53.8c-69.25-34-125.5-90.3-159.5-159.5l53.83-44.06C209.1 155.1 212.8 140.2 207.3 127.5L160.8 18.92C154.706 5.01 139.67-2.61 124.98.8L24.22 24.05C9.969 27.3 0 39.85 0 54.5 0 306.8 205.2 512 457.5 512c14.67 0 27.19-9.968 30.46-24.22l23.25-100.8c3.39-14.58-5.11-29.78-18.11-35.78zm2.5 32.2-23.25 100.8c-1.55 6.9-7.75 11.8-14.85 11.8C214 496 16 297.9 16 54.5c0-7.156 4.859-13.25 11.81-14.88l100.8-23.25c7.203-1.656 14.61 2.125 17.58 8.938l46.52 108.5c2.66 6.244.787 13.5-4.406 17.75l-63.53 52c62.32 133.5 168.7 176.7 183.8 183.8l52.02-63.53c4.219-5.25 11.52-7.062 17.73-4.375l108.5 46.5C493.5 368.9 497.3 376.3 495.6 383.4z" />
  </svg>
);

export default SvgPhone;
