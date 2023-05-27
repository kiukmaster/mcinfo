import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MinecraftSimulator from "../../../components/MinecraftSimulator";

export default function Player() {
    const router = useRouter();
    const { nick } = router.query;
    const [data, setData] = useState(null);
    const [texture, setTexture] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (nick) {
                // 첫 번째 fetch 요청
                const response1 = await fetch(`/api/mcpro?nick=${nick}`);
                const result1 = await response1.json();
    
                // 두 번째 fetch 요청
                const response2 = await fetch(`/api/mcmainpro?nick=${result1.id}`);
                const result2 = await response2.json();
    
                // 두 번째 요청 결과를 상태로 설정
                setData(result2);
            }
        };
        fetchData();
    }, [nick]);

    useEffect(() => {
        if (data) {
            const firstProperty = data.properties && data.properties.length > 0 ? data.properties[0] : null;

            if (firstProperty) {
                // Base64 문자열을 해독하고 JSON 객체로 변환
                const decodedValue = JSON.parse(Buffer.from(firstProperty.value, 'base64').toString());
                setTexture(decodedValue);
            } else {
                console.log("해독불가");
            }
        }
    }, [data]);

    return (
        <div>
            <div className="container">
                {data ? (
                    <div className="maindata">
                        UUID <br /> <span className="uid">{data.id}</span> <br /><br />
                        NICKNAME <br /> <span className="nick">{data.name}</span><br />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                {texture ? (
                    <p>               
                        <MinecraftSimulator skinUrl={texture.textures.SKIN.url} />
                    </p>
                ) : (
                    <p>Loading...</p>
                )
                }
            </div>
            {texture ? (
                <div className="dw">
                    <a href={texture.textures.SKIN.url} target="_blank">
                        <button className="skinbtn">스킨받기(셀프)</button>
                    </a>
                </div>
            ) : (<p>Loading...</p>)}
            <style jsx>{`
                @media screen and (max-width: 768px){
                    .container {
                        display: block;
                    }
                }
                .maindata {
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    margin-top: 5rem;
                }
                .dw{
                    text-align: center;
                }
                .skinbtn {
                    margin-top: 3.5rem;
                    width: 200px;
                    height: 50px;
                    border-radius: 20px;
                    border-color: #6100FF;
                    transition: transform 0.2s ease-in-out;
                    font-weight: bold;
                }
                .skinbtn:hover {
                    cursor: pointer;
                    transform: scale(1.05) translateY(-10px);
                    background: white;
                }
                .uid {
                    color: #AA00FF;
                }
                .nick {
                    color: #AA00FF;
                }
            `}</style>

        </div>
    );
}