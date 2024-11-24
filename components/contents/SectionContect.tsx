export const SectionConTect = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p className="text-xl mb-8">Feel free to reach out to me for any inquiries or collaborations.</p>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
                </form>
            </div>
        </section>
    );
}