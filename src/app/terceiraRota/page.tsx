import { Suspense } from "react";
import { Menu } from "@/components/menu";
import { Info } from "@/components/charInfo";

type IData = {
    items : {
        name: string,
        id: number,
        ki: string,
        maxki: string,
        race: string,
        gender: string,
        affiliation: string,
    }[]
}

const TerceiraRota = async () => {

    const res = await fetch("https://dragonball-api.com/api/characters?&limit=58")
    const characters : IData = await res.json()
    console.log(characters)

    const style = {
        main: "flex justify-center items-start flex-wrap gap-5 mt-20",
    }

    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>

            <main className={style.main}>
                <Suspense>
                    {characters.items.map((item) => {
                        return (
                            <Info name={item.name} gender={item.gender} affiliation={item.affiliation} race={item.race} id={item.id}/>
                        )
                    })}
                </Suspense>
            </main>
        </>
    )
}

export default TerceiraRota;