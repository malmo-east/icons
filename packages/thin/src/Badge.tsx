import * as React from "react";
import { SVGProps } from "react";

const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M169.9 48.16C187.7 19.28 219.6 0 256 0c36.4 0 68.3 19.28 86.1 48.16 33-7.86 69.2 1.06 94.9 26.82 25.8 25.72 34.7 61.92 26.8 94.92 28.9 17.8 48.2 49.7 48.2 86.1 0 36.4-19.3 68.3-48.2 86.1 7.9 33-1 69.2-26.8 94.9-25.7 25.8-61.9 34.7-94.9 26.8-17.8 28.9-49.7 48.2-86.1 48.2-36.4 0-68.3-19.3-86.1-48.2-33 7.9-69.2-1-94.92-26.8-25.75-25.7-34.68-61.9-26.82-94.9C19.28 324.3 0 292.4 0 256c0-36.4 19.28-68.3 48.16-86.1-7.86-33 1.07-69.2 26.82-94.92C100.7 49.23 136.9 40.3 169.9 48.16zM256 16c-32.6 0-60.9 18.32-75.2 45.25l-3 5.84-6.4-1.94c-29.1-8.95-62.1-1.89-85.11 21.14C63.26 109.3 56.2 142.3 65.15 171.4l1.94 6.4-5.84 3C34.32 195.1 16 223.4 16 255.1c0 33.5 18.32 61.8 45.25 76.1l5.84 3-1.94 6.4c-8.95 29.1-1.89 62.1 21.14 85.1 23.01 23 56.01 30.1 85.11 21.2l6.4-2 3 5.9c14.3 26.9 42.6 45.2 75.2 45.2s60.9-18.3 75.2-45.2l3-5.9 6.4 2c29.1 8.9 62.1 1.8 85.1-21.2 23-23 30.1-56 21.2-85.1l-2-6.4 5.9-3c26.9-14.3 45.2-42.6 45.2-76.1 0-31.7-18.3-60-45.2-74.3l-5.9-3 2-6.4c8.9-29.1 1.8-62.1-21.2-85.11-23-23.03-56-30.09-85.1-21.14l-6.4 1.94-3-5.84c-14.3-26.93-42.6-46.15-76.1-46.15l.9.9z" />
  </svg>
);

export default SvgBadge;