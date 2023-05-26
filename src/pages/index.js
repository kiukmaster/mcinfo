import { useRef, useState } from "react";

export default function Home() {
    const [searchDetail, setSearchDetail] = useState("");
    const searchRef = useRef();

    const onSearch = (e) => {
        e.preventDefault();
        setSearchDetail(searchRef.current.value);
        console.log(searchRef.current.value);
        searchRef.current.value = "";
        fetch(`https://api.mojang.com/users/profiles/minecraft/${searchDetail}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = `/players/${data.name}`;
            })};

    return (
        <div>
            <div className="container">
                <div className="input-wrapper">
                    <input ref={searchRef} type="text" placeholder="enter your nickname" />
                    <button onClick={onSearch} type="submit">Search</button>  
                </div>
            </div>
            <style jsx>{`
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
                    border-radius: 20px;
                    border-color: red;
                    font-size: 20px;
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