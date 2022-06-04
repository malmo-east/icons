import * as React from "react";
import { SVGProps } from "react";

const SvgUserChef = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-chef_svg__fa-primary"
      d="M96 93.06V160h256V93.06c18.6-6.61 32-24.19 32-45.06 0-26.51-21.5-48-48-48-14.42 0-27.2 6.488-36 16.55C291.2 6.488 278.4 0 264 0c-16.7 0-31.4 8.564-40 21.53C215.4 8.564 200.7 0 184 0c-14.4 0-27.2 6.488-36 16.55C139.2 6.488 126.4 0 112 0 85.49 0 64 21.49 64 48c0 20.87 13.4 38.45 32 45.06zM352 356.5v-35.29L128 410.8V512h288c17.67 0 32-14.33 32-32 0-59.6-40.9-109.2-96-123.5zM208 448c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.162 16 16c0 8.8-7.2 16-16 16zm96 0c-8.836 0-16-7.164-16-16 0-8.838 7.164-16 16-16s16 7.162 16 16c0 8.8-7.2 16-16 16zM96 320v36.53C40.89 370.8 0 420.4 0 480c0 17.67 14.33 32 32 32h64V389.2l106.4-42.57L96 320z"
    />
    <path
      d="M352 160v16c0 70.75-57.25 128-128 128S96 246.75 96 176v-16h256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserChef;
