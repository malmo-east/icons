import * as React from "react";
import { SVGProps } from "react";

const SvgBaseball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm190.4 280.8c16.17-1.574 32.19-.215 47.94 2.539-12.63 110.6-100.6 198.5-211.2 210.1C281.3 484.4 280 474.4 280 464.2c0-5.031.219-10.03.625-15.03.375-4.406-2.906-8.25-7.312-8.625-4.281-.781-8.25 2.906-8.625 7.312C264.2 453.3 264 458.7 264 464.2c0 10.59 1.314 20.96 3.076 31.25-3.676.15-7.376.55-11.076.55-132.3 0-240-107.7-240-240 0-3.738.39-7.379.56-11.08 10.39 1.781 20.88 3.109 31.6 3.109 6.032 0 12.03-.25 18.03-.813 4.37-.416 7.62-4.316 7.22-8.716-.41-4.4-4.53-7.8-8.72-7.2-15.85 1.438-31.55.04-47-2.664 12.63-110.6 100.6-198.5 211.2-210.1 1.793 9.93 3.135 19.96 3.135 30.2 0 5.344-.25 10.69-.688 15.97-1.237 3.514 2.963 7.384 7.263 7.764.3.03.5.03.7.03 4.125 0 7.625-3.156 7.969-7.312.5-5.781.75-11.56.75-17.34 0-10.6-1.316-20.99-3.078-31.28C248.6 16.39 252.3 16 256 16c132.3 0 240 107.7 240 240 0 3.852-.398 7.602-.578 11.41-16.66-2.805-33.57-4.211-50.61-2.5-4.406.438-7.625 4.344-7.188 8.75.476 4.34 3.876 7.54 8.776 7.14zM214.1 125.5c-12.7 29.3-33.9 54.6-60.6 73.2-8.6 6.1-17.7 11.4-27.2 15.9-4 1.875-5.719 6.656-3.812 10.62 1.344 2.906 4.219 4.594 7.219 4.594 1.156 0 2.312-.25 3.406-.781a203.511 203.511 0 0 0 29.66-17.19c28.94-20.25 52.03-47.78 66.75-79.66 1.875-4 .125-8.75-3.906-10.59-3.917-1.793-8.817-.093-11.517 3.907zM378 283.4c-9.938 4.719-19.59 10.38-28.75 16.78-29.19 20.47-52.41 48.31-67.16 80.56-1.844 4-.062 8.75 3.969 10.59 1.062.5 2.188.719 3.312.719 3.031 0 5.938-1.72 7.281-4.688 13.56-29.62 34.91-55.25 61.78-74.06 8.438-5.906 17.31-11.12 26.44-15.47 4-1.906 5.688-6.688 3.781-10.66S381.1 281.6 378 283.4z" />
  </svg>
);

export default SvgBaseball;