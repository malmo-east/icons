import * as React from "react";
import { SVGProps } from "react";

const SvgOrnament = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M287.1 153.9V112c0-13.23-10.74-24-23.98-24h-34.6C238.4 78.65 244 66 244 52c0-28.72-23.3-52-52.9-52S140 23.28 140 52c0 14 5.598 26.65 14.6 36H120c-13.23 0-24.01 10.77-24.01 24l.002 41.94C38.66 187.2 0 248.1 0 320c0 106 85.95 192 191.1 192S384 426 384 320c0-71.9-38.7-132.8-96.9-166.1zM192 16c19.85 0 36 16.15 36 36s-16.1 36-36 36c-19.85 0-36-16.15-36-36s16.2-36 36-36zm-80 96c0-4.406 3.594-8 8-8h144c4.406 0 8 3.594 8 8v32H112v-32zm7.1 48h145.8c38.77 17.74 69.91 49.17 87.47 88H31.64c17.56-38.8 48.7-70.3 87.46-88zM192 496c-71.38 0-132.8-42.79-160.4-104h320.9c-27.7 61.2-89.1 104-160.5 104zm166.7-120H25.29C19.36 358.4 16 339.6 16 320c0-19.63 3.51-38.37 9.475-56h333.1C364.5 281.6 368 300.4 368 320s-3.4 38.4-9.3 56z" />
  </svg>
);

export default SvgOrnament;
