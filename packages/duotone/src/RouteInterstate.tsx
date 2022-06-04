import * as React from "react";
import { SVGProps } from "react";

const SvgRouteInterstate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="route-interstate_svg__fa-primary"
      d="M235.1 7.308c12.8-7.822 29-7.822 41.8 0 27.5 16.762 50.3 25.962 73.4 29.972 23.3 4.02 49.3 3.16 82.8-3.17 23-4.08 44.5 10.96 47.8 33.59 6.5 44.2 10 85.6 9.4 123.4H21.25c-.33-38 3.38-79.5 9.84-123.42 3.32-22.64 24.81-37.64 46.93-33.57 34.38 6.33 60.38 7.19 83.68 3.17 23.1-4.01 45.9-13.21 73.4-29.972z"
    />
    <path
      d="M21.25 192H490.3c-.9 51.2-9 97.7-27.2 139.8-32.5 75-94.6 130.9-190.3 175.7-10.2 4.8-22.1 5-32.5.6-98.4-41.4-160.96-97.5-193.01-173.9C29.34 291.5 21.69 244 21.25 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRouteInterstate;
