import { useRef } from "react";

export default function Home() {
    const searchRef = useRef();

    const onSearch = () => {
        const searchCheck = searchRef.current.value;
        const searchValue = searchCheck.trim();
        searchRef.current.value = "";
        window.location.href = `/players/${searchValue}`;
    }

    return (
        <div>
            <div className="container">
                <div className="input-wrapper">
                    <input ref={searchRef} type="text" placeholder="enter your nickname"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                onSearch();
                            }
                        }} 
                    />
                    <button onClick={onSearch} type="submit">Search</button>
                </div>
            </div>
            <style jsx>{`
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
                @media(max-width: 500px) {
                input {
                    padding: 10px;
                    width: 250px;
                    height: 24px;
                    border-radius: 15px;
                    border-color: red;
                    font-size: 15px;
                }
            `}
            </style>
        </div>
    );
}