import * as React from "react";
import { SVGProps } from "react";

const SvgShuttleSpace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 240v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16zM32 384h-8c-13.25 0-24-10.7-24-24V152c0-13.3 10.75-24 24-24h8V80c0-26.51 21.49-48 48-48h49.1c41.5 0 81.3 11.03 116.1 31.92L405.3 160H456c69.3 0 135 22.7 179.2 81.6 6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352h-50.7l-160.1 96.1c-34.8 20-74.6 31.9-116.1 31.9H80c-26.51 0-48-21.5-48-48v-48zm280-32H168c-9.9 13.2-23.9 23.3-40 28.3V432h1.1c32.8 0 64.1-8.7 91.4-25.1L312 352zm0-192-91.5-54.9C193.2 88.67 161.9 80 129.1 80H128v51.7c16.1 5 30.1 15.1 40 28.3h144zM48 336h56c12.7 0 23.8-7.4 28.9-18.3 4-8.4 12.4-13.7 21.7-13.7H456c32.6 0 62.4-5.8 88-18.5v-59c-25.6-12.7-55.4-18.5-88-18.5H154.6c-9.3 0-17.7-5.3-21.7-13.7-5.1-10.9-16.2-18.3-28.9-18.3H48v160z" />
  </svg>
);

export default SvgShuttleSpace;