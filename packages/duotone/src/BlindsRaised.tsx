import * as React from "react";
import { SVGProps } from "react";

const SvgBlindsRaised = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="blinds-raised_svg__fa-primary"
      d="m511.1 15.99.9 32c0 8.836-7.152 16-15.99 16H128l.001 354.8c21.1 7.75 35.25 30.23 31.25 53.23C155.4 495.1 135.4 512 112 512s-43.38-16.87-47.25-39.99C60.75 449 73.1 426.5 96 418.8V63.99H15.99C7.152 63.99 0 56.82 0 47.99L.003 16C.003 7.157 7.167 0 16 0h479.1c9.7 0 16 7.157 16 15.99z"
    />
    <path
      d="M96 127.8H0l15.99-63.85c.021 0-.021 0 0 0l80.01.04v63.81zm0 32H16l-16 64 96 .023V159.8zm32 .1v63.9l384-.023-16-63.98-368 .103zm368-95.91H128v63.85h384l-16-63.85c-.9 0 0 0 0 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBlindsRaised;
