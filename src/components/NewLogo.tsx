import { useState } from 'react';

import mePhoto from '../images/me/square.jpeg'
import Image from 'next/image';
import Link from 'next/link';

function NewLogo() {
    const [logoHovered, setLogoHovered] = useState(false);
  
    return (
      <Link
        href="/"
        aria-label="Home"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden transition ease-in-out hover:-translate-y-1 hover:scale-95  duration-300 ">
          <Image
            src={mePhoto}
            className={`w-full h-full object-cover ${logoHovered ? 'blur-sm grayscale' : ''}`}
            alt='home'
          />
  
         
        </div>
      </Link>
    );
  }
  
  export default NewLogo;