import * as React from "react";
import { SVGProps } from "react";

const SvgYinYang = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 128c-17.7 0-32 14.4-32 32s14.3 32 32 32 31.97-14.38 31.97-32-14.27-32-31.97-32zm0-128C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 384c-17.68 0-31.97-14.38-31.97-32s14.27-32 31.97-32 31.97 14.38 31.97 32-14.27 32-31.97 32zm0-128c-53.04 0-96.03 43-96.03 96s42.13 96 96.03 96c-106.1 0-192.1-86-192.1-192S149.9 64 256 64c53.04 0 96.03 43 96.03 96S309 256 256 256z" />
  </svg>
);

export default SvgYinYang;