import * as React from "react";
import { SVGProps } from "react";

const SvgHashtagLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M195.6 32.42c8.6 1.99 14 9.68 12 19.19L186.3 144h127.1l23-99.59c2-8.61 9.7-13.98 19.2-11.99 8.6 1.99 14 9.68 12 19.19L346.3 144H432c8.8 0 16 7.2 16 16 0 .4-.9.8-.9 1.2-14.2 2.1-28.3 7.3-40.8 14.8h-67.4l-67.3 291.6c-2 8.6-10.6 14-19.2 12s-14-10.6-12-19.2l21.3-92.4H134.6l-23 99.6c-2 8.6-10.6 14-19.2 12-8.61-2-13.98-10.6-11.99-19.2L101.7 368H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h93.1L146 176H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h105.4l23-99.59c2-8.61 9.7-13.98 19.2-11.99zM178.9 176l-37.8 160h128L306 176H178.9zM464 192c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 32c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48zm-80 128v128h160V352H384z" />
  </svg>
);

export default SvgHashtagLock;
