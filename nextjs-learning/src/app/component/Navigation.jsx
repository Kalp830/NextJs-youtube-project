import Link from "next/link";

const Navigation = () =>{
    return(
        <>
        <header className="grid grid-cols-2">
            <div className="logo">Logo Name</div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navigation;