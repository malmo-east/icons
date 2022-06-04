import * as React from "react";
import { SVGProps } from "react";

const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 352c53.03 0 96-42.97 96-96V96c0-53.03-42.97-96-96-96S96 42.97 96 96v160c0 53 42.1 96 96 96zM112 96c0-44.11 35.89-80 80-80s80 35.89 80 80v160c0 44.11-35.89 80-80 80s-80-35.9-80-80V96zm240 160v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56c0 79.41-64.59 144-144 144S48 335.4 48 256v-56c0-4.4-3.59-8-8-8s-8 3.6-8 8v56c0 85.48 67.56 154.9 152 159.2V496H72c-4.41 0-8 3.6-8 8s3.59 8 8 8h240c4.406 0 8-3.594 8-8s-3.594-8-8-8H200v-80.81C284.4 410.9 352 341.5 352 256z" />
  </svg>
);

export default SvgMicrophone;
