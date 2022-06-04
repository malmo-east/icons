import * as React from "react";
import { SVGProps } from "react";

const SvgSquareK = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-k_svg__fa-primary"
      d="M313.1 135.2c-9.266-9.422-24.48-9.547-33.94-.25L176 236.5V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v208c0 13.3 10.8 24 24 24s24-10.75 24-24v-56.1l30.89-30.42 69.38 100.2C280.9 380.4 288.4 384 296 384a23.8 23.8 0 0 0 13.64-4.266c10.91-7.547 13.62-22.5 6.078-33.39l-72-104c-.732-1.057-1.805-1.662-2.666-2.564l71.78-70.69c9.468-9.29 9.568-24.49.268-33.89z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM243.7 242.3l72 104c7.547 10.89 4.828 25.84-6.078 33.39A23.622 23.622 0 0 1 296 384c-7.609 0-15.09-3.609-19.75-10.34L206.9 273.4 176 303.9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24s24 10.8 24 24v84.5l103.2-101.6c9.453-9.297 24.67-9.172 33.94.25 9.312 9.453 9.188 24.64-.25 33.94l-71.78 70.69c.79.92 1.89 1.52 2.59 2.52z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareK;