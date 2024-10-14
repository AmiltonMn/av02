"use client"

import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
import { useState, useEffect } from "react";    
import { Suspense } from "react";
import Image from "next/image";
import Logo from "@/assets/apiLogo.webp"


const PrimeiraRota = () => {

    const [characters, setCharacters] = useState<IData[]>([]);

    interface IData {
        name: string,
        ki: string,
        maxKi: string,
        race: string,
        gender: string,
        affiliation: string,
        image: string
    }

    useEffect(() => {

        const load = async () => {
            const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
            const data = await res.json();
            setCharacters(data.items);
            console.log(characters);
        }

        load();
      
    }, [])

    const style = {
        cards: "gap-10 flex justify-center items-start flex-wrap bg-gray-900",
    }
    
    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>

                <div className="mt-20 mb-10 flex flex-col items-center">
                    <Image src={Logo} alt="Logo"></Image>
                    <h1 className="mt-20 text-4xl font-bold text-yellow-500">The Dragon Ball API</h1>
                </div>

                <div className={style.cards}>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 flex-wrap">
                        <Suspense fallback={<div>Loading cards!...</div>}>
                            {characters.map((item) => {
                                return (
                                    <Card name={item.name} ki={item.ki} maxKi={item.maxKi} race={item.race} gender={item.gender} affiliation={item.affiliation} image={item.image}/>
                                )
                            })}
                        </Suspense>
                    </div>
                </div>
        </>
        
    )
}

export default PrimeiraRota;