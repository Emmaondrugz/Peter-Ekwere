export default function Projects() {
    return (
        <div className="py-32 px-5 sm:px-10">
            
            {/* Heading */}
            <div className="flex justify-between flex-col items-center">
                {/* Header */}
                <div className="text-6xl font-bold">
                    Recent <span className="text-[#ff735c] ">Projects</span>
                </div>

                {/* Header text */}
                <p className="max-w-[700px] text-[16px] text-left sm:text-center  mt-5">
                    Here are some of my recent projects that showcase my skills and expertise in software development. 
                    Each project demonstrates my ability to solve complex problems and deliver high-quality solutions.
                </p>
            </div>

            {/* Projects */}
            <div className="flex flex-wrap justify-center gap-7 mt-16">

                {/* Box */}
                <div data-aos="fade-up" data-aos-delay="200" className="max-w-[400px] flex flex-col justify-between h-[350px] sm:min-w-[300px] m-2 bg-[#ff735c] shadow-[7px_7px_0px_black] p-5 rounded-none">
                    
                    <div>
                        {/* project icon */}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm187-200-76-76q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l104 104q12 12 12 28t-12 28L328-308q-11 11-27.5 11.5T272-308q-11-11-11-28t11-28l75-76Zm173 160q-17 0-28.5-11.5T480-320q0-17 11.5-28.5T520-360h160q17 0 28.5 11.5T720-320q0 17-11.5 28.5T680-280H520Z"/></svg>
                        </div>

                        <div className="mt-5 text-2xl font-bold">
                            unix shell
                        </div>

                        <div>
                            <p className="mt-3 text-[14px]">
                                A simple Unix shell implementation written in C that supports basic commands, piping, and I/O redirection. This project demonstrates my understanding of operating systems and process management.
                            </p>
                        </div>  
                    </div>
                    

                    <div className="mt-auto">
                        <a href="https://github.com/PeterEkwere/A_custom_shell">
                            <button className="bg-black text-white rounded-none gap-2 flex items-center py-2.5 px-6">
                                View on Github
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M673-446.67H193.33q-14.33 0-23.83-9.5-9.5-9.5-9.5-23.83 0-14.33 9.5-23.83 9.5-9.5 23.83-9.5H673L456.33-730q-10-10-9.83-23.33.17-13.34 10.17-23.34 10-9.66 23.33-9.83 13.33-.17 23.33 9.83l273.34 273.34q5.33 5.33 7.5 11 2.16 5.66 2.16 12.33t-2.16 12.33q-2.17 5.67-7.5 11L503.33-183.33q-9.66 9.66-23.16 9.66t-23.5-9.66q-10-10-10-23.5t10-23.5L673-446.67Z"/></svg>
                            </button>   
                        </a>
                    </div>
                </div>

                {/* Box */}
                <div data-aos="fade-up" data-aos-delay="400" className="max-w-[400px] flex flex-col justify-between h-[350px] sm:min-w-[300px] m-2 bg-[#ff735c] shadow-[7px_7px_0px_black] p-5 rounded-none">
                    
                    <div>
                        {/* project icon */}
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l128-128q12-12 27-18t30-6q15 0 30 6t27 18l128 128-100 100-85-85-85 85ZM225-295 97-423q-12-12-18-27t-6-30q0-15 6-30t18-27l128-128 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 128 128q12 12 18 27t6 30q0 15-6 30t-18 27L735-295ZM423-97 295-225l100-100 85 85 85-85 100 100L537-97q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/></svg>
                        </div>

                        <div className="mt-5 text-2xl font-bold">
                           Youtube Automation Bot
                        </div>

                        <div>
                            <p className="mt-3 text-[14px]">
                               Automated YouTube comment liking with this Python SeleniumBase bot. Efficiently interacts with YouTube's UI to like specified comments, enhancing engagement and streamlining workflows.
                            </p>
                        </div>  
                    </div>
                    

                    <div className="mt-auto">
                        <a href="https://github.com/PeterEkwere/YouTube-Automation">
                            <button className="bg-black text-white rounded-none gap-2 flex items-center py-2.5 px-6">
                                View on Github
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M673-446.67H193.33q-14.33 0-23.83-9.5-9.5-9.5-9.5-23.83 0-14.33 9.5-23.83 9.5-9.5 23.83-9.5H673L456.33-730q-10-10-9.83-23.33.17-13.34 10.17-23.34 10-9.66 23.33-9.83 13.33-.17 23.33 9.83l273.34 273.34q5.33 5.33 7.5 11 2.16 5.66 2.16 12.33t-2.16 12.33q-2.17 5.67-7.5 11L503.33-183.33q-9.66 9.66-23.16 9.66t-23.5-9.66q-10-10-10-23.5t10-23.5L673-446.67Z"/></svg>
                            </button>   
                        </a>
                    </div>
                </div>

                {/* Box */}
                <div data-aos="fade-up" data-aos-delay="600" className="max-w-[400px] flex flex-col justify-between h-[350px] sm:min-w-[300px] m-2 bg-[#ff735c] shadow-[7px_7px_0px_black] p-5 rounded-none">
                    
                    <div>
                        {/* project icon */}
                        <div>
                           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 150.89v297.44ZM480-518l256.33-149L480-815.33 223-667l257 149ZM153.33-256q-15.83-9.28-24.58-24.48-8.75-15.19-8.75-33.19v-332.66q0-18 8.75-33.19 8.75-15.2 24.58-24.48l293.34-169q15.88-9 33.44-9 17.56 0 33.22 9l293.34 169q15.83 9.28 24.58 24.48 8.75 15.19 8.75 33.19v332.66q0 18-8.75 33.19-8.75 15.2-24.58 24.48L513.33-87q-15.88 9-33.44 9-17.56 0-33.22-9L153.33-256ZM480-480Z"/></svg>
                        </div>

                        <div className="mt-5 text-2xl font-bold">
                            Odds-Africa API
                        </div>

                        <div>
                            <p className="mt-3 text-[14px]">
                                 A production-ready multi-tenant SaaS backend built with Node.js, PostgreSQL, and Redis. Supports org-level isolation, role-based access, OAuth login, rate-limiting, Stripe billing, and Dockerized deployment — engineered for scale, speed, and security.
                            </p>
                        </div>  
                    </div>
                    

                    <div className="mt-auto">
                        <a href="https://github.com/PeterEkwere/OddsAfrica-API">
                            <button className="bg-black text-white rounded-none gap-2 flex items-center py-2.5 px-6">
                                View on Github
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M673-446.67H193.33q-14.33 0-23.83-9.5-9.5-9.5-9.5-23.83 0-14.33 9.5-23.83 9.5-9.5 23.83-9.5H673L456.33-730q-10-10-9.83-23.33.17-13.34 10.17-23.34 10-9.66 23.33-9.83 13.33-.17 23.33 9.83l273.34 273.34q5.33 5.33 7.5 11 2.16 5.66 2.16 12.33t-2.16 12.33q-2.17 5.67-7.5 11L503.33-183.33q-9.66 9.66-23.16 9.66t-23.5-9.66q-10-10-10-23.5t10-23.5L673-446.67Z"/></svg>
                            </button>   
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}