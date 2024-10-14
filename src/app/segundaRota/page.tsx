"use client"

import { useState, useEffect } from "react";    
import { Suspense } from "react";
import { Menu } from "@/components/menu";
import { DbAPI } from "@/constants/DbAPI";
import { Card } from "@/components/card";
import Image from "next/image";
import Logo from "@/assets/apiLogo.webp"

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
        maxKi: string,
        race: string,
        gender: string,
        affiliation: string,
        image: string
    }

    const style = {
        cards: "gap-10 flex justify-center items-start flex-wrap bg-gray-900",
    }

    return (

        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>

                <div className="mt-20 mb-10 flex flex-col items-center">
                    <Image src={Logo} alt="Logo"></Image>
                    <h1 className="mt-20 text-4xl font-bold text-yellow-500">The Dragon Ball API</h1>
                    <div className="mt-8 flex flex-col justify-center">
                        <input className="w-[300px] placeholder:p-2 text-center rounded-2xl focus:ring focus:ring-yellow-700 focus:outline-none" type="text" value={page} onChange={(e) => setpage(e.target.value)} placeholder="1/6 - Insira uma página!"/>
                        {erro && <h5 className="text-white flex justify-center">{errorMessage}</h5>}
                    </div>
                </div>
                
                <div className={style.cards}>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 flex-wrap">
                        <Suspense fallback={<div>Loading Cards!...</div>}>
                            {characters.map((item) => {
                                
                                return(
                                    <Card name={item.name} ki={item.ki} maxKi={item.maxKi} race={item.race} gender={item.gender} affiliation={item.affiliation} image={item.image}/>
                                )
                            })}
                        </Suspense>
                    </div>
                </div>
        </>
    )
}

export default SegundaRota;
