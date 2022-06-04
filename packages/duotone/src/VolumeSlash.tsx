import * as React from "react";
import { SVGProps } from "react";

const SvgVolumeSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="volume-slash_svg__fa-primary"
      d="M634.9 502.8c-8.125 10.41-23.19 12.28-33.69 4.078L9.188 42.89c-10.44-8.172-12.26-23.26-4.068-33.7C9.839 3.158 16.91 0 24.03 0c5.16 0 10.38 1.673 14.78 5.111l591.1 463.1C641.2 477.3 643.1 492.4 634.9 502.8z"
    />
    <path
      d="M64 208v96c0 26.51 21.49 47.1 48 47.1h83.84L330.74 471c5.96 6.2 13.56 9 21.26 9 4.438 0 8.959-.931 13.16-2.837C376.7 472 384 460.6 384 448v-50.34L88.75 166.3C74.05 174.5 64 189.1 64 208zM365.2 34.84c-11.5-5.188-25.01-3.116-34.43 5.259L214.9 143.1 384 275.7V64c0-12.59-7.3-24.9-18.8-29.16zM476.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406-8.406 10.25-6.906 25.38 3.375 33.78C457.5 228.4 464 241.8 464 256s-6.5 27.62-17.81 36.88c-7.719 6.311-10.48 16.41-7.824 25.39l21.53 16.88c.504.031.971.325 1.477.325 5.344 0 10.75-1.781 15.19-5.406C499.1 311.6 512 284.7 512 256c0-28.7-12.9-55.6-35.4-74.1zm60.5-73.9c-10.22-8.344-25.34-6.906-33.78 3.344-8.406 10.25-6.906 25.38 3.344 33.78C540.6 172.9 560 213.3 560 256c0 42.69-19.44 83.09-53.31 110.9-1.045.857-1.599 2.029-2.46 3.013l37.8 29.63C583.9 362.8 608 310.9 608 256c0-57.1-25.8-111.1-70.9-148z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVolumeSlash;