"use client"; // ✅ Make this a client component

import { useState } from "react";

export default function Resume() {
    // State for toggling each section
    const [showObjective, setShowObjective] = useState(true);
    const [showEducation, setShowEducation] = useState(true);
    const [showProfessionalQualification, setShowProfessionalQualification] = useState(true);
    const [showWorkExperience, setShowWorkExperience] = useState(true);
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-center">Rameez Abdul Qadir</h1>
            <p className="text-gray-600 text-center">Email: rameezfudda@gmail.com | Phone: (+92) 312-8205599 | Address: House No E-23, Shahzada Plaza Gulmohar Street, Garden East, Khi </p>

            {/* Profile Image */}
            <div className="flex justify-center my-4">
                <img src="/PIC.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full object-cover" />
            </div>

            {/* Objective Section */}
<div className="mt-6">
    <button 
        className="w-full bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowObjective(!showObjective)}
    >
        {showObjective ? "Hide" : "Show"} Objective
    </button>
    {showObjective && (
        <div className="mt-3 bg-gray-100 p-4 rounded text-justify">
            <h2 className="text-xl font-semibold text-center">Objective</h2><br/>
            <p>
                A dynamic and results-driven <b>banking and finance professional</b> with over <b>15 years of expertise</b> in 
                <b> operations management, trade finance, financial analysis, and compliance</b> across leading financial institutions. 
                Holding an <b>Executive MBA from IBA Karachi</b>, a <b>Master’s in Economics</b>, and <b>professional banking certifications 
                (JAIBP, Associate Chartered Banker)</b>, I bring a strong analytical and strategic mindset to financial decision-making, 
                risk management, and operational excellence.
            </p><br/>
            <p>
                In addition to my banking credentials, I am currently advancing my expertise in <b>TypeScript, Next.js, and Tailwind CSS</b> 
                as part of the <b>Governor Sindh Initiative in collaboration with the University of Karachi</b>. This technological acumen 
                enhances my ability to <b>drive digital transformation, optimize financial systems, and implement data-driven solutions</b> 
                in modern banking. Passionate about leveraging both <b>financial and IT expertise</b> to enhance operational efficiency, 
                foster innovation, and contribute to the digital evolution of the banking sector.
            </p><br/>
            <p>
                Seeking a leadership role in a forward-thinking financial institution where I can integrate my <b>banking, financial analysis, 
                and technology expertise</b> to drive sustainable growth, enhance digital banking solutions, and streamline operations for 
                maximum efficiency.
            </p>
        </div>
    )}
</div>


            {/* Education Section */}
            <div className="mt-6">
                <button 
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowEducation(!showEducation)}
                >
                    {showEducation ? "Hide" : "Show"} Education
                </button>
                {showEducation && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Education</h2><br/>
                        <p>• <b>Executive Masters in Business Administration (2020) GPA 3.38 / 4.00 </b>-- Institute of Business Administration, IBA, Karachi Pakistan</p><br/>
                        <p>• <b>Masters in Economics – 2014  Second Division </b>-- University of Karachi, Pakistan</p><br/>
                        <p>• <b>Bachelors of Commerce - 2007 (Secured A Grade) </b>-- Government College of Commerce & Economics, Pakistan</p><br/>
                        <p>• <b>FA/F.Sc - 2005 (Secured 66.1 %) Pre Enigineering </b> -- St. Patrick’s College Karachi, Karachi Pakistan</p><br/>
                        <p>• <b>Matric - 2003 (Secured 78%) </b>-- National Tiny Tots Secondary School, Karachi Pakistan</p><br/>
                    </div>
                )}
            </div>

            <div className="mt-6">
                <button 
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowProfessionalQualification(!showProfessionalQualification)}
                >
                    {showProfessionalQualification ? "Hide" : "Show"} Professional Qualification
                </button>
                {showProfessionalQualification && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Professional Qualification</h2><br/>
                        <p>• <b>Associate Chartered Banker - 2012  </b>-- Chartered Banker Institute Scotland - Institute fo Bankers Pakistan</p><br/>
                        <p>• <b>JAIBP(Junior Associate of the Institute of Bankers Pakistan) - 2011 </b>-- Institute fo Bankers Pakistan</p><br/>
                        <p>• <b>Type Script, Next JS & Tailwind CSS (Agentic AI) In Progress </b>-- Governor Sindh Initiative in Collaboration with University of Karachi</p><br/>
                        
                    </div>
                )}
            </div>

            {/* Work Experience Section */}
            <div className="mt-6">
                <button 
                    className="w-full bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowWorkExperience(!showWorkExperience)}
                >
                    {showWorkExperience ? "Hide" : "Show"} Work Experience
                </button>
                {showWorkExperience && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Work Experience</h2><br/>
                        <p>The Bank of Khyber Area Operations Manager (AVP) (Sindh & Balochistan Region) Nov 2019 - Present</p><br/>
                        <p>The Bank of Khyber Manager Operations Nov 2014 to Oct 2019</p><br/>
                        <p>Bank Al Habib Limited Froegn Trade Incharge (OG-I) Jan 2012 to Nov 2014</p><br/>
                        <p>Bank Al Habib Limited Remittances & Foreign Trade Officer Jan 2010 to Dec 2011</p><br/>
                        <p>Bank Al Habib Limited Branch Banking & Operations March 2008 to Dec 2009</p><br/>
                    </div>
                )}
            </div>

            {/* Skills Section */}
            <div className="mt-6">
                <button 
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowSkills(!showSkills)}
                >
                    {showSkills ? "Hide" : "Show"} Skills
                </button>
                {showSkills && (
                    <div className="mt-3 bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <ul className="list-disc pl-5">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Next.js</li>
                            <li>Financial Analysis </li>
                            <li>Investment Analysis </li>
                            <li>Budgeting and Finance </li>
                            <li>Trade Finance</li>
                            <li>Ratio Analysis </li>
                            <li>Portfolio Analysis </li>
                            <li>Audit & Compliance </li>
                            <li>Shariah Compliance </li>
                            <li>Ms Office Proficient </li>
                            <li>Content Writing</li>
                            <li>Supply Chain & Negotiation Skills</li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
