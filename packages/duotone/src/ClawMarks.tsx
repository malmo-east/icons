import * as React from "react";
import { SVGProps } from "react";

const SvgClawMarks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="claw-marks_svg__fa-primary"
      d="M204.3 120.4c-7.75-6.125-12.25-15.25-12.25-25.13V64.02H134c-5.1 0-11.1-1.875-17.12-5C68.82 28.54 13.62.006 8.59.006 3.764.006 0 4.31 0 8.94c0 2.124.792 4.316 2.636 6.194l179.1 180c5.1 6 9.375 14.12 9.375 22.63L192 256h38.3c8.5 0 16.62 3.375 22.62 9.375l89.75 89.75c5.1 6 9.375 14.12 9.375 22.63v38.25l38.25-.003c8.5 0 16.62 3.375 22.62 9.375l83.1 84C498.7 511.2 500.9 512 502.1 512c4.645 0 9.023-3.819 9.023-8.639C511.1 498 424.4 290.9 204.3 120.4z"
    />
    <path
      d="M7.057 224.5a4.998 4.998 0 0 0-2.154-.509c-2.714 0-4.83 2.446-4.83 5.048 0 1.194.446 2.422 1.485 3.46l85.12 85.12c6 6 9.375 14.12 9.375 22.62l-.013 43.75 43.76-.003c8.5 0 16.63 3.375 22.62 9.375l117.1 117.1c1.04 1.04 2.26 1.485 3.453 1.485 2.602 0 5.016-2.106 5.016-4.82C288 502.5 208.5 320.1 7.057 224.5zM506.1 287.1c2.602 0 5.048-2.116 5.048-4.83 0-.688-.157-1.414-.508-2.154-92.98-196.1-276.6-281-282.6-281-2.715 0-4.83 2.446-4.83 5.048 0 1.194.445 2.422 1.484 3.46l21.17 21.12c6 6 9.333 14.12 9.333 22.62v43.75l43.75-.005c8.5 0 16.62 3.375 22.62 9.375l52.25 52.25c6 6 9.375 14.12 9.375 22.62v43.75l43.75-.004c8.5 0 16.62 3.375 22.62 9.375l53.12 53.12c1.818 1.905 3.118 1.505 3.418 1.505z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClawMarks;
