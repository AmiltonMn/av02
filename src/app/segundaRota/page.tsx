"use client"

import { useState, useEffect } from "react";    
import { Suspense } from "react";
import { Menu } from "@/components/menu";
import { DbAPI } from "@/constants/DbAPI";
import { Card } from "@/components/card";

const SegundaRota = () => {

    const [characters, setCharacters] = useState<IData[]>([]);
    const [erro, setErro] = useState<Boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possível buscar os dados!")
    const [page, setpage] = useState<string>("1")

    useEffect(() => {
        DbAPI.get(`/characters?page=${page}`).then((res) => {
            setErro(false);
            setCharacters(res.data.items);
            if (parseInt(page) > 6 || parseInt(page) < 1) {
                setErrorMessage("Página não encontrada!");
                setErro(true);
            }
        })
    })

    interface IData {
        name: string,
        ki: string,
        maxki: string,
        race: string,
        gender: string,
        affiliation: string,
        image: string
    }

    const style = {
        main: "gap-3 flex justify-center mt-20 items-start flex-wrap gap-10",
    }

    return (

        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>
            <div>
                <input type="text" value={page} onChange={(e) => setpage(e.target.value)} placeholder="1/6 - Insira uma página!"/>
            </div>
            {erro && <h5>{errorMessage}</h5>}
            <main className={style.main}>
            <Suspense fallback={<div>Loading Cards!...</div>}>
                {characters.map((item) => {
                    
                    return(
                        <Card name={item.name} ki={item.ki} maxki={item.maxki} race={item.race} gender={item.gender} affiliation={item.affiliation} image={item.image}/>
                    )
                })}
            </Suspense>
            </main>
        </>
    )
}

export default SegundaRota;
