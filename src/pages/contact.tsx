import React from 'react';

import Header, { NavSelected } from '../components/header';

const Projects: React.FC = () => {
    return (
        <>
            <Header selected={NavSelected.contact} />
        </>
    );
};

export default Projects;
