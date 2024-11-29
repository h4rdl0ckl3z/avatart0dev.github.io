export const SectionSocial = () => {
    return (
        <section id="social" className="py-1">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Social</h2>
                <div className="flex justify-center mt-4 space-x-4">
                    <a className="text-blue-500 text-3xl" href="https://www.facebook.com/atd.999/" target="_blank">
                        <i className="fab fa-facebook">
                        </i>
                    </a>
                    <a className="text-gray-500 text-3xl" href="https://github.com/h4rdl0ckl3z" target="_blank">
                        <i className="fab fa-github">
                        </i>
                    </a>
                    <a className="text-red-500 text-3xl" href="https://www.youtube.com/@atd.999" target="_blank">
                        <i className="fab fa-youtube">
                        </i>
                    </a>
                    <a className="text-green-500 text-3xl" href="https://line.me/ti/p/6OzT-fZnaW" target="_blank">
                        <i className="fab fa-line">
                        </i>
                    </a>
                    <a className="text-black-500 text-3xl" href="https://www.tiktok.com/@atd.999" target="_blank">
                        <i className="fab fa-tiktok">
                        </i>
                    </a>
                    <a className="text-blue-500 text-3xl" href="https://discord.gg/66sEmdba5J" target="_blank">
                        <i className="fab fa-discord">
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