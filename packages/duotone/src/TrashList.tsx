import * as React from "react";
import { SVGProps } from "react";

const SvgTrashList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="trash-list_svg__fa-primary"
      d="M268.2 0c12.1 0 23.2 6.848 28.6 17.69L304 32h80c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h80l7.2-14.31C124.6 6.848 135.7 0 147.8 0h120.4zM448 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32zm64 96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32z"
    />
    <path
      d="M32 96h352l-21.4 370.8c-1.5 25.4-22.5 45.2-47.9 45.2H101.3c-25.43 0-46.44-19.8-47.91-45.2L32 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrashList;
