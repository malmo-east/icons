import * as React from "react";
import { SVGProps } from "react";

const SvgSheetPlastic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="sheet-plastic_svg__fa-primary"
      d="M224 352h160L224 512V352z"
    />
    <path
      d="M64 512c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v288H224v160H64zM171.3 52.69c-6.2-6.25-16.4-6.25-22.6 0L52.69 148.7c-6.25 6.2-6.25 16.4 0 22.6 6.24 6.3 16.37 6.3 22.62 0l95.99-95.99c6.3-6.24 6.3-16.37 0-22.62zm96 54.61c6.3-6.2 6.3-16.37 0-22.61-6.2-6.25-16.4-6.25-22.6 0L84.69 244.7c-6.25 6.2-6.25 16.4 0 22.6 6.24 6.3 16.41 6.3 22.61 0l160-160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSheetPlastic;
