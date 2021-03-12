import React from 'react';

import Header, { NavSelected } from '../components/header';

const Projects: React.FC = () => {
    return (
        <>
            <Header selected={NavSelected.projects} />
        </>
    );
};

export default Projects;
