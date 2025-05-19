export default function About() {

    const whatsappNumber = '+2349155866808'

    return (
        <div className="sm:px-10 px-5 py-28">

            {/* about header */}
            <div className="flex gap-5 justify-center">
                <div className="max-w-[400px] sm:text-6xl text-center text-4xl font-bold mx-auto">
                    About <span className="text-[#ff735c]">Me</span>
                </div>
            </div>

            {/* main content */}
            <div className="flex mt-24 lg:flex-row flex-col gap-10 lg:gap-0 justify-center items-center">

                {/* about image */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img src="/about-img.svg" alt="" className="max-w-[600px] w-full"/>
                </div>

                {/* about write up */}
                <div className="lg:w-1/2 w-full flex justify-center flex-col">
                    <p className="max-w-[600px] text-left text-[16px]">
                        I am a passionate software engineer with a strong background in Python and JavaScript. 
                        I have experience in developing web applications, automation scripts, and data analysis tools. 
                        I am always eager to learn new technologies and improve my skills. 
                        My goal is to create efficient and user-friendly software solutions that meet the needs of my clients.
                    </p>

                    {/* soft skills */}
                    <div className="mt-10">
                        <ul className="list-disc gap-2 flex flex-col">
                            <li data-aos="fade-right" data-aos-delay="100" className="text-[16px] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff735c"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q48 0 93.5 11t87.5 32q15 8 19.5 24t-5.5 30q-10 14-26.5 18t-32.5-4q-32-15-66.5-23t-69.5-8q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-8-.5-15.5T798-511q-2-17 6.5-32.5T830-564q16-5 30 3t16 24q2 14 3 28t1 29q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-328 372-373q11-11 27.5-11.5T852-781q11 11 11 28t-11 28L452-324q-12 12-28 12t-28-12L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z"/></svg>
                                Problem-solving
                            </li>
                            <li data-aos="fade-right" data-aos-delay="300" className="text-[16px] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff735c"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q48 0 93.5 11t87.5 32q15 8 19.5 24t-5.5 30q-10 14-26.5 18t-32.5-4q-32-15-66.5-23t-69.5-8q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-8-.5-15.5T798-511q-2-17 6.5-32.5T830-564q16-5 30 3t16 24q2 14 3 28t1 29q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-328 372-373q11-11 27.5-11.5T852-781q11 11 11 28t-11 28L452-324q-12 12-28 12t-28-12L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z"/></svg>
                                Teamwork
                            </li>
                            <li data-aos="fade-right" data-aos-delay="500" className="text-[16px] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff735c"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q48 0 93.5 11t87.5 32q15 8 19.5 24t-5.5 30q-10 14-26.5 18t-32.5-4q-32-15-66.5-23t-69.5-8q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-8-.5-15.5T798-511q-2-17 6.5-32.5T830-564q16-5 30 3t16 24q2 14 3 28t1 29q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-328 372-373q11-11 27.5-11.5T852-781q11 11 11 28t-11 28L452-324q-12 12-28 12t-28-12L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z"/></svg>
                                Communication
                            </li>
                            <li data-aos="fade-right" data-aos-delay="700" className="text-[16px] flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff735c"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q48 0 93.5 11t87.5 32q15 8 19.5 24t-5.5 30q-10 14-26.5 18t-32.5-4q-32-15-66.5-23t-69.5-8q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-8-.5-15.5T798-511q-2-17 6.5-32.5T830-564q16-5 30 3t16 24q2 14 3 28t1 29q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-328 372-373q11-11 27.5-11.5T852-781q11 11 11 28t-11 28L452-324q-12 12-28 12t-28-12L282-438q-11-11-11-28t11-28q11-11 28-11t28 11l86 86Z"/></svg>
                                Adaptability
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start">
                        <a href={`https://wa.me/${whatsappNumber}`}>
                            <button className="bg-[#ff735c] rounded-none shadow-[7px_7px_0px_black] text-[16px] text-white px-6 py-2 cursor-pointer font-medium hover:shadow-none transition duration-300">
                                Reach out
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}