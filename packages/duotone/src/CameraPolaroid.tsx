import * as React from "react";
import { SVGProps } from "react";

const SvgCameraPolaroid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="camera-polaroid_svg__fa-primary"
      d="M575.1 352 512 256V80c0-26.51-21.49-48-48-48H112c-26.51 0-48 21.49-48 48v176L.03 352.02 575.1 352zM384 112c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm-96 16c35.38 0 64 28.62 64 64s-28.62 64-64 64-64-28.62-64-64 28.6-64 64-64z"
    />
    <path
      d="M288 256c35.38 0 64-28.62 64-64s-28.62-64-64-64-64 28.62-64 64 28.6 64 64 64zm287.1 96H.03L0 448c0 17.6 14.4 32 32 32h512c17.6 0 32-14.4 32-32l-.9-96zM464 432H112c-8.8 0-16-7.2-16-16 0-8.838 7.164-16 16-16h352c8.838 0 16 7.162 16 16 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCameraPolaroid;
