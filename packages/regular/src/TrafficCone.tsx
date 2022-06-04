import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M217.8 14.96C221.4 5.914 230.2 0 240 0h32c9.8 0 18.6 5.914 22.2 14.96L476.9 464H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h11.11L217.8 14.96zM125.1 368l-38.17 96H425.1L386 368H125.1zm241.4-48-45.6-112H191.1l-45.6 112h221zM210.6 160h90.8L255.1 48.36 210.6 160z" />
    </svg>
);

export default SvgTrafficCone;
