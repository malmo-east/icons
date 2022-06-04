import * as React from "react";
import { SVGProps } from "react";

const SvgMelon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256c0 70.71 28.66 134.7 74.1 181 .002.002-.002-.002 0 0s-.002-.002 0 0c47.2 46.3 111.2 75 181.9 75 141.4 0 256-114.6 256-256S397.4 0 256 0zm177.6 181.3c-15.34 51.15-50.27 105.8-98.37 153.9-64.71 64.67-143.1 106.5-201.9 106.5-19.59 0-34.76-5-45.33-14.64-.662-.65-1.359-1.262-2.014-1.92-17.6-18.15-20.32-51.56-7.471-94.38 15.34-51.15 50.27-105.8 98.37-153.9 64.69-64.68 143.1-106.5 201.9-106.5 19.14 0 34.03 4.785 44.21 13.61 1.014.984 2.098 1.893 3.094 2.893C443.7 104.1 446.4 138.4 433.6 181.3zM256 16c48.15 0 92.94 14.39 130.6 38.89-2.619-.172-5.102-.568-7.822-.568-59.84 0-143.2 41.14-213.2 111.2C115.6 215.4 79.2 272.5 63.11 326.1c-6.82 22.73-9.139 43.07-7.918 60.91C30.49 349.3 16 304.4 16 256 16 123.7 123.7 16 256 16zm0 480c-48.15 0-92.94-14.39-130.6-38.89 2.615.17 5.096.566 7.811.566 59.84 0 143.2-41.14 213.3-111.1 49.93-49.94 86.29-106.1 102.4-160.6 6.822-22.74 9.145-43.09 7.92-60.93C481.5 162.7 496 207.6 496 256c0 132.3-107.7 240-240 240z" />
  </svg>
);

export default SvgMelon;