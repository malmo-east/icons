import * as React from "react";
import { SVGProps } from "react";

const SvgPoliceBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="police-box_svg__fa-primary"
      d="M288 32c17.7 0 32 14.33 32 32 17.7 0 32 14.33 32 32v368H32V96c0-17.67 14.33-32 32-32 0-17.67 14.33-32 32-32h192zM96 160h32v-32h-24c-4.42 0-8 3.6-8 8v24zm0 40c0 4.4 3.58 8 8 8h24v-32H96v24zm72-72h-24v32h32v-24c0-4.4-3.6-8-8-8zm-24 80h24c4.4 0 8-3.6 8-8v-24h-32v32zm72-80c-4.4 0-8 3.6-8 8v24h32v-32h-24zm24 48h-32v24c0 4.4 3.6 8 8 8h24v-32zm16-16h32v-24c0-4.4-3.6-8-8-8h-24v32zm32 16h-32v32h24c4.4 0 8-3.6 8-8v-24zM96 304c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v48z"
    />
    <path
      d="M208 32h-32V16c0-8.836 7.2-16 16-16s16 7.164 16 16v16zm-80 96v32H96v-24c0-4.4 3.58-8 8-8h24zm0 80h-24c-4.42 0-8-3.6-8-8v-24h32v32zm16-80h24c4.4 0 8 3.6 8 8v24h-32v-32zm32 72c0 4.4-3.6 8-8 8h-24v-32h32v24zm184 264c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h336zM208 136c0-4.4 3.6-8 8-8h24v32h-32v-24zm0 40h32v32h-24c-4.4 0-8-3.6-8-8v-24zm80-40v24h-32v-32h24c4.4 0 8 3.6 8 8zm-32 40h32v24c0 4.4-3.6 8-8 8h-24v-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPoliceBox;
