import * as React from "react";
import { SVGProps } from "react";

const SvgKazoo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="kazoo_svg__fa-primary"
      d="m498.9 216.4-11.25-11.25c-1.5-1.5-3.5-2.375-5.625-2.375s-4.25.875-5.75 2.375L448 233.4l-28.25-28.25c-3.125-3.125-8.25-3.125-11.38 0l-11.25 11.25c-3.125 3.125-3.125 8.25 0 11.38L425.4 256l-28.25 28.25a8.244 8.244 0 0 0-2.375 5.75c0 2.125.875 4.125 2.375 5.625l11.25 11.25c3.125 3.125 8.25 3.125 11.38 0L448 278.6l28.25 28.25a8.244 8.244 0 0 0 5.75 2.375c2.125 0 4.125-.875 5.625-2.375l11.25-11.25c1.5-1.5 2.375-3.5 2.375-5.625s-.875-4.25-2.375-5.75L470.6 256l28.25-28.25c2.25-3.15 2.25-8.25.05-11.35zM383.3 384H241.9c-11.88 0-23.62-1.625-35.13-4.875l-183.5-52.5C9.5 322.8 0 310.1 0 295.9v-79.8c0-14.25 9.5-26.88 23.25-30.75l183.5-52.5C218.3 129.6 229.1 128 241.9 128h141.5c-46.9 23.8-79.4 71.9-79.4 128s32.5 104.3 79.3 128zM640 160v192c0 17.62-14.38 32-32 32h-95.35C559.5 360.3 592 312.1 592 256s-32.47-104.3-79.35-128H608c17.6 0 32 14.4 32 32z"
    />
    <path
      d="M448 160c52.93 0 96 43.07 96 96s-43.07 96-96 96-96-43.07-96-96 43.1-96 96-96zm0-48c-79.53 0-144 64.47-144 144s64.47 144 144 144 144-64.47 144-144-64.5-144-144-144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgKazoo;