import { useRef } from "react";

export default function Home() {
    const searchRef = useRef();

    const onSearch = async (e) => {
        e.preventDefault(); 
        const searchCheck = searchRef.current.value;
        const searchValue = searchCheck.trim();
        searchRef.current.value = "";
        window.location.href = `/players/${searchValue}`;
    }

    return (
        <div>
            <div className="container">
                <div className="input-wrapper">
                    <input ref={searchRef} type="text" placeholder="enter your nickname" />
                    <button onClick={onSearch} type="submit">Search</button>  
                </div>
            </div>
            <div className="another">
                <h1 className="center">제작자의 다른 사이트 모음</h1>
                <div className="mysite">
                    <a href="https://kiuk.pages.dev/" target="_blank">
                        <div className="card">
                            <img src="./kiuk.jpg" alt="..." />
                        </div>
                    </a>
                    <a href="https://arsf-dic.pages.dev/" target="_blank">
                    <div className="card">
                        <img src="./cre.png" alt="..." />
                    </div>
                    </a>
                    <span>포트폴리오 사이트</span>
                    <span>ARSF 도감</span>
                </div>
            </div>
            <style jsx>{`
                .card {
                    background: white;
                    box-shadow: 0px -3px 0 15px #ffffff, 0 20px 0 15px #ffffff;
                }
                span {
                    margin: 5px;
                    color: black;
                    font-weight: bold;
                }
                img {
                    width: 200px;
                    height: 200px;
                }
                .mysite{
                    margin-top: 5rem;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    place-items: center;
                }
                .center {
                    text-align: center;
                }
                .another {
                    margin: 10%;
                }
                .container {
                    margin-top: 100px;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }
                .input-wrapper {
                    position: relative;
                }
                input {
                    padding-left: 10px;
                    padding-right: 30px;
                    width: 400px;
                    height: 35px;
                    background: white;
                    border-radius: 20px;
                    border-color: red;
                    font-size: 20px;
                    font-weight: bold;
                    color: #21B400;
                }
                button {
                    cursor: pointer;
                    font-weight: bold;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    border-left: solid 1px;
                }
                @media(max-width: 410px) {
                input {
                    padding: 10px;
                    width: 300px;
                    height: 28px;
                    border-radius: 15px;
                    border-color: red;
                    font-size: 15px;
                }
                }
            `}
            </style>
        </div>
    );
}