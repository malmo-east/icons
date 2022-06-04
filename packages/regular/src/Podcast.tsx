import * as React from "react";
import { SVGProps } from "react";

const SvgPodcast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 304c-34.19 0-66.56 8.969-66.56 45.5 0 34.45 13.39 108.5 21.45 138.2C184.2 507.4 204.4 512 224 512s39.78-4.551 45.11-24.31c8.061-29.9 21.45-103.9 21.45-138.2C290.6 312.1 258.2 304 224 304zm1.5 159.1c-.4 0-1 .9-1.5.9-.545 0-1.062-.006-1.551-.016-6.928-30.01-15.84-82.73-16.87-110.3C209.1 352.8 214.9 352 224 352c9.109 0 14.97.846 18.48 1.656C241.6 380.4 232.6 433.3 225.5 463.1zM224 288c35.38 0 64-28.62 64-64s-28.62-64-64-64-64 28.6-64 64 28.6 64 64 64zm0-80c8.822 0 16 7.178 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0-208C100.5 0 0 100.5 0 224c0 71.13 32.66 136.4 89.59 179.2 4.32 3.2 9.38 4.8 13.51 4.8 7.312 0 14.5-3.312 19.22-9.594 7.969-10.59 5.812-25.64-4.781-33.59C73.66 331.2 48 279.9 48 224c0-97.05 78.97-176 176-176s176 78.95 176 176c0 55.88-25.66 107.2-70.38 140.8-10.59 7.969-12.75 23-4.781 33.61 7.969 10.55 23 12.8 33.59 4.766C415.3 360.4 448 295.1 448 224 448 100.5 347.5 0 224 0zm121.8 300.8c14.5-23 22.2-49.5 22.2-76.8 0-79.41-64.59-144-144-144S80 144.6 80 224c0 27.27 7.656 53.83 22.19 76.81 7.11 11.19 21.91 14.59 33.11 7.49s14.56-21.91 7.469-33.11C133.1 259.9 128 242.2 128 224c0-52.94 43.06-96 96-96s96 43.06 96 96c0 18.19-5.094 35.89-14.75 51.19-7.094 11.2-3.75 26.03 7.469 33.11 3.981 2.5 8.381 3.7 12.781 3.7 8 0 15.8-4 20.3-11.2z" />
  </svg>
);

export default SvgPodcast;