
export const SKILLS = [
    {
        title: 'Frontend',
        icon: './assets/images/frontend.png',
        parts: [
            {
                label: 'Languages',
                skills: [
                    { skill: "HTML5", version: '5.0' },
                    { skill: "CSS3 (Sass/SCSS)", version: '3.0' },
                    { skill: "JavaScript", version: 'ES6' }
                ]
            },
            {
                label: 'Frameworks',
                skills: [
                    { skill: "React.js", version: '18.0' }
                ]
            },
            {
                label: 'Others',
                skills: [
                    { skill: "Webpack", version: '5.0' }
                ]
            }
        ]
    },
    {
        title: 'Backend',
        icon: './assets/images/backend.png',
        parts: [
            {
                label: 'Languages',
                skills: [
                    { skill: "C#", version: '11' },
                    { skill: "TypeScript", version: '4.5' }
                ]
            },
            {
                label: 'Frameworks',
                skills: [
                    { skill: "ASP .Net", version: '7.0' },
                    { skill: "Node.js", version: '16.0' }
                ]
            },
            {
                label: 'Others',
                skills: [
                    { skill: "Entity Framework", version: '6.4' }
                ]
            }
        ]
    },
    {
        title: 'Tools',
        icon: './assets/images/tools.png',
        parts: [
            {
                label: 'Web',
                skills: [
                    { skill: "Swagger", version: '3.0' },
                    { skill: "Postman", version: '9.0' }
                ]
            },
            {
                label: 'APIs',
                skills: [
                    { skill: "RestAPI", version: 'v2' },
                    { skill: "GraphQL", version: '1.0' },
                    { skill: "WebSocket", version: 'v13' }
                ]
            },
            {
                label: 'IDE',
                skills: [
                    { skill: "Visual Studio Code", version: '1.70' },
                    { skill: "Visual Studio 2022", version: '16.8' }
                ]
            },
            {
                label: 'Testing',
                skills: [
                    { skill: "Selenium", version: '4.0' }
                ]
            }
        ]
    },
    {
        title: 'Methodologies',
        icon: './assets/images/design.png',
        parts: [
            {
                label: 'Software Development Process',
                skills: [
                    { skill: "Scrum", version: 'v1' },
                    { skill: "Agile", version: 'v2' },
                    { skill: "Sprint", version: 'v1' }
                ]
            },
            {
                label: 'Architecture & Design',
                skills: [
                    { skill: "Domain Driven Design" },
                    { skill: "Test-Driven Design" },
                    { skill: "Behavior-Driven Design" }
                ]
            },
            {
                label: 'Others',
                skills: [
                    { skill: "Kanban" },
                    { skill: "IaaS" },
                    { skill: "PaaS" },
                    { skill: "SaaS" }
                ]
            }
        ]
    }
];


export const WORK_EXPERIENCE = [
    {
        title: 'API Developer at ELIOTRON',
        date: '04/2024 - Present',
        responsabilities: [
            'Rebuilt a component of a web application that integrates with APIs for SaaS services.',
            'Designed and developed RESTful APIs using ASP.NET Core 7.0 and Node.js 16.0, focusing on scalability, performance, and modifying transformation middleware for enhanced data processing.',
            'Implemented API security with OAuth 2.0 and JWT for secure data access.',
            'Performed unit testing and debugging with SonarAnalyzer and Postman to ensure the Back testing engine and API integrations were reliable, following TDD and BDD practices.',
            'Developed GraphQL APIs using Apollo Server 3.0, optimizing schema design for efficient data retrieval.',
            'Collaborated with frontend teams to integrate APIs, using Postman 9.0 for testing.',
        ]
    },
    {
        title: 'Back-End ASP.Net Developer at Nidokri.LTD',
        date: '04/2023 - 04/2024',
        responsabilities: [
            'Developed secure APIs for real-time data retrieval and trade execution using ASP.NET Core and OAuth for authentication.',
            'Set up HealthCheck middleware and ICMP checks to monitor application health, and configured API routing with Swagger.',
            'Built a Back testing engine library in C# 11 and .NET 7 to simulate trades based on user-defined strategies, including algorithms like Moving Average Crossover and RSI.',
            'Performed unit testing and debugging with SonarAnalyzer and Postman to ensure the Back testing engine and API integrations were reliable, following TDD and BDD practices.',
            'Created a user-friendly front-end interface with ReactJS and TypeScript for easy strategy input and result viewing.',
            'Visualized Back testing engine results using Chart.js to create interactive graphs for better data interpretation.',
            'Managed CI/CD pipelines and deployment processes with Azure DevOps to streamline development workflows.'
        ]
    },
    {
        title: 'QA Automation Engineer at MONARKIT',
        date: '06/2022 - 03/2023',
        responsabilities: [
            'Developed and executed manual and automated tests using Selenium, xUnit, and Postman.',
            'Mocked interfaces using Moq for isolating dependencies during testing.',
            'Collaborated with developers and stakeholders to report and track defects, improving overall software quality.',
            'Tested the staging application and its features using Selenium for automated UI testing.',
            'Recorded and replayed test scenarios with Selenium IDE for rapid test case creation.',
            'Conducted static code analysis using SonarQube and contributed to process improvements in testing methodologies.'
        ]
    }
]

export const PROJECTS = [
    {
        title: 'Project 1',
        domain: 'Web Dev - SaaS',
        customer: 'Fiverr',
        duration: '180 days',
        tasks: [
            'Lorem ipsum with C#',
            'Loreming ASP.NET and React'
        ],
        demoLink: 'https://example.com/demo1'
    },
    {
        title: 'Project 2',
        domain: 'Mobile App Development',
        customer: 'Upwork',
        duration: '120 days',
        tasks: [
            'Developed a mobile app using React Native',
            'Integrated Firebase for backend services'
        ],
        demoLink: 'https://example.com/demo2'
    },
    {
        title: 'Project 3',
        domain: 'E-commerce Platform',
        customer: 'Freelancer',
        duration: '90 days',
        tasks: [
            'Built a full-stack application with MERN',
            'Implemented payment gateway integration'
        ],
        demoLink: 'https://example.com/demo3'
    }
];
