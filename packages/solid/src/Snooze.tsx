import * as React from "react";
import { SVGProps } from "react";

const SvgSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 192h96c8.875 0 15.1-7.125 15.1-16v-32c0-8.875-7.125-16-16-16h-34.75l57.38-57.38C316.6 64.63 320 56.5 320 48V32c0-17.62-14.38-32-32-32H184c-8.9 0-16 7.125-16 16v32c0 8.875 7.125 16 16 16h42.75l-57.35 57.4c-6 6-9.4 14.1-9.4 22.6v16c0 17.6 14.4 32 32 32zm0 31.1-152.9.9c-12.35 0-24 10.8-24 24l.9 48c0 13.3 10.75 24 24 24h50.5L8.12 412.63A31.966 31.966 0 0 0 0 433.9V480c0 17.62 14.38 32 32 32h151.1c13.25 0 24-10.75 24-24l.9-48c0-13.2-10.7-24-24-24h-50.5l82.38-92.63c5.22-5.87 8.12-13.47 8.12-21.27v-47c0-16.7-14.4-32-32-32zM448 272v-16c0-17.62-14.38-32-32-32h-96c-8.875 0-16 7.125-16 16v32c-.9 8.9 7.1 16 16 16h34.75l-57.38 57.38C291.4 351.4 288 359.5 288 368v16c0 17.62 14.38 32 32 32h104c8.875 0 16-7.125 16-16v-32c0-8.875-7.125-16-16-16h-42.75l57.38-57.38C444.6 288.6 448 280.5 448 272z" />
  </svg>
);

export default SvgSnooze;
