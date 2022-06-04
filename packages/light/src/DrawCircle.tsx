import * as React from "react";
import { SVGProps } from "react";

const SvgDrawCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M454.1 192.3c32.5 3 57.9 30.4 57.9 63.7 0 33.3-25.4 60.7-57.9 63.7-20.5 63.6-70.8 113.9-134.4 134.4-3 32.5-30.4 57.9-63.7 57.9-33.3 0-60.7-25.4-63.7-57.9-63.6-20.5-113.91-70.8-134.36-134.4C25.44 316.7 0 289.3 0 256c0-33.3 25.44-60.7 57.94-63.7C78.39 128.7 128.7 78.39 192.3 57.94 195.3 25.44 222.7 0 256 0c33.3 0 60.7 25.44 63.7 57.94 63.6 20.45 113.9 70.76 134.4 134.36zM255.1 96c18.6 0 32.9-14.33 32.9-32s-14.3-32-32.9-32c-16.8 0-32 14.33-32 32s15.2 32 32 32zm59.4-6.04C304.6 112.4 282.1 128 255.1 128c-25.2 0-47.7-15.6-57.6-38.04-50.1 17.64-89.9 57.44-107.54 107.54 22.44 9.9 37.14 32.4 37.14 58.5s-14.7 48.6-37.14 58.5C107.6 364.6 147.4 404.4 197.5 422c9.9-22.4 32.4-38 57.6-38 27 0 49.5 15.6 59.4 38 50.1-17.6 89.9-57.4 107.5-107.5-22.4-9.9-38-32.4-38-58.5s15.6-48.6 38-58.5c-17.6-50.1-57.4-89.9-107.5-107.54zM255.1 480c18.6 0 32.9-14.3 32.9-32s-14.3-32-32.9-32c-16.8 0-32 14.3-32 32s15.2 32 32 32zm-192-256c-16.77 0-32 14.3-32 32s15.23 32 32 32c18.57 0 32-14.3 32-32s-13.43-32-32-32zM448 288c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgDrawCircle;
