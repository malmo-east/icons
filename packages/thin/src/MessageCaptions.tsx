import * as React from "react";
import { SVGProps } from "react";

const SvgMessageCaptions = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 10.6 6.8 15.6 13.1 15.6 2.369 0 4.786-.746 6.948-2.324l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H297.8l-122.7 92.08V398.2h-112c-26.47 0-48-21.53-48-47.1V64c0-26.46 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1v287.1zm-272-104c0-4.406-3.606-7.984-8.012-7.984L71.1 239.1c-4.406 0-8 3.593-8 7.999s3.594 7.999 8 7.999h143.1c6.2.002 8.9-2.698 8.9-7.998zm216-8h-176c-4.406 0-8 3.593-8 7.999s3.594 7.999 8 7.999h176c4.406 0 8-3.593 8-7.999s-2.7-7.999-8-7.999zm-288 64h-80c-4.406 0-8 3.593-8 7.999s3.594 7.999 8 7.999h80c4.406 0 8-3.593 8-7.999 0-3.499-2.7-7.999-8-7.999zm288 0h-80c-4.406 0-8 3.593-8 7.999s3.594 7.999 8 7.999h80c4.406 0 8-3.593 8-7.999 0-3.499-2.7-7.999-8-7.999zm-128 0h-112c-4.406 0-7.1 3.593-7.1 7.999s3.594 7.999 7.1 7.999h112c4.406 0 8-3.593 8-7.999 0-3.499-2.7-7.999-8-7.999z" />
  </svg>
);

export default SvgMessageCaptions;
