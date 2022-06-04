import * as React from "react";
import { SVGProps } from "react";

const SvgTreePalm = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="tree-palm_svg__fa-primary"
      d="M229.8 472.4c14.3-57.1 45.3-175.8 34.8-280.4h56.6c14.88 56.63 41.12 179.5 26.37 293-1.97 15.6-15.97 27-31.67 27h-55.1c-20.8 0-36.2-19.5-31-39.6z"
    />
    <path
      d="M575.7 172.9c1.875 9.875-6.501 19.12-17.75 19.12L503.1 192 480 144l-24.9 48H264.6c-.016-.15-155.1 154.4-155.1 154.4-8 8-20.37 7.375-26.12-1-35.37-51.8-21.62-133.3 35.42-190.3 3.375-3.375 7.125-5.1 10.75-9.125L96.01 79.1l-24 48.9-54-.9c-11.25 0-19.62-9.25-17.75-19.12C11.89 47.25 78.63 0 159.3 0c74.12 0 135.9 40.12 154.5 94.5 28-18.75 63.62-30.5 102.1-30.5 81.5-.9 148.2 47.2 159.8 108.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTreePalm;