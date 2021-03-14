import React from 'react';

import {
    SVGProps,
    Communication,
    CSS,
    Git,
    HTML,
    Java,
    JavaScript,
    Jest,
    Leadership,
    Mentorship,
    Mocha,
    Node,
    Python,
    ReactIcon,
    Redux,
    TypeScript,
} from '../../Icons';

import './styles.scss';

interface Skill {
    name: string;
    icon: React.FC<SVGProps>;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

const skillList: SkillCategory[] = [
    {
        name: 'Programming Languages',
        skills: [
            { name: 'JavaScript', icon: JavaScript },
            { name: 'Java', icon: Java },
            { name: 'Python', icon: Python },
            { name: 'TypeScript', icon: TypeScript },
        ],
    },
    {
        name: 'Tools and Frameworks',
        skills: [
            { name: 'React', icon: ReactIcon },
            { name: 'Redux', icon: Redux },
            { name: 'Node', icon: Node },
            { name: 'Git', icon: Git },
            { name: 'HTML', icon: HTML },
            { name: 'CSS', icon: CSS },
            { name: 'Mocha', icon: Mocha },
            { name: 'Jest', icon: Jest },
        ],
    },
    {
        name: 'Soft Skills',
        skills: [
            { name: 'Communication', icon: Communication },
            { name: 'Mentorship', icon: Mentorship },
            { name: 'Leadership', icon: Leadership },
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <h2 className="skills-title">What can I do?</h2>
            <hr className="skill-hr" />
            <div className="skill-list">
                {skillList.map((skillCategory: SkillCategory, index) => (
                    <div
                        key={`skill-category-${index}`}
                        className="skill-category"
                    >
                        <h3 className="skill-category-title">
                            {skillCategory.name}
                        </h3>
                        <div className="skill-category-skills">
                            {skillCategory.skills.map((skill: Skill, index) => (
                                <div
                                    key={`skill-category-${index}`}
                                    className="skill"
                                >
                                    <div className="skill-bubble">
                                        {skill.icon({
                                            className: 'skill-icon',
                                        })}
                                    </div>
                                    <div className="skill-name">
                                        {skill.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
