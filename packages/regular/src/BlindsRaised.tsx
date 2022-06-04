import * as React from "react";
import { SVGProps } from "react";

const SvgBlindsRaised = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M494.2 46.74c10.2-2.79 16.9-11.7 16.9-22.74 0-13.25-10.75-24-23.1-24H24.01C10.76 0 .006 10.75.006 24c0 11.04 7.619 19.95 17.77 22.74L1.225 96.41C-1.213 103.7.037 111.8 4.537 118s11.75 9.938 19.47 9.938L144 128v80H57.32l5.469-16.41C66.97 179 60.16 165.4 47.6 161.2c-12.78-4-26.16 2.6-30.38 15.2l-15.1 48c-3.333 7.3-2.083 15.4 2.417 21.6s11.753 10 19.473 10h119.1v116.4C116.1 382.3 96 408.7 96 440c0 39.76 32.24 72 71.1 72s71.1-32.24 71.1-72c0-31.3-20.1-57.67-47.1-67.59V48h252l10.67 32H224v48l263.1-.031c7.719 0 14.97-3.688 19.47-9.938 4.5-6.25 5.75-14.31 3.312-21.62L494.2 46.74zM57.32 80l10.67-32h76.02v32H57.32zM168 464c-13.23 0-23.1-10.77-23.1-24s9.9-24 23.1-24 23.1 10.77 23.1 24-9.9 24-23.1 24zm326.8-287.6c-4.219-12.56-17.72-19.28-30.37-15.19-12.56 4.219-19.37 17.78-15.19 30.38L454.7 208H224v48h263.1c7.719 0 14.97-3.719 19.47-9.969 4.5-6.25 5.75-14.31 3.312-21.62L494.8 176.4z" />
  </svg>
);

export default SvgBlindsRaised;