import * as React from "react";
import { SVGProps } from "react";

const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M272 320c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM64 96c0-17.67 14.33-32 32-32h256c17.7 0 32 14.33 32 32v96c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V96zm16 0v96c0 8.8 7.16 16 16 16h256c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H96c-8.84 0-16 7.16-16 16zM352 0c53 0 96 42.98 96 96v256c0 49.4-37.3 90.1-85.3 95.4l51 50.9c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L340.7 448H107.3l-61.64 61.7c-3.13 3.1-8.19 3.1-11.32 0a8.112 8.112 0 0 1 0-11.4l50.94-50.9C37.31 442.1 0 401.4 0 352V96C0 42.98 42.98 0 96 0h256zm0 16H96c-44.18 0-80 35.82-80 80v256c0 44.2 35.82 80 80 80h256c44.2 0 80-35.8 80-80V96c0-44.18-35.8-80-80-80z" />
  </svg>
);

export default SvgTrain;
