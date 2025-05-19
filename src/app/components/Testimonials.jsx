export default function Testimonials() {
    return (
        <div className="py-32 px-5 sm:px-10 bg-[#f7f7f7]">

            {/* Heading */}
            <div className="text-center mb-32">
                <h2 className="text-4xl sm:text-6xl font-bold mb-5">My <span className="text-[#ff735c]">Testimonials</span></h2>
                <p className="max-w-[600px] mx-auto">We care about what our customers think and strive to provide the best service possible. Here are some of the kind words shared by our valued clients.</p>
            </div>

            <div className="absolute right-10 -mt-80 md:block hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="#ff735c"><path d="m270.67-291.33 64-110q-3.34.66-7.34 1-4 .33-7.33.33-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21.67-5.5 41.5T458-480L329.67-256.67q-4.34 8.34-12.34 12.5-8 4.17-17 4.17-19.66 0-29.5-17-9.83-17-.16-34.33Zm360 0 64-110q-3.34.66-7.34 1-4 .33-7.33.33-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21.67-5.5 41.5T818-480L689.67-256.67q-4.34 8.34-12.34 12.5-8 4.17-17 4.17-19.66 0-29.5-17-9.83-17-.16-34.33Z"/></svg>
            </div>

            {/* Testimonials */}
            <div className="flex justify-center flex-wrap mt-20 gap-y-20 gap-x-10">
                
                {/* box */}
                <div data-aos="fade-up" className="max-w-[350px] bg-white text-black shadow-lg h-[300px]">
                    <div className="relative left-[35%] -mt-[50px] rounded-full shadow-lg w-28 h-28 ">
                        <img src="/medium-shot-man-posing-with-helmet.jpg" alt=""  className="object-cover rounded-full h-full w-full"/>
                    </div>

                    {/* details */}
                    <div className="flex flex-col pt-8 gap-7 items-center">
                        <div className="flex items-center flex-col">
                            <p className="text-[16px]">James Adebayo</p>
                        </div>

                        <div>
                            <p className="text-center text-[16px] px-5">
                                "The service was exceptional! I couldn't be happier with the results. Highly recommended!"
                            </p>
                        </div>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold"><path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold"><path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold"><path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold"><path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold"><path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z"/></svg>
                        </div>
                    </div>
                </div>


                {/* box */}
                <div data-aos="fade-up" className="max-w-[350px] bg-white text-black shadow-lg h-[300px]">
                    <div className="relative left-[35%] -mt-[50px] rounded-full shadow-lg w-28 h-28 ">
                        <img src="/attractive-plus-size-model-white-shirt-apparel.jpg" alt="" className="object-cover rounded-full h-full w-full" />
                    </div>

                    {/* details */}
                    <div className="flex flex-col pt-8 gap-7 items-center">
                        <div className="flex items-center flex-col">
                            <p className="text-[16px]">Sarah Johnson</p>
                        </div>

                        <div>
                            <p className="text-center text-[16px] px-5">
                                "Absolutely amazing work! Delivered beyond expectations. Will definitely return for more."
                            </p>
                        </div>

                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold">
                                    <path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>


                {/* box */}
                <div data-aos="fade-up" className="max-w-[350px] bg-white text-black shadow-lg h-[300px]">
                    <div className="relative left-[35%] -mt-[50px] rounded-full shadow-lg w-28 h-28 ">
                        <img src="/people-showing-support-respect-with-yellow-background-suicide-prevention-day.jpg" alt="" className="object-cover rounded-full h-full w-full" />
                    </div>

                    {/* details */}
                    <div className="flex flex-col pt-8 gap-7 items-center">
                        <div className="flex items-center flex-col">
                            <p className="text-[16px]">Daniel renalds</p>
                        </div>

                        <div>
                            <p className="text-center text-[16px] px-5">
                                "Fast delivery, great communication, Perfect quality and service. I’m more than satisfied!"
                            </p>
                        </div>

                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="gold">
                                    <path d="M480-269 300.67-161q-9 5.67-19 5-10-.67-17.67-6.33-7.67-5.67-11.67-14.5-4-8.84-1.66-19.84L298-401 139.67-538.67q-8.67-7.66-10.5-17.16-1.84-9.5.83-18.5t10-15q7.33-6 18.67-7.34L368-615l81-192.67q4.33-10 13.17-15 8.83-5 17.83-5 9 0 17.83 5 8.84 5 13.17 15L592-615l209.33 18.33q11.34 1.34 18.67 7.34 7.33 6 10 15t.83 18.5q-1.83 9.5-10.5 17.16L662-401l47.33 204.33q2.34 11-1.66 19.84-4 8.83-11.67 14.5-7.67 5.66-17.67 6.33-10 .67-19-5L480-269Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="absolute left-10 -mt-80 md:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="#ff735c"><path d="m270.67-291.33 64-110q-3.34.66-7.34 1-4 .33-7.33.33-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21.67-5.5 41.5T458-480L329.67-256.67q-4.34 8.34-12.34 12.5-8 4.17-17 4.17-19.66 0-29.5-17-9.83-17-.16-34.33Zm360 0 64-110q-3.34.66-7.34 1-4 .33-7.33.33-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21.67-5.5 41.5T818-480L689.67-256.67q-4.34 8.34-12.34 12.5-8 4.17-17 4.17-19.66 0-29.5-17-9.83-17-.16-34.33Z"/></svg>
                </div>  
            </div>
        </div>
    )
}