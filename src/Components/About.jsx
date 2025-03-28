import React from "react";
import img from '../assets/Client_Fold-4-desk.png'
import { FileText, BrainCircuit, MessagesSquare, Handshake } from 'lucide-react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
    return (
        <>
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    {/* Hero Section */}
                    <section className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl font-bold text-blue-600 mb-4">
                            About Our Hiring Process
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Join us and be part of our mission to create a positive impact
                            through innovative solutions.
                        </p>
                        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
                            Explore Opportunities
                        </button>
                    </section>

                    {/* Company Overview */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 animate-slide-up">
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
                            <h2 className="text-3xl font-bold text-blue-700 mb-4">
                                Who We Are
                            </h2>
                            <p className="text-gray-600">
                                "We are a leading tech company focused on innovation and
                                excellence. Our vision is to create a dynamic work environment
                                where individuals can grow and thrive
                                We don't just follow trends—we set them, delivering impactful solutions that make a difference
                                Integrity, agility, and forward-thinking define how we operate and succeed in a competitive world."
                            </p>
                        </div>
                        <img
                            src={img}
                            alt="Company"
                            className="w-full h-[500px] rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        />
                    </section>

                    {/* Why Join Us */}
                    <section className="mb-12 animate-slide-right">
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
                            Why Join Us?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Growth Opportunities",
                                    desc: "Unlock your potential and achieve career growth.",
                                },
                                {
                                    title: "Collaborative Environment",
                                    desc: "Be part of an inclusive and dynamic team.",
                                },
                                {
                                    title: "Work-Life Balance",
                                    desc: "Maintain a healthy balance between work and life.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
                                >
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hiring Process */}
                    <section className="mb-12 animate-fade-in">
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
                            Our Hiring Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Online Application",
                                    icon: <FileText className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                                },
                                {
                                    title: "Aptitude Test",
                                    icon: <BrainCircuit className="w-10 h-10 mx-auto mb-3 text-purple-600" />
                                },
                                {
                                    title: "Technical/HR Interview",
                                    icon: <MessagesSquare className="w-10 h-10 mx-auto mb-3 text-green-600" />
                                },
                                {
                                    title: "Onboarding/Joining",
                                    icon: <Handshake className="w-10 h-10 mx-auto mb-3 text-orange-600" />
                                },
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-all duration-300 text-center"
                                >
                                    {step.icon}
                                    <h3 className="text-xl font-bold mb-2">Step {index + 1}</h3>
                                    <p className="text-gray-600">{step.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Meet the Team */}
                    <section className="mb-12 animate-slide-left">
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
                            Meet Our Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
                            {[
                                {
                                    name: "Anish Shah",
                                    role: "CEO",
                                },
                                {
                                    name: "Maya Kapoor",
                                    role: "CTO",
                                },
                                {
                                    name: "Harikumar Nair",
                                    role: "HR Manager",
                                },
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
                                >
                                    {/* Name & Role */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                        <p className="text-blue-600 font-medium">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="text-center mb-12 animate-fade-in">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-gray-600">
                            Have questions? Reach out to us for more information.
                        </p>
                        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
                            Contact Us
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
};
export default About;