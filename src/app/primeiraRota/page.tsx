"use client"

import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
import Image from "next/image";
import { useState, useEffect } from "react";    
import { Suspense } from "react";


const PrimeiraRota = () => {

    const [characters, setCharacters] = useState<IData[]>([]);

    interface IData {
        name: string,
        ki: string,
        maxki: string,
        race: string,
        gender: string,
        affiliation: string,
        image: string
    }

    useEffect(() => {

        const load = async () => {
            const res = await fetch("https://dragonball-api.com/api/characters");
            const data = await res.json();
            setCharacters(data.items);
            console.log(characters);
        }

        load();
      
    }, [])

    const style = {
        main: "grid grid-rows-2 grid-flow-col gap-3 flex justify-evenly mt-20 items-end",
    }
    

    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota"/>

            <main className={style.main}>
            <Suspense fallback={<div>Loading...</div>}>
                {characters.map((item, index) => {
                    return (
                        <Card name={item.name} ki={item.ki} maxki={item.maxki} race={item.race} gender={item.gender} affiliation={item.affiliation} image={item.image}/>
                    )
                })}
            </Suspense>
            </main>
        </>
        
    )
}

export default PrimeiraRota;