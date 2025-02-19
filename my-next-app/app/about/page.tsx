// app/about/page.tsx
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <Image src="/logo.png" alt="Company Logo" width={150} height={150} />
        </div>
    );
}
