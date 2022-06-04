import * as React from "react";
import { SVGProps } from "react";

const SvgAppleCore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="apple-core_svg__fa-primary"
      d="M288 0v32c0 44.18-35.82 80-80 80h-32V80c0-44.18 35.82-80 80-80h32z"
    />
    <path
      d="M364.3 448.1C336.8 486.3 299.8 512 256 512c-32 0-48-16-64-16s-32 16-64 16c-43.65 0-80.68-25.77-108.2-63.13C65.82 417.1 95.1 364.1 95.1 304c0-62.99-33.19-118.1-82.93-149.2C29.96 138.3 51.94 128 80.01 128c32 .002 79.99 16.03 111.1 32.03 31.99-16 80.1-32.06 112.1-32.06 27.96 0 49.8 10.39 66.68 26.93C321.1 186 287.1 241.1 287.1 304c0 60.2 31.1 113.3 77.2 144.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAppleCore;
