import * as React from "react";
import { SVGProps } from "react";

const SvgWaveform = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 287.1c0 5.3-3.6 8.9-8 8.9h-56c-3.438 0-6.5-2.219-7.594-5.469l-22.72-68.19-41.88 195.3C503 421.5 499.8 424.2 495.8 424a7.992 7.992 0 0 1-7.656-6.812l-40.5-270-55.69 334.2C391.3 485.2 387.9 488 384 488c-3.938-.031-7.375-2.969-7.906-6.875L320 88.56 263.9 481.1c-.5 3.9-3.9 6-7.8 6.9-3.906 0-7.344-2.812-8-6.688L192.4 147.2l-40.5 270c-.6 3.8-3.8 6.7-7.6 6.8-4.625.125-7.25-2.531-8.062-6.312L94.31 222.3l-22.72 68.2A7.989 7.989 0 0 1 64 296H8c-4.406 0-8-3.6-8-8.9s3.594-7.1 8-7.1h50.22l30.19-90.53c1.15-3.47 4.31-6.37 8.03-5.47 3.594.219 6.625 2.781 7.375 6.312l38.81 181 41.47-276.5C184.7 90.88 187.2 87.5 192 88a8.015 8.015 0 0 1 7.906 6.688l55.5 333L312.1 30.88c.6-3.94 3.9-6.88 7.9-6.88s7.344 2.938 7.906 6.875l56.69 396.8 55.5-333C440.8 90.75 443.7 88.34 448.1 88c3.9.03 7.2 2.91 7.8 6.81l41.47 276.5 38.81-181c.72-3.51 2.92-6.11 7.42-6.31 3.688-.094 6.875 2.031 8.031 5.469L581.8 280H632c4.4 0 8 3.6 8 7.1z" />
  </svg>
);

export default SvgWaveform;
