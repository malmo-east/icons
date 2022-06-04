import * as React from "react";
import { SVGProps } from "react";

const SvgCrutch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502.6 168.1 343 8.6C336.7 3.151 328.5 0 320.2 0c-8.193 0-16.39 3.103-22.67 9.316-12.68 12.54-12.73 33.1-.126 45.71l10.12 10.12-119.2 119.2C175.6 197.1 166.3 213.1 161.6 230.5l-40.74 149.4L2.36 498.4a7.994 7.994 0 0 0 0 11.31C3.906 511.2 5.953 512 7.1 512s4.094-.781 5.656-2.344l118.5-118.5 149.4-40.74a104.17 104.17 0 0 0 46.17-26.8l119.2-119.2 10.12 10.12C463.3 220.9 471.5 224 479.7 224c8.268 0 16.53-3.164 22.83-9.49 12.57-12.61 12.57-33.01.07-46.41zm-225.3 166-137.9 37.61 37.61-137.9a88.105 88.105 0 0 1 22.67-39.08l8.312-8.312L324.7 304l-8.312 8.312C305.6 323.1 292 330.1 277.3 334.1zm57.8-41.4L219.3 176l99.54-99.54 116.7 116.7L335.1 292.7zm156.1-89.5c-6.326 6.358-16.59 6.37-22.93.031l-159.6-159.5c-6.33-6.326-6.322-16.7.06-23.02 6.282-6.214 16.51-6.327 22.9.063l159.6 159.5c6.37 6.326 6.37 16.626-.03 22.926z" />
  </svg>
);

export default SvgCrutch;
