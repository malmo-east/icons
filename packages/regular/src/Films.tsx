import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilms = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M512 32H160c-35.3 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM208 336h-48c-8.822 0-16-7.178-16-16v-40h64v56zm0-104h-64v-48h64v48zm0-96h-64V96c0-8.822 7.178-16 16-16h48v56zm208 200H256V232h160v104zm0-152H256V80h160v104zm112 136c0 8.822-7.178 16-16 16h-48v-56h64v40zm0-88h-64v-48h64v48zm0-96h-64V80h48c8.822 0 16 7.178 16 16v40zm-72 344H120C53.83 480 0 426.2 0 360V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
    </svg>
);

export default SvgFilms;
