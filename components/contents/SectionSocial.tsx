import Image from 'next/image';

import fb from '../../public/fb.svg';
import ig from '../../public/ig.svg';
import github from '../../public/github.svg';
import youtube from '../../public/youtube.svg';

export const SectionSocial = () => {
    return (
        <section id="social" className="py-1">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Social</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="" target="_blank" className="hover:text-gray-400">
                        <Image src={fb} alt={'facebook'} />
                    </a>
                    <a href="" target='_blank' className="hover:text-gray-400">
                        <Image src={ig} alt={'instagram'} />
                    </a>
                    <a href="" className="hover:text-gray-400" target='_blank'>
                        <Image src={github} alt={'github'} />
                    </a>
                    <a href="" className="hover:text-gray-400" target='_blank'>
                        <Image src={youtube} alt={'youtube'} />
                    </a>
                </div>
                <div className='flex justify-center space-x-4 mt-4 py-20'>
                    <iframe src="https://discord.com/widget?id=781519954955730964&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className='rounded-md'></iframe>
                </div>
            </div>
        </section>
    );
}