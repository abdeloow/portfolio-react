// import { useState } from 'react';
// import { SKILLS } from '../../Utils/data';
// import './Skills.css'
// import SkillsCard from './SkillsCard/SkillsCard';
// import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

// function Skills() {

//     const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
//     const handleSelectedSkill = (data) => {
//         setSelectedSkill(data);
//     }

//     return (
//         <section className='skills-container'>
//             <h5>Technical Proficiency</h5>
//             <div className='skills-content'>
//                 <div className='skills'>
//                     {SKILLS.map((item) => (
//                         <SkillsCard key={item.title}
//                             iconUrl={item.icon}
//                             title={item.title}
//                             isActive={selectedSkill.title === item.title}
//                             onClick={() => {
//                                 handleSelectedSkill(item)
//                             }} />
//                     ))}
//                 </div>
//                 <div className='skills-info'>
//                     <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills} />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Skills;

import { useState } from 'react';
import { SKILLS } from '../../Utils/data';
import './Skills.css';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

function Skills() {
    // Set the initial selected skill to the first item in SKILLS
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    // Handler to update the selected skill on click
    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <section className='skills-container'>
            <h5>Technical Proficiency</h5>
            <div className='skills-content'>
                {/* List of all the skill categories */}
                <div className='skills'>
                    {SKILLS.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => handleSelectedSkill(item)}
                        />
                    ))}
                </div>

                {/* Displaying detailed information for the selected skill */}
                <div className='skills-info'>
                    <SkillsInfoCard heading={selectedSkill.title} parts={selectedSkill.parts} />
                </div>
            </div>
        </section>
    );
}

export default Skills;
