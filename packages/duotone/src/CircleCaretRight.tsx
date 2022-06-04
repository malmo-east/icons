import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-caret-right_svg__fa-primary"
      d="m360.3 273.6-112 104c-4.5 4.2-10.4 6.4-16.3 6.4-3.25 0-6.5-.656-9.594-2C213.7 378.2 208 369.5 208 360V152c0-9.531 5.656-18.19 14.41-22 8.781-3.75 18.92-2.062 25.92 4.406l112 104C365.2 242.1 368 249.3 368 256s-2.8 13-7.7 17.6z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm104.3 273.6-112 104c-4.5 4.2-10.4 6.4-16.3 6.4-3.25 0-6.5-.656-9.594-2C213.7 378.2 208 369.5 208 360V152c0-9.531 5.656-18.19 14.41-22 8.781-3.75 18.92-2.062 25.92 4.406l112 104C365.2 242.1 368 249.3 368 256s-2.8 13-7.7 17.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleCaretRight;
