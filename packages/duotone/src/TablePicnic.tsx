import * as React from "react";
import { SVGProps } from "react";

const SvgTablePicnic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-picnic_svg__fa-primary"
      d="M96 128h320c17.67 0 32-14.33 32-32s-14.33-32-32-32H96c-17.67 0-32 14.33-32 32 0 17.7 14.33 32 32 32zm384 96H32c-17.67 0-32 14.3-32 32 0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32z"
    />
    <path
      d="M106.3 224h68.94l38.46-96h-69l-38.4 96zM34.28 404.1c-6.562 16.41 1.438 35.03 17.84 41.59C56 447.3 60.03 448 64 448c12.69 0 24.72-7.594 29.72-20.12L149.7 288H80.73L34.28 404.1zM367.3 128h-69l38.4 96h68.94l-38.34-96zm110.4 276.1L431.3 288h-69l55.95 139.9C423.3 440.4 435.3 448 448 448c3.969 0 8-.719 11.88-2.281C476.3 439.2 484.3 420.5 477.7 404.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTablePicnic;
