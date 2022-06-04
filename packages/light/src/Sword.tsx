import * as React from "react";
import { SVGProps } from "react";

const SvgSword = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.1.023c-1.102 0 8.81-1.744-95.99 16.01L198.6 217.4c-6.248 6.246-6.248 16.38 0 22.62 6.246 6.25 16.38 6.25 22.62 0l194.1-194.1 61.12-10.38-10.34 61.12L272 290.76c-6.246 6.246-6.246 16.38 0 22.62 6.248 6.25 16.38 6.25 22.62 0l201.4-201.4 15.87-93.75C513.2 8.529 505.6.023 495.1.023zM122.7 209.4c-9.6-5.7-16.9 0-19.2 2.3l-34.75 34.74c-5.5 5.375-6.249 13.87-1.999 20.25l45.87 68.75-39.87 39.87L55.1 366.9c-1.193-.64-9.32-4.18-15.1 2.5L4.13 405.39c-5.5 5.375-5.5 14.25 0 19.62L87 507.88c2.74 2.72 6.24 4.12 9.87 4.12 3.498 0 6.998-1.375 9.748-4.125l35.1-35.87c4.125-4.25 5.25-10.62 2.5-16l-8.375-16.75 39.87-39.88 68.74 45.91c6.559 4.172 14.78 3.25 20.25-2l34.75-34.79c5.262-5.258 5.822-13.14 2.225-19.27L122.7 209.4zm129.5 202c-67.98-45.37-51.59-34.46-79.74-53.12L97.84 432.9c12.06 24.2 9.46 19.1 12.86 25.7l-13.87 13.88L39.5 415.1l13.87-13.88c6.633 3.398 1.525.836 25.75 12.88l74.62-74.62c-18.66-28.16-7.758-11.77-53.12-79.74l14.12-14.25 151.7 151.7-14.24 14.21z" />
  </svg>
);

export default SvgSword;
