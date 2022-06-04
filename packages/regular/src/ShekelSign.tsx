import * as React from 'react';
import { SVGProps } from 'react';

const SvgShekelSign = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M184 32c66.3 0 120 53.73 120 120v184c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-39.8-32.2-72-72-72H64v376c0 13.3-10.75 24-24 24s-24-10.7-24-24V56c0-13.25 10.75-24 24-24h144zm-16 448c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v248h120c39.8 0 72-32.2 72-72V56c0-13.25 10.7-24 24-24s24 10.75 24 24v304c0 66.3-53.7 120-120 120H168z" />
    </svg>
);

export default SvgShekelSign;
