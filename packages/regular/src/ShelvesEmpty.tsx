import * as React from 'react';
import { SVGProps } from 'react';

const SvgShelvesEmpty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M616 0c-13.25 0-24 10.75-24 24v120H48V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24v-40h544v40c0 13.25 10.75 24 24 24s24-10.7 24-24V24c0-13.25-10.7-24-24-24zM48 400V192h544v208H48z" />
    </svg>
);

export default SvgShelvesEmpty;
