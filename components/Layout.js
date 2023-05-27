import NavBar from "./navbar";
import Title from "./title";

export default function Layout ({ children }) {
    return (
        <>
            <Title />
            <NavBar />
            <div>{children}</div>
        </>
    );
}
