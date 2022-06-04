import * as React from "react";
import { SVGProps } from "react";

const SvgTreasureChest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="treasure-chest_svg__fa-primary"
      d="M96 256h64V32H96v224zm0 224h64V288H96v192zm320 0h64V288h-64v192zm0-448v224h64V32h-64zm-80 160h-96c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h96c8.836 0 16-7.164 16-16V208c0-8.8-7.2-16-16-16zm-32 112c0 8.836-7.164 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.162 16 16v64z"
    />
    <path
      d="M352 336c0 8.836-7.164 16-16 16h-96c-8.8 0-16-7.2-16-16v-48h-64v192h256V288h-64v48zM0 128v128h96V32C42.98 32 0 74.98 0 128zm0 320c0 17.67 14.33 32 32 32h64V288H0v160zm160-192h64v-48c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v48h64V32H160v224zM480 32v224h96V128c0-53.02-43-96-96-96zm0 448h64c17.67 0 32-14.33 32-32V288h-96v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTreasureChest;
