import * as React from "react";
import { SVGProps } from "react";

const SvgImages = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="images_svg__fa-primary"
      d="m493.3 295.1-106.7-160c-2.9-4.4-7.9-7.1-13.3-7.1a15.978 15.978 0 0 0-13.31 7.125l-62.74 94.11L274.9 198.6c-3-4.2-7.8-6.6-12.9-6.6-5.1 0-9.9 2.4-12.9 6.6l-70 96c-3.6 4.8-4.1 11.3-1.4 16.7 2.8 5.3 7.4 8.7 14.3 8.7h288c5.899 0 11.32-3.246 14.11-8.449 2.79-5.251 2.49-11.551-.81-16.451zM456 480H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z"
    />
    <path
      d="M527.1 32H144c-26.5 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h383.1c27.4 0 48.9-21.5 48.9-48V80c0-26.51-21.5-48-48.9-48zm-304 64c17.68 0 32 14.33 32 32s-13.4 32-32 32c-16.8 0-32-14.3-32-32s15.2-32 32-32zm271 215.6c-2.8 5.2-8.2 8.4-14.1 8.4H192c-6.9 0-11.5-3.4-14.3-8.7-2.7-5.4-2.2-11.9 1.4-16.7l70-96c3-4.2 7.8-6.6 12.9-6.6 5.1 0 9.9 2.4 12.9 6.6l22.35 30.66 62.74-94.11c2.11-4.45 7.11-7.15 13.31-7.15 5.348 0 10.34 2.672 13.31 7.125l106.7 160c3.29 4.875 3.59 11.175.79 16.475z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgImages;