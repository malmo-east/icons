import * as React from "react";
import { SVGProps } from "react";

const SvgWindowFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="window-frame_svg__fa-primary"
      d="M496 448h-16V32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v416H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h480c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16zm-256 0H96V288h144v160zm0-224H96V64h144v160zm176 224H272V288h144v160zm0-224H272V64h144v160z"
    />
    <path
      d="M272 64v160h144V64H272zM96 224h144V64H96v160zm0 224h144V288H96v160zm176 0h144V288H272v160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWindowFrame;
