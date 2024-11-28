import { promises as fs } from 'fs';
import { Project } from '../projectModel';

export default async function Page({ params }: { params: { id: string } }) {
    const file = await fs.readFile(process.cwd() + '/app/project/data.json', 'utf8');
    const data: { data: Project[] } = JSON.parse(file);
    const { id } = params;
    const project = data.data.find((project) => project.id === Number(id));
    
    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <main className="py-20">
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                    <p className="text-xl mb-8">{project.description}</p>
                </div>
                <div className="text-center">
                    <img src={project.img} width={300} height={300} alt={project.title} />
                </div>
                <div className="container mx-auto py-10">
                    <p className="mb-4 contain-content">{project.content}</p>
                    <p className="mb-4">
                        Read more at <a href={project.link} target="_blank">Github</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
