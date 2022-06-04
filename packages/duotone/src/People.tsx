import * as React from "react";
import { SVGProps } from "react";

const SvgPeople = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="people_svg__fa-primary"
      d="M244.6 158.1c-11.8-18.8-32.1-30.1-54.3-30.1h-60.5c-22.3 0-42.58 11.3-54.33 30.1L4.873 271c-9.375 15-4.813 34.8 10.157 44.1 15 9.375 34.75 4.812 44.1-10.19L88 258.8 87.1 480c0 17.67 14.33 32 31.1 32s33.8-14.3 33.8-32V336h16v144c0 17.67 14.32 32 31.1 32s32.9-14.3 32.9-32V258.8l28.88 46.2c6.02 9.7 16.52 15 27.12 15 5.781 0 11.66-1.562 16.94-4.859 14.97-9.375 19.53-29.11 10.16-44.09L244.6 158.1zM635.1 271l-61.19-97.95C556.3 144.9 525.8 128 492.5 128h-25.06c-33.28 0-63.72 16.86-81.41 45.13l-61.19 97.92c-9.375 14.98-4.812 34.72 10.16 44.09 15.03 9.375 34.75 4.812 44.1-10.19l32.62-52.19L367.1 384H408v96c0 17.67 14.33 32 31.1 32s32.9-14.3 32.9-32v-96h16v96c0 17.67 14.33 32 31.1 32s32-14.33 32-32v-96h39.1l-43.75-131.3 32.63 52.22C586.9 314.7 597.4 320 608 320c5.781 0 11.66-1.562 16.94-4.859C639.9 305.8 644.5 286 635.1 271z"
    />
    <path
      d="M160 0c-26.5 0-48.9 21.5-48.9 48s22.4 48 48 48 47.1-21.5 47.1-48S186.5 0 160 0zm319.1 0C452.6 0 432 21.5 432 48s21.5 48 47.1 48 48-21.5 48-48-20.6-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeople;
