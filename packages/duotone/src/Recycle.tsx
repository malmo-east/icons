import * as React from "react";
import { SVGProps } from "react";

const SvgRecycle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="recycle_svg__fa-primary"
      d="M159.2 151.6c-2-8.7-10.7-13.9-19.3-12l-91.42 21.1c-20.82 4.8-25.44 32.4-7.33 43.8l102.9 64.36c18.12 11.35 40.92-4.889 36.12-25.73L159.2 151.6zm242.9-55.71-102.9 64.29c-18.16 11.31-13.56 38.94 7.278 43.77l91.4 21.15c8.622 1.995 17.23-3.383 19.21-12.01l21.04-91.43C443.8 100.8 421.1 84.6 402.1 95.89zm-123 242.41-66.41 66.43c-6.124 6.127-6.12 16.37.004 22.63l66.42 66.34c15.12 15.1 40.95 4.395 40.95-16.98v-121.4C320 333.9 294.2 323.2 279.1 338.3z"
    />
    <path
      d="m378.6 111.1-41.2-65.96c-37.58-60.15-125.2-60.18-162.8-.062L167.2 56.9c-9.322 14.9-4.789 34.65 10.09 43.99 14.97 9.395 34.74 4.942 44.11-10.04l7.442-11.89c12.75-20.38 41.1-19.63 54.25 0l41.25 66.14 54.258-34zM128 384H96c-25.14 0-40.47-27.66-27.15-48.98l50.9-81.43-54.24-33.79-50.83 81.5c-39.86 63.94 6.117 146.8 81.47 146.8h31.88c17.68 0 31.98-14.38 31.98-32.05C160 398.3 145.7 384 128 384zm369.3-82.7-16.99-27.26c-9.336-14.99-29.06-19.56-44.04-10.21-14.94 9.319-19.52 29.15-10.18 44.08l16.99 27.15c13.35 21.33-1.982 49-27.14 49h-95.99v64.02h95.86c75.39.02 121.39-82.88 81.49-146.78z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRecycle;
