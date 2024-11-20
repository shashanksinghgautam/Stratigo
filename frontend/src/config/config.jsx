import {
    Layout,
    Calendar,
    BarChart,
} from "lucide-react";
import amazon from "../assets/companies/amazon.svg";
import atlassian from "../assets/companies/atlassian.svg";
import google from "../assets/companies/google.webp";
import microsoft from "../assets/companies/microsoft.webp";
import netflix from "../assets/companies/netflix.png";
import ibm from "../assets/companies/ibm.svg";
import meta from "../assets/companies/meta.svg";
import uber from "../assets/companies/uber.svg";

export const faqs = [
    {
        question: "What is Trakz?",
        answer:
            "Trakz is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
    },
    {
        question: "How does Trakz compare to other project management tools?",
        answer:
            "Trakz offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
    },
    {
        question: "Is Trakz suitable for small teams?",
        answer:
            "Absolutely! Trakz is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from Trakz's features.",
    },
    {
        question: "What key features does Trakz offer?",
        answer:
            "Trakz provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
    },
    {
        question: "Can Trakz handle multiple projects simultaneously?",
        answer:
            "Yes, Trakz is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes Trakz ideal for organizations juggling multiple projects or clients.",
    },
    {
        question: "Is there a learning curve for new users?",
        answer:
            "While Trakz is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
    },
];

export const features = [
    {
        title: "Intuitive Kanban Boards",
        description:
            "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
        icon: Layout,
    },
    {
        title: "Powerful Sprint Planning",
        description:
            "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
        icon: Calendar,
    },
    {
        title: "Comprehensive Reporting",
        description:
            "Gain insights into your team's performance with detailed, customizable reports and analytics.",
        icon: BarChart,
    },
];


export const companyPaths = [
    {
        "name": "amazon",
        "path": amazon,
        "id": 1
    },
    {
        "name": "atlassian",
        "path": atlassian,
        "id": 2
    },
    {
        "name": "google",
        "path": google,
        "id": 3
    },
    {
        "name": "ibm",
        "path": ibm,
        "id": 4
    },
    {
        "name": "meta",
        "path": meta,
        "id": 5
    },
    {
        "name": "microsoft",
        "path": microsoft,
        "id": 6
    },
    {
        "name": "netflix",
        "path": netflix,
        "id": 7
    },
    {
        "name": "uber",
        "path": uber,
        "id": 8
    }
]
