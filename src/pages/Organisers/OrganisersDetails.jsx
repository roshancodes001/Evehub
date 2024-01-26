import React, { useState } from "react";
import organiserImg from "../../assets/images/organiser-img02.png";
import starIcon from "../../assets/images/Star.png";
import OrganiserAbout from "./OrganiserAbout";
import Feedback from "./Feedback";

const OrganisersDetails = () => {
    const [tab, setTab] = useState('about'); // Correct usage of useState

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid md:grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5">
                            <figure className="max-w-[200px] max-h-[200px]">
                                <img src={organiserImg} className="rounded-[10px]" alt="" />
                            </figure>
                            <div>
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg-px6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                    Concert
                                </span>
                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                    Conc
                                </h3>
                                <div className="flex items-center gap-[6px]">
                                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                        <img src={starIcon} alt="star"/> 4.8
                                    </span>
                                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] font-semibold text-textColor">(272)</span>
                                </div>
                                <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                            <button 
                                onClick={() => setTab('about')}
                                className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                            >
                                About
                            </button>
                            <button 
                                onClick={() => setTab('feedback')}
                                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                            >
                                Feedbacks
                            </button>
                        </div>
                        <div className="mt-[50px]">
                            {tab === 'about' && <OrganiserAbout/>} 
                            { tab === 'feedback' && <Feedback/>}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganisersDetails;
