import * as React from "react";
import { SVGProps } from "react";

const SvgHandLizard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.1 448c-8.844 0-16-7.156-16-16V323.8c0-11.66-3.594-22.89-10.41-32.5l-120.7-170.5C337.9 105.3 319.7 96 300.3 96H45.1c-6.984 0-13.78 5.797-13.98 11.94.52 11.46 4.73 22.26 12.78 30.56 8.41 8.7 19.81 13.5 31.2 13.5h168.5c14.94 0 28.85 7.172 37.46 19.2 8.547 11.92 10.73 26.72 6.016 40.56l-10 29.33C271.7 259.6 254.1 272 234.4 272h-99.3c-12.28 0-23.69 4.781-32.09 13.48-7.15 8.32-11.37 19.12-11 30.62.2 6.1 7 11.9 13.09 11.9H265c3.094 0 6.25.906 8.844 2.594l86 56a16.01 16.01 0 0 1 7.266 13.41v32c0 8.844-7.156 16-16 16s-16-7.156-16-16v-23.33L261.2 360H105.1c-24.56 0-45.17-19.23-45.95-42.88.22-21.02 7.63-39.32 21.75-53.92 14.5-14.9 33.2-23.2 54.2-23.2h98.38c6.078 0 11.44-3.719 13.33-9.234l10-29.31c1.844-5.422-.313-9.609-1.75-11.62C253.3 186.1 249.1 184 244.4 184H75.1c-21.03 0-40.59-8.25-55.09-23.22C6.776 146.2-.63 127 .042 106.9.823 83.23 21.43 64 45.1 64h254.3c29.78 0 57.72 14.33 74.74 38.34l120.7 170.5C506.4 287.9 512 305.5 512 323.8V432c0 8.8-7.2 16-16.9 16z" />
  </svg>
);

export default SvgHandLizard;
