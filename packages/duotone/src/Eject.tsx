import * as React from "react";
import { SVGProps } from "react";

const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="eject_svg__fa-primary"
      d="M48.01 319.1h351.1c41.62 0 63.49-49.63 35.37-80.38l-175.1-192.1c-19-20.62-51.75-20.62-70.75 0L12.64 239.6c-28.12 30.6-6.247 79.5 35.37 79.5z"
    />
    <path
      d="M447.1 432c0 26.39-21.6 47.99-47.99 47.99H48.01C21.62 479.99.02 458.39.02 432s21.6-47.98 47.99-47.98h351.1C426.4 384 447.1 405.6 447.1 432z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEject;
