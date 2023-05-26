import { useRouter } from "next/router"
import Link from "next/link";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/" legacyBehavior>
                <a>MCInfo</a>
            </Link>
            <style jsx>{`
            nav {
                text-align: center;
            }
            a {
                color: black;
                margin-right: 10px;
                text-decoration: none;
                font-size: 30px;
                font-weight: bold;
            }
            `}</style>
        </nav>
    );
}