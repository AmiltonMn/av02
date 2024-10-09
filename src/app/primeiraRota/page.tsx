"use client"

import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
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
            const res = await fetch("https://dragonball-api.com/api/characters?limit=58");
            const data = await res.json();
            setCharacters(data.items);
            console.log(characters);
        }

        load();
      
    }, [])

    const style = {
        main: "gap-3 flex justify-center mt-20 items-start flex-wrap gap-10",
    }
    
    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota"/>

            <main className={style.main}>
                <Suspense fallback={<div>Loading cards!...</div>}>
                    {characters.map((item) => {
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