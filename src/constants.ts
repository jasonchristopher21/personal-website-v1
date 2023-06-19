import marinachain from "@/assets/images/marinachain.jpg"
import nus from "@/assets/images/nus.png"

import pinus_study from "@/assets/images/projects/pinus_study.png"
import discountlah from "@/assets/images/projects/discountlah.png"
import classroom360 from "@/assets/images/projects/classroom360.png"
import timekeeper from "@/assets/images/projects/timekeeper.png"
import moneyTap from "@/assets/images/projects/moneytap.png"
import appChallenge from "@/assets/images/projects/appChallenge.png"
import qnaWebsite from "@/assets/images/projects/qnaWebsite.png"
import qna from "@/assets/images/qna.jpg"
import nes from "@/assets/images/nes.png"
import commit from "@/assets/images/commit.png"
import pinus from "@/assets/images/pinus.jpg"

export const experience = [
    [
        {
            image: marinachain,
            title: "Software Engineer Intern",
            company: "MarinaChain",
            link: "https://marinachain.io/",
            time: "May 2023 - Present",
            description:
                [
                    "Worked on fullstack development with Vue and Django.",
                    "Developed authentication systems and query optimisation.",
                    "Collaborated under AGILE bi-weekly sprint cycles.",
                ]
        },
        {
            image: nus,
            title: "Software Engineer",
            company: "NUS CS2030S LLM Project",
            time: "June 2023 - Present",
            link: "https://www.comp.nus.edu.sg/",
            description:
                [
                    "Currently contributing to the integration of LLM for CS2030S lab grading.",
                    "Supervised by Prof. Boyd Anderson and Dr. Adi Yoga Sidi Prabawa.",
                ]
        },
    ],
    [
        {
            image: nus,
            title: "Teaching Assistant",
            company: "National University of Singapore",
            link: "https://www.comp.nus.edu.sg/",
            time: "January - May 2023",
            description:
                [
                    "Taught CS2040S Data Structures and Algorithms. Feedback score: 5.0/5.0",
                    "Taught CS2030S Programming Methodology II. Feedback score: 4.8/5.0",
                ]
        },
        {
            image: nus,
            title: "Teaching Assistant",
            company: "National University of Singapore",
            time: "August - December 2022",
            link: "https://www.comp.nus.edu.sg/",
            description:
                [
                    "Taught CS1101S Programming Methodology. Feedback score: 4.9/5.0",
                    "Taught CS2030S Programming Methodology II. Feedback score: 4.3/5.0",
                ]
        },
        {
            image: qna,
            title: "Content Creator",
            company: "Math Q&A",
            time: "August 2020 - May 2023",
            link: "https://instagram.com/math.qna",
            description:
                [
                    "Created mathematics education content for 210,000+ followers on Instagram.",
                    "Collaborated with 11 other creators to produce content for this non-profit organisation.",
                ]
        }
    ],
    [
        {
            image: pinus,
            title: "Frontend Developer",
            company: "Perhimpunan Indonesia NUS (PINUS)",
            link: "https://pinusonline.org/",
            time: "August 2022 - May 2023",
            description:
                [
                    "Collaborated with 8 developers to build a study forum for NUS Indonesian students.",
                    "Implemented a customisable Rich-text editor with React and Slate JS.",
                    "Learned hands-on REST API and their implementation with React.",
                ]
        },
        {
            image: nes,
            title: "Web Developer",
            company: "NUS Entrepreneurship Society",
            time: "August 2022 - May 2023",
            link: "https://www.nusentresoc.com/",
            description:
                [
                    "Collaborated with 3 developers to build a website for Ground Zero 2023.",
                    "Implemented React and Tailwind with Responsive Mobile Design.",
                ]
        },
        {
            image: commit,
            title: "Training Member",
            company: "NUSSU CommIT",
            time: "August 2022 - May 2023",
            link: "https://www.nussucommit.com",
            description:
                [
                    "Provided weekly training on Python Programming, Web Developmnt and MS Excel.",
                    "Engaged with a 30+ students audience each session from various faculties.",
                ]
        },
    ],
]

export const featuredProjects = [
    {
        display: "right",
        title: "PINUS Study",
        subtitle: "A study forum for NUS Indonesian Students",
        image: pinus_study,
        description: [
            "Collaborated with 8 developers",
            "Implemented a customisable Rich-text editor",
        ],
        stackLogos: [
            "React",
            "Slate JS",
            "TypeScript"
        ],
        github: "https://github.com/PINUSTECH-2022/pinus-study-frontend",
        link: "https://pinus-study.netlify.app",
    },
    {
        display: "left",
        title: "DiscountLah",
        subtitle: "A one-stop app for managing your coupons",
        image: discountlah,
        description: [
            "Integrated Google Maps API with current location",
            "Awarded Advanced level (Apollo) for NUS CP2106 Orbital",
        ],
        stackLogos: [
            "React Native", "Firebase", "Google Maps"
        ],
        github: "https://github.com/jasonchristopher21/DiscountLah",
        link: "https://drive.google.com/file/d/1X5QG69LH66FvmuajtEsuszGX2tnTiP-Z/view"
    }
]

export const otherProjects = [
    {
        title: "Classrooom360",
        description: "A Transformative VR learning platform with immersive experiences",
        image: classroom360,
        stack: [
            "React360",
        ],
        github: "https://github.com/melissaharijanto/pink-unicorn",
        link: "https://classroom-360.netlify.app",
    },
    {
        title: "Timekeeper",
        description: "A slides timer and presenter notes web app designed for teaching",
        image: timekeeper,
        stack: [
            "Vue",
            "Django",
        ],
        github: "https://github.com/jasonchristopher21/timekeeper",
        link: "",
    },
    {
        title: "Timekeeper",
        description: "A time management app for NUS students",
        image: pinus_study,
        stack: [
            "Vue",
            "Django",
        ],
        github: "https://github.com/PINUSTECH-2022/pinus-study-frontend",
        link: "",
    },
]

export const designs = [
    {
        title: "MoneyTap",
        description: "An expense-tracking app inspired by amortisation accounting method",
        image: moneyTap,
        link: "https://classroom-360.netlify.app",
    },
    {
        title: "SIA App Challenge",
        description: "Work in progress for the Singapore Airlines App Challenge 2023",
        image: appChallenge,
        link: "https://classroom-360.netlify.app",
    },
    {
        title: "Q&A Website",
        description: "A corporate website for Q&A Group, non-profit edtech organisation",
        image: qnaWebsite,
        link: "https://classroom-360.netlify.app",
    },
]