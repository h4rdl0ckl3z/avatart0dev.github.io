import { promises as fs } from 'fs';
import Image from 'next/image';
import { Project } from '../../../models/projectModel';
import logo from '../../../public/logo.jpg';

async function getProjectData(id: string) {
    const file = await fs.readFile(process.cwd() + '/app/project/data.json', 'utf8');
    const data: { data: Project[] } = JSON.parse(file);
    const project = data.data.find((project) => project.id === Number(id))
    if (!project) {
        throw new Error("Project not found.");
    }
    return project;
}

export async function generateStaticParams() {
    const file = await fs.readFile(process.cwd() + '/app/project/data.json', 'utf8');
    const data: { data: Project[] } = JSON.parse(file);
    const project = data.data;
    return project.map((project: Project) => ({
        id: project.id.toString()
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProjectData(id);
    if (!project) {
        return <p>Project not found</p>;
    } else {
        return (
            <main className="py-20">
                <section className="py-20">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                        <p className="text-xl mb-8">{project.description}</p>
                    </div>
                    <div className="text-center">
                        <Image src={project.img || logo} width={500} height={500} alt={project.title} />
                    </div>
                    <div className="container mx-auto py-10">
                        {(await project.content).map((content, index) => (
                            <p key={index} className="mb-4 contain-content">{content}</p>
                        ))}
                        <p className="mb-4">
                            Link at <a href={project.link} className='font-bold' target="_blank">Github</a>
                        </p>
                    </div>
                </section>
            </main>
        );
    }
}
