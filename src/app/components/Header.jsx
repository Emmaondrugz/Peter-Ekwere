import React, { useState } from 'react';

export default function Header() {
    const whatsappNumber = '+2349155866808'

    return (
        <header className="flex px-5 sm:px-10 py-5 bg-white items-center w-full justify-between">
            

            {/* Logo container */}
            <div className='w-[50px] h-[50px] flex items-center'>
                <img src="/Logo.jpg" alt="" />
            </div>



            <div>
                {/* Contact button */}
                <button>
                    <a href={`https://wa.me/${whatsappNumber}`} className="bg-[#ff735c] rounded-none shadow-[7px_7px_0px_black] text-[16px] text-white px-6 py-3 font-medium hover:shadow-none transition duration-300">
                        Contact me
                    </a>
                </button>
            </div>

        </header>
    );
}
