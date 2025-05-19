export default function Connect() {

        const handleSubmit = (e) => {
            e.preventDefault(); // prevent default form submission

            const name = e.target.name.value;
            const email = e.target.email.value;
            const aboutProject = e.target.aboutProject.value;

            const message = `Hello! 👋%0AMy name is ${encodeURIComponent(name)}.%0AMy email is ${encodeURIComponent(email)}.%0AHere's what I want to discuss:%0A${encodeURIComponent(aboutProject)}`;

            // Replace with your WhatsApp number in international format (no + or dashes)
            const phoneNumber = '1234567890';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappURL, '_blank'); // open in new tab
        };


    return (
        <div className="py-32 px-5 sm:px-32 flex justify-center flex-col lg:flex-row items-start lg:items-center">

            {/* left */}
            <div className="lg:w-1/2 w-full">
                <div className="text-6xl sm:text-8xl font-bold">
                    <p className="flex items-center gap-4">
                        Lets 
                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]" viewBox="0 -960 960 960"  fill="#"><path d="M645-433H135v-94h510L413-759l67-67 346 346-346 345-67-66 232-232Z"/></svg>
                    </p>
                    <p className="text-[#ff735c]">Connect.</p>
                </div>
                <div>
                    <p className="mt-6 text-lg text-gray-600 max-w-[500px]">
                        Feel free to reach out to me via email or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>
            </div>

            {/* right */}
            <div className="lg:w-1/2 w-full">
                <form className="bg-white sm:p-10 mt-10 sm:mt-0 rounded-2xl space-y-6 max-w-md w-full mx-auto" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ff735c] focus:border-transparent transition"
                        placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ff735c] focus:border-transparent transition"
                        placeholder="john@example.com"
                        />
                    </div>

                    {/* About Project */}
                    <div>
                        <label htmlFor="aboutProject" className="block text-sm font-medium text-gray-600 mb-1">
                        About Project
                        </label>
                        <textarea
                        id="aboutProject"
                        name="aboutProject"
                        rows="5"
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ff735c] focus:border-transparent transition resize-none"
                        placeholder="Briefly describe your project idea..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#ff735c] text-white font-medium py-3 rounded-none hover:bg-[#e86353] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff735c]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}