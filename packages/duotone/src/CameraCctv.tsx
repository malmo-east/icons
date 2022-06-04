import * as React from "react";
import { SVGProps } from "react";

const SvgCameraCctv = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="camera-cctv_svg__fa-primary"
      d="M517.5 168.6 139.2 2.266c-14.8-5.875-31.7 0-39.58 13.874L4.25 183.04C-.5 191.3-1.25 201 1.999 209.9a32.132 32.132 0 0 0 19.13 19.12l284.2 117.6c9.25 3.375 19.5 2.375 27.87-2.875l189.2-118.4C544.7 211.5 541.7 178.3 517.5 168.6z"
    />
    <path
      d="M574.9 283.1c-1.7-4.2-5.8-7.5-9-9.3l-35.37-15.5-138.4 86.5 119.5 52.51c8.5 3.75 18.46-.132 22.21-8.632l40.74-92.62a17.017 17.017 0 0 0 .32-12.958zM137.7 400H63.1c0-26.51-21.49-47.98-47.1-47.98C7.164 352 0 359.2 0 368v127.1c0 9.7 7.164 16.9 15.1 16.9 26.51 0 47.1-21.49 47.1-47.1h96.05c13.33 0 25.26-8.269 29.94-20.75l46.87-124.1-59.25-24.37L137.7 400z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCameraCctv;
