import * as React from "react";
import { SVGProps } from "react";

const SvgMeterDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M344 128c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-16zm24 24v48c0 4.41-3.588 8-8 8h-16c-4.41 0-8-3.59-8-8v-48c0-4.414 3.59-8 8-8h16c4.4 0 8 3.6 8 8zm-216-24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-16zm24 24v48c0 4.41-3.588 8-8 8h-16c-4.4 0-8-3.6-8-8v-48c0-4.414 3.59-8 8-8h16c4.4 0 8 3.6 8 8zm370.6 53.8c-2.5-9.1-10.6-13.8-19.5-13.8-7.875 0-15.77 4.516-18.59 13.83C479.7 304.3 416 331.2 416 400.7c0 61.5 50.1 111.3 112 111.3s112-49.84 112-111.3c0-69.9-63.5-95.8-93.4-194.9zM528 496c-52.93 0-96-42.77-96-95.33 0-31.39 15.72-53.52 35.62-81.52 18.82-26.48 42.23-59.44 57.11-108.7.17-.75.77-2.45 2.37-2.45 1.184 0 2.697.367 3.281 2.453 14.96 49.56 38.39 82.44 57.22 108.9C609.1 348.2 624 369.1 624 400.7c0 52.5-43.1 95.3-96 95.3zM248 128c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-16zm24 24v48c0 4.41-3.588 8-8 8h-16c-4.4 0-8-3.6-8-8v-48c0-4.414 3.59-8 8-8h16c4.4 0 8 3.6 8 8zm107.9 309.6C342.6 484.1 299.8 496 256 496 123.7 496 16 388.3 16 256S123.7 16 256 16c96.92 0 183.8 57.75 221.4 147.1 1.719 4.094 6.453 6.062 10.47 4.281 4.078-1.719 6-6.406 4.281-10.47C452.1 61.59 359.4 0 256 0 114.8 0 0 114.8 0 256s114.8 256 256 256c46.7 0 92.41-12.69 132.1-36.69 3.781-2.281 4.984-7.188 2.703-10.97-2.303-3.84-7.203-4.94-10.903-2.74z" />
  </svg>
);

export default SvgMeterDroplet;
