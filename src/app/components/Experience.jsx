export default function Experience() {
    return (
        <div className="flex lg:items-center flex-col lg:flex-row  gap-32 py-32 px-5 lg:justify-between sm:px-10 w-full  bg-white">

            <div className="left">
                {/* ui one */}
                <div className="lg:px-0 sm:px-5 px-0 mx-auto text-center lg:text-left">
                    <div className="max-w-[800px] flex flex-col gap-5 mt-14">
                        <p className="heading hidden text-sm text-[#ff735c] font-semibold uppercase tracking-wide">
                        Problem Solving -
                        </p>
                        <h1 className="text-3xl sm:text-6xl font-bold text-gray-800">
                        I am passionate about turning <span className="text-[#ff735c]">challenges</span> into <span className="text-[#ff735c]">solutions</span>.
                        </h1>
                        <p className="text-gray-600 lg:flex hidden text-[14px] sm:text-[16px] leading-relaxed">
                        I thrive on breaking down complex problems and designing efficient, scalable solutions. Whether it's debugging an issue, optimizing performance, or building user-friendly features, I approach each challenge with curiosity, logic, and a commitment to clean, maintainable code.
                        </p>
                    </div>
                </div> 
                {/* ui two */}
                <div className="relative lg:mx-0">
                    {/* Experience text behind */}
                    <h1 data-aos="fade-in" data-aos-delay="1000" className="sm:text-6xl text-5xl -rotate-6 absolute inset-0 mx-auto -ml-4 left-[15%] sm:left-[25%]  lg:left-0 w-fit -mt-10 text-center play text-gray-200 font-bold z-0 pointer-events-none">
                        Experience
                    </h1>

                    {/* Foreground content */}
                    <div className="flex z-10 relative gap-10 sm:gap-20 flex-row max-w-400px justify-center lg:justify-start items-center mt-14">
                        <div>
                            <p className="text-3xl sm:text-4xl  mb-2 text-[#ff735c] font-bold">7+</p>
                            <p className="text-[14px] sm:text-[16px]">Years of <br />Experience</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl  mb-2 text-[#ff735c] font-bold">199+</p>
                            <p className="text-[14px] sm:text-[16px]">Satisfied <br />Customers</p>
                        </div>

                        <div>
                            <p className="text-3xl sm:text-4xl  mb-2 text-[#ff735c] font-bold">320+</p>
                            <p className="text-[14px] sm:text-[16px]">Projects <br />Completed</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="right lg:w-1/2 lg:min-w-[450px]">
                <div className="w-full min-h-[450px] h-fit flex flex-col gap-5  rounded-md relative -mb-[100px]">
                    {/* experience one */}
                    <div data-aos="fade-up" data-aos-delay="200" className="w-full bg-[#27272a] text-white px-5 py-7 h-1/2 rounded-md">

                        {/* header */}
                        <div className="flex justify-between mb-5 gap-10 items-center flex-wrap h-fit">
                            <div className="flex">
                                <div className="w-16 h-16">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64" data-tooltip-target="exp-tooltip-freelance" className="h-8 w-8 fill-[#28ACF6] transition-colors hover:fill-white"><path d="M37.6 8.203l4.36 6.113L64 8.203M14.676 55.797l11.93-11.663-7.18-7.705M35.783 8.203l-6.376 5.75 10.724.4m-29.134-6.15l2.3 4.693 12.62.786M17.753 32.54l9.324-17.393L0 13.683m18.838 19.96l8.807 9.46 9.715-9.523 3.015-17.737-11.84-.604"></path></svg>
                                </div>
                                <div className="text-[16px] sm:text-xl font-medium">
                                    Freelance Software Engineer
                                </div>  
                            </div> 

                            {/* date */}
                            <div className="relative -mt-8 text-[14px] text-gray-200 font-bold">
                                August 2021 - Present
                            </div>
                        </div>

                        <div>
                            As a Freelance Software Engineer. I provide custom software development and automation 
                            services to clients worldwide. Specialized in Python, Javascript, Django
                        </div>
                        
                    </div>

                    {/* experience two */}
                    <div data-aos="fade-up" data-aos-delay="400" className="w-full bg-[#27272a] text-white px-5 py-7 h-1/2 rounded-md">

                        {/* header */}
                        <div className="flex justify-between flex-wrap mb-5 gap-10 items-center h-fit">
                            <div className="flex">
                                <div className="w-16 h-16">
                                   <img src="https://demaxl.github.io/images/logos/vastuile_logo_icon.png" alt="" />
                                </div>
                                <div className="text-[16px] sm:text-xl font-medium">
                                    Backend Engineer at Vastuile
                                </div>  
                            </div> 

                            {/* date */}
                            <div className="relative -mt-8 text-[14px] text-gray-200 font-bold">
                                August 2021 - Present
                            </div>
                        </div>

                        <div>
                            Leading the technical vision at Vastuile, I drive the development of a blockchain-powered payments platform for African people. I manage a high-performance engineering team,
                             overseeing wallet infrastructure, microservices, DevOps pipelines, and code standards.
                        </div>
                        
                    </div>
                </div>
            </div>  
        </div>
    );
}