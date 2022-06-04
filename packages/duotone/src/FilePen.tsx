import * as React from "react";
import { SVGProps } from "react";

const SvgFilePen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="file-pen_svg__fa-primary"
      d="M224 160V0l160 160H224zm340.3 90.1c15.6 15.6 15.6 41 0 56.6l-29.5 29.4-70.9-70.9 29.4-29.5c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4zm-252.4 167 129.3-129.3 71 71-129.3 129.3c-4.1 4.1-9.2 7-14.8 8.4l-60.2 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.2c1.4-5.6 4.3-10.7 8.4-14.8z"
    />
    <path
      d="M0 64C0 28.65 28.65 0 64 0h160v160h160v139.5l-94.7 94.8c-8.2 8.2-14 18.4-16.8 28.8l-15.1 61c-2.3 9.4-1.7 19.1 1.4 27.9H64c-35.35 0-64-28.7-64-64V64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFilePen;
