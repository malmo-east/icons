import * as React from "react";
import { SVGProps } from "react";

const SvgCircle1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 368h-56V136c0-2.844-1.516-5.5-3.984-6.906-2.438-1.406-5.484-1.469-7.984-.031l-56 32C192.2 163.3 190.9 168.1 193 171.1c2.219 3.844 7.094 5.125 10.92 2.969L248 149.8V368h-56c-4.422 0-8 3.594-8 8s3.6 8 8 8h128c4.422 0 8-3.594 8-8s-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircle1;
