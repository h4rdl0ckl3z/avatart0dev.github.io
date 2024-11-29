import Image from 'next/image';

export const SectionAbout = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-xl mb-8">
                    I'm a qualifi and skill developer with learning and experience. I always code with an eye for detail. I'm readly to learn new thing and develop myself.
                </p>
                <Image src="https://avatars.githubusercontent.com/u/54482333?s=400&u=c430a54568014a47938386f3aa960d7cb97f9125&v=4" width={200} height={200} alt="A detailed portrait of the developer" className="mx-auto rounded-full" />
            </div>
        </section>
    );
}