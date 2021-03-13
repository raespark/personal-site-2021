import React from 'react';
import { HelpCircle } from 'react-feather';

import './styles.scss';

interface Skill {
    name: string;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

const skillList: SkillCategory[] = [
    {
        name: 'Programming Languages',
        skills: [
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'Java' },
            { name: 'Python' },
        ],
    },
    {
        name: 'Tools and Frameworks',
        skills: [
            { name: 'React' },
            { name: 'Redux' },
            { name: 'Node' },
            { name: 'Git' },
            { name: 'CSS' },
            { name: 'Mocha' },
        ],
    },
    {
        name: 'Soft Skills',
        skills: [
            { name: 'Communication' },
            { name: 'Mentorship' },
            { name: 'Leadership' },
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
                                        <HelpCircle
                                            className="skill-icon"
                                            strokeWidth={1}
                                        />
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
