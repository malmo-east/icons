import * as React from "react";
import { SVGProps } from "react";

const SvgChessBishopPiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M48 240h28.96L64.03 375.2a8.168 8.168 0 0 0-.035.75C63.1 378.9 66.25 384 72 384a8.005 8.005 0 0 0 7.969-7.234l13-136c.001-.014 0 .014 0 0 0-.264-.234-.475-.237-.744h70.54c-.004.269-.238.48-.238.744 0 .014-.001-.014 0 0l13 136C176.4 380.9 179.9 384 184 384c5.746 0 8.003-5.09 8.003-8.016a8.17 8.17 0 0 0-.035-.75L179 240h29c4.406 0 8-3.578 8-8s-3.6-8-8-8h-15.08c9.045-11.74 14.55-27.81 14.55-47.3 0-37.91-23.21-98.4-51.09-128.7H160c4.406 0 8-3.578 8-8s-3.6-8-8-8H96c-4.41 0-8 3.58-8 8s3.59 8 8 8h3.617C71.74 78.3 48.53 138.8 48.53 176.7c0 19.49 5.502 35.56 14.55 47.3H48c-4.41 0-8 3.6-8 8s3.59 8 8 8zm80-192c20.92 0 48.44 65.52 49.22 67.46l-46.88 46.88C128.8 163.9 128 165.1 128 168c0 2.906 2.281 8 8 8a7.946 7.946 0 0 0 5.656-2.344l41.56-41.56c4.998 15.7 8.25 31.27 8.25 44.61 0 23.05-8.125 40.56-21.81 47.3H86.34C72.66 217.3 64.53 199.8 64.53 176.7 64.53 130.9 105.6 48 128 48zm114.7 404.4-18.7-9.3V432c0-13.23-10.78-24-24-24H56c-13.22 0-24 10.8-24 24v11.06l-18.56 9.344C5.281 456.3 0 464.7 0 473.9V488c0 13.2 10.78 24 24 24h208c13.22 0 24-10.77 24-24v-14.12c0-9.08-5.2-17.58-13.3-21.48zM240 488c0 4.484-3.5 8-8 8H24c-4.5 0-8-3.516-8-8v-14.12c0-3.016 1.688-5.781 4.469-7.109L48 452.9V432c0-4.484 3.5-8 8-8h144c4.5 0 8 3.516 8 8v20.94l27.53 13.83c2.67 1.23 4.47 4.13 4.47 7.13V488z" />
  </svg>
);

export default SvgChessBishopPiece;