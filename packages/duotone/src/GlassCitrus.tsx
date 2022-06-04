import * as React from "react";
import { SVGProps } from "react";

const SvgGlassCitrus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="glass-citrus_svg__fa-primary"
      d="M368 0c-62.62 0-115.4 40.25-135.1 96h52.5c16.62-28.5 47.25-48 82.62-48 52.1 0 95.99 43 95.99 96 0 50.13-38.62 90.88-87.62 95.13l-4.875 48.5C449.4 285.8 512 222.4 512 144 512 64.5 447.5 0 368 0zM92.95 448h166.1l19.2-192H73.75l19.2 192z"
    />
    <path
      d="M343.7 138.5c-6.125-6.625-14.75-10.5-23.75-10.5H32.02c-8.998 0-17.62 3.875-23.75 10.5-6 6.75-8.998 15.62-8.123 24.62l31.99 319.1C33.77 499.5 47.52 512 64.02 512h223.1c16.5 0 30.25-12.5 31.87-28.87l32-319.1c1.71-9.93-1.29-18.73-7.29-25.53zM259 448H92.95L67.36 192h217.3L259 448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGlassCitrus;
