import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    return (
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 flex flex-col justify-center items-center">
          <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Hi, my name is Dennis Diepolder
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            I offer customized solutions for websites, platforms, and cloud infrastructures. With experience in serverless web applications, containerization, and automation tools, I ensure your projects are efficient and scalable. Always looking for new challenges and opportunities, I support you in bringing your visions to life.
          </p>
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border flex items-center justify-center z-50 mt-4">
            <Image 
              src={'/dennisdiepolder.jpg'}
              layout="fill" 
              objectFit="cover"
              alt="Dennis Diepolder"
            />
          </div>
          <p className="text-2xl mt-4 uppercase">Contact me</p>
          <div className="flex space-x-6 mt-4 text-neutral-300 z-50">
            <Link href="https://www.linkedin.com/in/dennis-diepolder-2a5a98276/" target="_blank" aria-label="LinkedIn" className="hover:scale-105 transition ease-in-out duration-100">
              <FaLinkedin size={40} />
            </Link>
            <Link href="https://wa.me/+41796108273" target="_blank" aria-label="WhatsApp" className="hover:scale-105 transition ease-in-out duration-100">
              <IoLogoWhatsapp size={40} />
            </Link>
            <Link href="mailto:info@dennisdiepolder.com" target="_blank" aria-label="Email" className="hover:scale-105 transition ease-in-out duration-100">
              <IoIosMail size={40} />
            </Link>
            <Link href='https://github.com/dyprodg' target="_blank" aria-label="GitHub" className="hover:scale-105 transition ease-in-out duration-100">
              <FaGithub size={40} />
            </Link>
          </div>
          <div className="text-neutral-500 mt-2 text-sm text-center">
            <p>Phone: +41 796108273</p>
            <p>Email: <a href="mailto:info@dennisdiepolder.com" className="underline">info@dennisdiepolder.com</a></p>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    );
}
