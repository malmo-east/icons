import * as React from "react";
import { SVGProps } from "react";

const SvgSaltShaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m383.4 446.6-49-327.7C324.3 51.11 263.1 0 192 0S59.69 51.11 49.56 118.9L.598 446.6a56.19 56.19 0 0 0 13.152 45c11.16 13 27.53 20.4 44.91 20.4h266.7c17.38 0 33.75-7.438 44.91-20.39 9.83-12.41 15.53-28.81 13.13-45.01zM240 80c8.8 0 16 7.16 16 16 0 8.836-7.164 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zm-48-32c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16s-16-7.16-16-16 7.2-16 16-16zm-48 32c8.8 0 16 7.16 16 16 0 8.836-7.164 16-16 16s-16-7.2-16-16c0-8.84 7.2-16 16-16zm189.9 380.3c-2 2.3-5.2 3.7-8.6 3.7H58.66c-3.406 0-6.531-1.359-8.562-3.734-1.156-1.344-2.469-3.578-2-6.547L87.2 192h209.6l39.1 261.7c.5 3-.8 5.2-2 6.6z" />
  </svg>
);

export default SvgSaltShaker;