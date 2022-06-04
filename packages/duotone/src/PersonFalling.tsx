import * as React from "react";
import { SVGProps } from "react";

const SvgPersonFalling = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="person-falling_svg__fa-primary"
      d="M288 41.84c0 54.61-27.9 104.66-72.5 133.56l.2.4 56.8 79.3H344c15.1 0 29.3 8 38.4 20.1l43.2 57.6c10.6 14.1 7.7 33.3-6.4 44.8-14.1 10.6-34.2 7.7-44.8-6.4L336 319.1h-81.4l92.3 143.5c9.6 14.9 5.3 34.7-9.5 44.3-14.9 9.6-34.7 5.3-44.3-9.5L132.5 249.2c-2.9 9.2-4.5 18.9-4.5 29v72.9c0 18.6-14.3 32-32 32-17.67 0-32-13.4-32-32v-72.9c0-65.2 39.6-123.7 100.1-147.9 36.2-14.5 59.9-49.51 59.9-88.46V32c0-17.67 14.3-32 32-32s32 14.33 32 32v9.84z"
    />
    <path
      d="M128 80c0 26.5-21.5 48-48 48-26.51 0-48-21.5-48-48 0-26.51 21.49-48 48-48 26.5 0 48 21.49 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonFalling;
