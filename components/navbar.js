import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a>MCInfo</a>
            </Link>
            <style jsx>{`
            nav {
                padding: 0;
                text-align: center;
                box-shadow: 0 0 0 8px #4B4B4B, 0 0 0 10px #4B4B4B;
                background: #4B4B4B;
            }
            a {
                margin-top: 10px;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
                top: 50%;
                display: inline-block;
                color: #21B400;
                text-decoration: none;
                font-size: 30px;
                font-weight: bold;
                border: 2px solid #21B400;
                border-radius: 3px;
                background: white;
            }
            `}</style>
        </nav>
    );
}