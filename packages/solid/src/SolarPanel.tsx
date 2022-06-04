import * as React from "react";
import { SVGProps } from "react";

const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M575.4 25.72C572.4 10.78 559.2 0 543.1 0H96C80.75 0 67.61 10.78 64.62 25.72l-63.1 320c-1.891 9.406.547 19.16 6.625 26.56S22.41 384 32 384h255.1v64.25h-47.3c-26.26 0-47.75 21.49-47.75 47.75 0 8.844 7.168 16.01 16.01 16l223.1-.167c8.828-.01 15.99-7.17 15.99-16C447.1 469.5 426.6 448 400.2 448h-48.28v-64h256c9.594 0 18.67-4.312 24.75-11.72s8.516-17.16 6.625-26.56l-63.895-320zM517.8 64l19.2 96h-97.98l-9.82-96h88.6zm-137.7 0 9.617 96H250l9.873-96H380.1zm-169.3 0-9.8 96h-97.9l19.18-96h88.52zM71.16 320l22.28-112h102.7L184.6 320H71.16zm162.64 0 11.37-112h149.7l11.33 112H233.8zm221.6 0-11.5-112h102.7l22.28 112H455.4z" />
  </svg>
);

export default SvgSolarPanel;
