import Link from 'next/link'
//import { TypewriterEffect } from './components/ui/typewriter-effect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*<TypewriterEffect words={words} /> ---text animation KIV */}
            <p>My name is Keith and as a web developer utilized ASP, Next.js with Tailwind and Boostrap I focus on creating interactive websites that captivate users and highlight clients' products. My approach is rooted in a balance of technical expertise and creative design, ensuring each project not only meets, but exceeds client expectations. By leveraging the latest technologies and maintaining a user-centric focus, I deliver websites that are both visually stunning and highly functional. You can expect a professional yet approachable collaboration, resulting in a digital presence that truly stands out.</p>

            <div className="flex justify-center my-8">
                <Link href="/works">
                <button className="btn-primary">View my works</button>
                </Link>
            </div>

            <h2>Company Updates</h2>

            <div className="card">
                <h3>New member of the web dev team...</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
            </div>
            <div className="card">
                <h3>New website live!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
            </div>
    </main>
  );
}
