import * as React from "react";
import { SVGProps } from "react";

const SvgMugMarshmallows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="mug-marshmallows_svg__fa-primary"
      d="m400 160.1-240 .1v63.67c0 17.75-14.25 32-32 32s-32-14.25-32-32V160.2l-64-.1c-17.75 0-32 14.38-32 32V384c0 53 43 96 96 96h192c53 0 96-42.95 96-95.95l16 .013c61.75 0 112-50.31 112-111.9C512 210.4 461.8 160.1 400 160.1zm0 160.2h-16v-96h16c26.5 0 48 21.5 48 48 0 26.3-21.5 48-48 48z"
    />
    <path
      d="M200.9 44.75c-5.9-7.25-14.5-12.37-24.6-12.37H64c-17.75 0-32 14.38-32 32v63.81l130.1.063c-5.5-21-.25-44.5 16.38-61L200.9 44.75zm142.4 45-48.5-48.38c-12.5-12.5-32.75-12.5-45.25 0L201 89.75c-10.38 10.5-11.5 26.38-4.25 38.63h151c7.15-12.28 6.05-28.08-4.45-38.63zM96 223.8c0 17.67 14.33 32 32 32s32-14.33 32-32v-63.67H96v63.67z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMugMarshmallows;
