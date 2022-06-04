import * as React from "react";
import { SVGProps } from "react";

const SvgSausage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M429.6 64.96a96.688 96.688 0 0 0-13.54-.955c-46.87 0-88.2 34.51-95.05 82.43L316.1 180.3c-10 69.97-65.81 125.8-135.7 135.8l-33.94 4.844c-52.5 7.5-88.96 56.1-81.46 108.6C71.82 477.5 112.1 512 159.1 512c4.531 0 8.998-.313 13.59-.969l33.97-4.844c153.8-21.97 276.7-144.8 298.6-298.7l4.844-33.94C518.5 121.1 482.1 72.46 429.6 64.96zm65.6 106.34-4.844 33.94c-20.97 146.9-138.2 264.1-285.1 285.1L171.3 495.2c-3.8.5-7.6.8-11.4.8-39.48 0-73.47-29.54-79.06-68.7-6.236-43.66 24.22-84.26 67.89-90.49l33.94-4.846c76.92-10.1 138.3-72.42 149.3-149.4l4.842-33.91C342.4 109.5 376.5 80 416 80c3.717 0 7.482.262 11.25.795C470.1 87.04 501.4 127.6 495.2 171.3zM383.1 152c-4.406 0-7.1 3.594-7.1 8 0 119.1-96.91 216-215.1 216-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8C288.8 392 392 287.9 392 160c-.9-4.4-3.6-8-8.9-8zM45.03 391.4c4.062 1.594 8.781-.344 10.41-4.469 1.625-4.094-.375-8.75-4.469-10.41l-39.1-16a8.048 8.048 0 0 0-7.469.812C1.313 362.9 0 365.3 0 368v96a8.026 8.026 0 0 0 3.5 6.625C4.844 471.5 6.437 472 7.1 472c1 0 1.1-.188 2.969-.563l39.1-16c4.094-1.656 6.094-6.312 4.469-10.41.172-4.127-4.578-6.027-8.608-4.427L15.1 452.2v-72.38l29.93 11.58zM376.6 50.97c1.656 4.094 6.312 6.031 10.41 4.469 4.094-1.656 6.094-6.312 4.469-10.41L379.8 16h72.37l-11.62 29.03c-1.625 4.094.375 8.75 4.469 10.41.081.37 1.081.56 2.081.56a8.003 8.003 0 0 0 7.437-5.031l16-40a8.048 8.048 0 0 0-.812-7.469C469.1 1.312 466.7 0 463.1 0h-96a8.026 8.026 0 0 0-6.625 3.5 8.049 8.049 0 0 0-.813 7.469L376.6 50.97z" />
  </svg>
);

export default SvgSausage;