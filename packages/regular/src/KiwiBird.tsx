import * as React from "react";
import { SVGProps } from "react";

const SvgKiwiBird = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M424 224c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm-31.7 128c-36.4 0-69.9 17.6-101.1 36.4-11 6.7-22.8 12.3-35.2 16.7V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40.7c-5.3.5-10.6.7-16 .7-16.6 0-32.7-2.1-48-6.9V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-65.7C38.61 357.1 0 295.1 0 224 0 117.1 85.96 32 192 32c36.3 0 70.3 10.08 99.2 27.6C322.4 78.44 355.9 96 392.3 96H448c70.7 0 128 57.3 128 128v240c0 7.3-4.9 13.7-12 15.5-7.9 1.8-14.4-1.4-18-7.7l-68.4-123.2c-9.5 2.2-19.4 3.4-29.6 3.4h-55.7zm0-48H448c44.2 0 80-35.8 80-80s-35.8-80-80-80h-55.7c-51 0-94.7-24.4-125.9-43.3C244.7 87.56 219.3 80 191.1 80c-78.6 0-144 64.5-144 144s65.4 144 144 144c28.2 0 53.6-7.6 75.3-20.7 31.2-18.9 74.9-43.3 125.9-43.3z" />
  </svg>
);

export default SvgKiwiBird;
