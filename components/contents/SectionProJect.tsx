export const SectionProject = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-4 rounded shadow">
                        <img src="https://placehold.co/300x200" alt="Screenshot of Project 1" className="mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">Project 1</h3>
                        <p className="mb-4">Description of Project 1. This project showcases my skills in React and Tailwind CSS.</p>
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    <div className="p-4 rounded shadow">
                        <img src="https://placehold.co/300x200" alt="Screenshot of Project 2" className="mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">Project 2</h3>
                        <p className="mb-4">Description of Project 2. This project showcases my skills in React and Tailwind CSS.</p>
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    <div className="p-4 rounded shadow">
                        <img src="https://placehold.co/300x200" alt="Screenshot of Project 3" className="mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">Project 3</h3>
                        <p className="mb-4">Description of Project 3. This project showcases my skills in React and Tailwind CSS.</p>
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    <div className="p-4 rounded shadow">
                        <img src="https://placehold.co/300x200" alt="Screenshot of Project 4" className="mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">Project 4</h3>
                        <p className="mb-4">Description of Project 4. This project showcases my skills in React and Tailwind CSS.</p>
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                    <div className="p-4 rounded shadow">
                        <img src="https://placehold.co/300x200" alt="Screenshot of Project 5" className="mb-4 rounded" />
                        <h3 className="text-xl font-bold mb-2">Project 5</h3>
                        <p className="mb-4">Description of Project 5. This project showcases my skills in React and Tailwind CSS.</p>
                        <a href="#" className="text-blue-500 hover:underline">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
}