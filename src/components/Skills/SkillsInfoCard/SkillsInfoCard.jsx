import React from 'react';
import './SkillsInfoCard.css'

function SkillsInfoCard({ heading, parts }) {
    return (
        <div className='skills-info-card'>
            <h6>{heading}</h6>
            <div className='skills-info-content'>
                {parts.map((part, partIndex) => (
                    <React.Fragment key={`part_${partIndex}`}>
                        <h6>{part.label}</h6>
                        <table className='skills-table'>
                            <tbody>
                                {part.skills.map((item, index) => (
                                    <tr key={`skill_${index}`}>
                                        <td>{item.skill}</td>
                                        <td>{item.version}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SkillsInfoCard;

// function SkillsInfoCard({ heading, skills }) {
//     return (
//         <div className='skills-info-card'>
//             <h6>{heading}</h6>
//             <div className='skills-info-content'>
//                 {skills.map((item, index) => (
//                     <React.Fragment key={`skill_${index}`}>
//                         <div className='skill-info'>
//                             <p>{item.skill}</p>
//                             <p className='percentage'>{item.percentage}</p>
//                         </div>
//                         <div className='skill-progress-bg'>
//                             <div className='skill-progress' style={{ width: item.percentage }} />
//                         </div>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </div>
//     )
// }