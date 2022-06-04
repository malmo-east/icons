import * as React from "react";
import { SVGProps } from "react";

const SvgPipeSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 96c-13.25 0-24 10.75-24 24v8H48v-8c0-13.2-10.75-24-24-24S0 106.8 0 120v272c0 13.2 10.75 24 24 24s24-10.75 24-24v-8h544v8c0 13.25 10.75 24 24 24s24-10.8 24-24V120c0-13.2-10.8-24-24-24zm-24 240H48V176h544v160z" />
  </svg>
);

export default SvgPipeSection;
