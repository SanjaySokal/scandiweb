import React, { useEffect, useState } from "react";
// import ShowInfoCard from "./ShowInfoCard";

function Main() {
    const [data, setData] = useState("");
    const apiEndpoint = "http://localhost:4000/";
    const query = `
        query {
            categories {
                products {
                    id
                }
            }
        }
    `;

    const getData = (term) => {
        fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query,
                variables: { term }
            })
        })
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(console.error);
    };
    console.log(data);

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {
                Object.keys(data).map((key, index) => {
                    <div key={index}>
                        {key}: {data[key].categories.map((ky) => {
                            ky.products.map((kk,i) => {
                                <li>{kk[i]}</li>
                            })
                        })}
                    </div>
                })
            }
            {/* {data.data ? data.catagories.map((d) => {
                {data.catagories}
            }) : <div></div>} */}
        </div>
    );
}

export default Main;