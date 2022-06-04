import * as React from 'react';
import { SVGProps } from 'react';

const SvgPipeValve = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M488 160c-13.25 0-24 10.75-24 24v8H280v-77.2l118.2 13.15c4.512.512 9.023-.96 12.42-3.969C414 120.9 416 116.5 416 112V80a16.07 16.07 0 0 0-5.344-11.94c-3.393-3.008-7.904-4.48-12.42-3.969L280 77.25V56c0-13.25-10.8-24-24-24s-24 10.75-24 24v21.25L113.8 64.1c-4.6-.52-9.1.96-12.5 3.96C97.95 71.1 96 75.46 96 80v32c0 4.543 1.951 8.896 5.344 11.94a16.186 16.186 0 0 0 12.456 3.96L232 114.8V192H48v-8c0-13.2-10.75-24-24-24S0 170.8 0 184v272c0 13.2 10.75 24 24 24s24-10.75 24-24v-8h416v8c0 13.25 10.75 24 24 24s24-10.8 24-24V184c0-13.2-10.8-24-24-24zm-24 240H48V240h416v160z" />
    </svg>
);

export default SvgPipeValve;
