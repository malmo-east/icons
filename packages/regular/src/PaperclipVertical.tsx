import * as React from "react";
import { SVGProps } from "react";

const SvgPaperclipVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M48 108C48 48.35 96.35 0 156 0c59.6 0 108 48.35 108 108v236c0 39.8-32.2 72-72 72s-72-32.2-72-72V152c0-13.3 10.7-24 24-24s24 10.7 24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24V108c0-33.14-26.9-60-60-60s-60 26.86-60 60v260c0 53 42.1 96 96 96 53 0 96-43 96-96V152c0-13.3 10.7-24 24-24s24 10.7 24 24v216c0 79.5-64.5 144-144 144S48 447.5 48 368V108z" />
  </svg>
);

export default SvgPaperclipVertical;