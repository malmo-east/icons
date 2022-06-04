import * as React from "react";
import { SVGProps } from "react";

const SvgSquareEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-envelope_svg__fa-primary"
      d="M224 300.2a48.054 48.054 0 0 1-21.47-5.047L64 225.9V336c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V225.9l-138.5 69.27a48.41 48.41 0 0 1-21.5 5.03zM352 144H96c-17.67 0-32 14.33-32 32v14.11l152.8 76.42c4.5 2.25 9.812 2.25 14.31 0L384 190.1V176c0-17.7-14.3-32-32-32z"
    />
    <path
      d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zm0 304c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareEnvelope;
