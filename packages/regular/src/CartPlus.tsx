import * as React from 'react';
import { SVGProps } from 'react';

const SvgCartPlus = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M96 0c11.5 0 21.4 8.19 23.6 19.51l42 220.49h316l43.1-160H472c-13.3 0-24-10.75-24-24s10.7-24 24-24h80c7.5 0 14.5 3.47 19 9.4 4.6 5.93 6.1 13.63 4.2 20.84l-56 207.96c-2.8 10.5-12.3 17.8-23.2 17.8H170.7l9.2 48H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm384 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM232 128c0-13.3 10.7-24 24-24h40V64c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24z" />
    </svg>
);

export default SvgCartPlus;
