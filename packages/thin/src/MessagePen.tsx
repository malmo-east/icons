import * as React from "react";
import { SVGProps } from "react";

const SvgMessagePen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M343.3 109.9c-6.248-6.248-14.44-9.372-22.63-9.372s-16.38 3.123-22.63 9.37l-140.5 140.5-1.84 2.702-11.52 57.65c-.98 5.65 2.72 8.35 6.82 8.35.445 0 .89-.018 1.338-.108l57.62-11.55 3.581-1.916 140.5-140.5c12.5-12.5 12.5-32.75.004-45.25L343.3 109.9zM204.2 293.2l-41.7 8.3 8.3-41.7L273.6 157l33.38 33.38L204.2 293.2zm138.6-138.6L318.39 179l-33.38-33.38 24.41-24.41c3.021-3.021 7.039-4.683 11.31-4.683s8.293 1.664 11.31 4.685l10.75 10.75a15.899 15.899 0 0 1 4.686 11.31c.024 4.328-1.676 8.328-4.676 11.328zM447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 10.6 6.8 15.6 13.1 15.6 2.369 0 4.786-.746 6.948-2.324l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H297.8l-122.7 92.08V398.2h-112c-26.47 0-48-21.53-48-47.1V64c0-26.46 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1v287.1z" />
  </svg>
);

export default SvgMessagePen;