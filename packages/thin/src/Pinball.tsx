import * as React from "react";
import { SVGProps } from "react";

const SvgPinball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M145.4 211.6c-7.9-6.3-17.3-11.6-27.3-15-9.295-3.139-18.73-4.632-28.01-4.632-37.92 0-73.19 24.92-85.62 64.17-15.46 48.85 10.35 101.4 57.64 117.4l310.3 104.8a32.359 32.359 0 0 0 10.29 1.677c9.92 0 19.75-4.542 26.3-13.24 11.27-14.98 8.65-36.56-5.85-48.2L145.4 211.6zm250.8 245.5c-3.3 4.4-8.2 6.9-13.5 6.9-1.777 0-3.527-.285-5.168-.836l-310.3-104.8C28.22 345.2 6.914 301.5 19.74 261c10.03-31.7 38.31-53 70.36-53 7.738 0 15.44 1.275 22.89 3.791 7.902 2.67 15.66 6.936 22.4 12.3l257.8 206.9C400.9 437.3 402.3 449 396.2 457.1zM96.17 255.9c-17.64 0-31.89 14.23-31.89 31.89s14.25 31.89 31.89 31.89 31.89-14.23 31.89-31.89-14.26-31.89-31.89-31.89zm0 47.9c-8.828 0-16-7.188-16-16s7.172-16 16-16 16 7.188 16 16-7.17 16-16 16zM352 32c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-43-96-96-96zm0 176c-44.11 0-80-35.89-80-80s35.89-80 80-80 80 35.89 80 80c0 44.1-35.9 80-80 80z" />
  </svg>
);

export default SvgPinball;
