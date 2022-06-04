import * as React from "react";
import { SVGProps } from "react";

const SvgUserVisor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3zM48.71 464c6.67-62.9 59.99-112 124.59-112h101.3c64.61 0 117.1 49.13 124.6 112H48.71zM105 174.6c18.7 47.6 64.8 81.4 119 81.4s100.3-33.81 118.1-81.39C357.2 171.4 368 159.2 368 144V96c0-17.67-14.33-32-32-32h-1.752C312.1 25.9 271.3 0 224 0s-88.1 25.9-110.2 64H112c-17.67 0-32 14.33-32 32v48c0 15.2 10.81 27.4 25 30.6zM224 208c-26.03 0-48.97-12.69-63.59-32h127.2C272.1 195.3 250 208 224 208zm0-160c17.85 0 34.18 6.082 47.51 16H176.5c13.3-9.92 29.7-16 47.5-16zm-96 64h192v16H128v-16zm181.2 257.4c16.8 20.5 25.8 45.8 26.8 75.2 0 1.562-.889 2.812-2.443 3.332-.357.068-.757.068-1.157.068-1.111 0-2.223-.521-2.889-1.355-10.89-14.38-15.66-19.17-17.66-20.83-.443 0-.777.103-1.221.313-2.889.832-10.89 4.582-32.88 20.62-1.223.832-2.666.937-4 .312-1.221-.625-1.889-1.98-1.777-3.23 3.443-30.42 14.11-55.42 31.77-74.58.757-.75 1.657-1.25 2.857-1.25 1.1.1 2.1.5 2.6 1.4z" />
  </svg>
);

export default SvgUserVisor;
