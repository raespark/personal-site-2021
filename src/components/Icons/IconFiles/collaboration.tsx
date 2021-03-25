import React from 'react';

import { SVGProps } from '../index';

const Communication: React.FC<SVGProps> = ({
    width = 50,
    height = 50,
    className,
}: SVGProps) => {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            viewBox="0 20 480 480"
        >
            <g>
                <path d="M72.452,452.234,34.9,408.418l18.761-18.761A8,8,0,0,0,56,384V312a16.019,16.019,0,0,1,16-16H96v20.687L82.343,330.343l11.314,11.314,36-36a8.97,8.97,0,0,1,12.686,12.686l-36,36a8,8,0,0,0,0,11.314,37.3,37.3,0,0,1,0,52.686ZM276.019,286.181A72.014,72.014,0,0,0,344,406.211V480H154a42.047,42.047,0,0,1-42-42v-2.687l5.657-5.656a53.282,53.282,0,0,0,5.238-69.238l30.762-30.762a24.971,24.971,0,0,0-35.314-35.314L112,300.687V208h60.67a8,8,0,0,0,7.415-11,56,56,0,0,1,54.352-76.947c28.255,1.195,51.736,24.24,53.457,52.465A55.7,55.7,0,0,1,283.915,197a8,8,0,0,0,7.415,11H344v57.793a72.059,72.059,0,0,0-67.981,20.388ZM400,328H326.212a71.888,71.888,0,0,0-5.5-47.518A57.185,57.185,0,0,1,328,280a55.7,55.7,0,0,1,21,4.085,8,8,0,0,0,11-7.415V200a8,8,0,0,0-8-8H302.211a72,72,0,1,0-140.419,0H104a8,8,0,0,0-8,8v45.642c-22.352-6.754-38.945-27.367-39.947-51.2A56,56,0,0,1,133,140.085a8,8,0,0,0,11-7.415V64H358a42.047,42.047,0,0,1,42,42v18.687l-6.343-6.344a24.971,24.971,0,1,0-35.314,35.314l30.767,30.767a53.34,53.34,0,0,0,5.233,69.233L400,259.313Zm39.548-51.766-33.891-33.891a37.3,37.3,0,0,1,0-52.686,8,8,0,0,0,0-11.314l-36-36a8.97,8.97,0,0,1,12.686-12.686l36,36,11.314-11.314L416,140.687V120h24a16.019,16.019,0,0,1,16,16v72a8,8,0,0,0,2.343,5.657L477.1,232.418Z"></path>
            </g>
        </svg>
    );
};

export default Communication;