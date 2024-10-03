import frontendIcon from '../assets/images/frontend.png';
import backendIcon from '../assets/images/backend.png';
import toolsIcon from '../assets/images/tools.png';
import designIcon from '../assets/images/design.png';

export const SKILLS = [
    {
        title: 'Frontend',
        icon: frontendIcon,
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
        icon: backendIcon,
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
        icon: toolsIcon,
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
        icon: designIcon,
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
            'Built a Web API using ASP.NET Core 7.0, integrating OpenAI for dynamic quiz questions.',
            'Implemented JWT Authentication for secure API access and role-based control.',
            'Utilized layered architecture with Repository, Unit of Work, and CQRS patterns for scalability.',
            'Managed data with Entity Framework Core and SQL Server, ensuring error handling and validation.',
            'Integrated Swagger for API documentation and used Agile methodologies with Git and MS-Teams for project management.',
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
        title: 'Software Engineer At WAME Production',
        date: '06/2022 - 04/2023',
        responsabilities: [
            'Developed a WPF-based desktop application for real-time monitoring of running processes using MVVM architecture.',
            'Implemented features for tracking processes, network traffic, and remote IP connections with detailed process information.',
            'Created command classes for user interactions, including process navigation and refreshing active TCP processes',
            'Designed ViewModel classes to manage presentation logic and facilitate navigation within the application.',
            'Integrated NetstatOutputHelper to gather and process network-related data for remote IP traffic analysis.',
            'Conducted static code analysis using SonarQube and contributed to process improvements in testing methodologies.'
        ]
    }
]

export const PROJECTS = [
    {
        title: 'Cross-Exchange Trading Aggregator',
        domain: 'Web Api',
        customer: 'Freelance',
        duration: '120 days',
        tasks: [
            'Developed a C# demo for a Cross-Exchange Trading Aggregator, showcasing triangular arbitrage detection using live market data from exchanges like Binance and Poloniex.',
            'Implemented backend architecture with service orchestration, exchange interactions, and graph-based algorithms for efficient trade cycle identification.',
            'Utilized design patterns such as Factory, Repository, and Strategy, and integrated RESTful APIs for data retrieval, while ensuring separation of concerns in the application structure.'
        ],
        demoLink: 'https://github.com/abdeloow/Triangular-Arbitrage'
    },
    {
        title: '"Next-Gen ASP.NET Core WebAPI Starter Kit',
        domain: 'Web App',
        customer: 'Fiverr',
        duration: '180 days',
        tasks: [
            'Developed an ASP.NET Core 5 WebAPI template featuring default roles and credentials, JWT authentication, and health check capabilities for service status monitoring.',
            'Implemented key features including N-Tier architecture, role-based authorization, Entity Framework Core, Redis caching, and comprehensive user management functionalities.',
            'Utilized modern technologies such as GraphQL, MSSQL, MongoDB, Swagger, and Serilog to create a clean architecture that streamlines the setup of new WebAPI projects.'
        ],
        demoLink: 'https://github.com/abdeloow/webapi-asp-react'
    },
    {
        title: 'Process Dissection',
        domain: 'Desktop Application',
        customer: 'Freelancer',
        duration: '180 days',
        tasks: [
            'Developed a WPF desktop application for real-time monitoring of processes using MVVM architecture, implementing features for tracking processes, network traffic, and remote IP connections.',
            'Created command classes for user interactions and designed ViewModel classes to manage presentation logic and facilitate navigation.',
            'Integrated NetstatOutputHelper for network data analysis and conducted static code analysis with SonarQube to improve testing methodologies.'
        ],
        demoLink: 'https://github.com/abdeloow/ProcessDissect'
    }
];
