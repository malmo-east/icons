import * as React from "react";
import { SVGProps } from "react";

const SvgMoneyCheckPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16 128v256c0 26.5 21.49 48 48 48h270.5l-4 16H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v64.6c-5.4.7-10.8 2.1-16 4V128c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48zm360 176c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.42 0-8-3.6-8-8s3.58-8 8-8h272zM96 216c0-4.4 3.58-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.42 0-8-3.6-8-8zm260.7 291.2c-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7l181.3-180.4c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4c15.7 15.6 15.7 40.9 0 56.6L446.9 487.9c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2zm11.3-11.4 60.1-15c2.8-.7 5.4-2.1 7.5-4.2l142.8-142.9-48.3-48.3-142.9 142.9c-2 2-3.5 4.6-4.2 7.4l-15 60.1zm248.8-234.4L602.4 247c-9.3-9.3-24.5-9.3-33.9 0l-27.1 27.1 48.3 48.3 27.1-27c9.4-10.3 9.4-24.6 0-34zM428.6 482.8l3.4 13.5z" />
  </svg>
);

export default SvgMoneyCheckPen;