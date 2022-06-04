import * as React from "react";
import { SVGProps } from "react";

const SvgPipeCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M496 224c-79.5 0-144 64.5-144 144s64.48 144 144 144 144-64.48 144-144-64.5-144-144-144zm0 256c-61.86 0-112-50.14-112-112 0-61.9 50.1-112 112-112s112 50.1 112 112-50.1 112-112 112zM32 352V160h416v38.62a175.852 175.852 0 0 1 32-5.92V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H32v-16c0-8.8-7.17-16-16-16s-16 7.2-16 16v288c0 8.8 7.168 16 16 16s16-7.2 16-16v-16h288.7c-.4-5.3-.7-10.6-.7-16s.256-10.72.703-16H32zm508.1-34.7-60.7 67.46-28.06-28.1c-6.271-6.24-16.38-6.24-22.66 0-6.24 6.271-6.24 16.38 0 22.66l40 40c3.104 3.104 7.359 4.768 11.74 4.672a16.133 16.133 0 0 0 11.49-5.312l72-80c5.889-6.561 5.375-16.67-1.217-22.59C556.1 310.2 546 310.7 540.1 317.3z" />
  </svg>
);

export default SvgPipeCircleCheck;
