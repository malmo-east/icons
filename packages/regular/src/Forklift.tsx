import * as React from 'react';
import { SVGProps } from 'react';

const SvgForklift = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M80 160h16V40c0-22.09 17.9-40 40-40h156.1c17.5 0 32.4 10.28 38.3 25.81l83 218.89c1.7 4.6 2.6 9.4 2.6 14.2v85.5c19.6 17.6 32 43.2 32 71.6 0 53-43 96-96 96-53.9 0-96-43-96-96h-64c0 53-43 96-96 96-53.02 0-96-43-96-96V240c0-44.2 35.82-80 80-80zm280.3 80L287.4 48H144v123.4l96 68.6h120.3zm-148.2 39.1L112.6 208H80c-17.67 0-32 14.3-32 32v92.8c14.12-8.1 30.51-12.8 48-12.8 35.5 0 66.6 19.3 83.2 48h89.6c16.6-28.7 47.7-48 83.2-48 5.5 0 10.8.5 16 1.3V288H239.1c-10 0-18.9-3.1-27-8.9zM96 464c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48zm256 0c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm176-64h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H504c-13.3 0-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24v376z" />
    </svg>
);

export default SvgForklift;
