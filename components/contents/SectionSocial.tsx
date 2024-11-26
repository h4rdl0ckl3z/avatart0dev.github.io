export const SectionSocial = () => {
    return (
        <section id="social" className="py-1">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Social</h2>
                <div className="flex justify-center mt-4 space-x-4">
                    <a className="text-blue-500 text-3xl" href="#">
                        <i className="fab fa-facebook">
                        </i>
                    </a>
                    <a className="text-pink-500 text-3xl" href="#">
                        <i className="fab fa-instagram">
                        </i>
                    </a>
                    <a className="text-gray-500 text-3xl" href="#">
                        <i className="fab fa-github">
                        </i>
                    </a>
                    <a className="text-red-500 text-3xl" href="#">
                        <i className="fab fa-youtube">
                        </i>
                    </a>
                </div>
                <div className='flex justify-center space-x-4 mt-4 py-20'>
                    <iframe src="https://discord.com/widget?id=781519954955730964&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className='rounded-md'></iframe>
                </div>
            </div>
        </section>
    );
}