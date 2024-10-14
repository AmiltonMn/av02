import { Card } from "@/components/card";
import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/background.webp"
import { CardTransformation } from "@/components/cardTransformation";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    name: string,
    id: number,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    affiliation: string,
    description: string,
    image: string,
    transformations: {
        name: string,
        image: string,
        ki: string,
    }[]
}

interface IDataStaticIndex {
    items: IData[];
}

const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const character : IData = await res.json();

    const style = {
        main: "flex justify-center items-start flex-wrap bg-gray-900 mt-20 mb-20 flex-wrap",
    }
    
    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>
            <main className={style.main}>
                <div className="w-[300px] flex flex-wrap flex-row justify-around gap-32 bg-zinc-700 h-fit pl-5 pr-2 pt-5 pb-5 rounded-lg sm:w-[480px] md:w-[700px] lg:w-[1000px] md:flex-nowrap">
                    <div className="flex justify-center items-center">
                        <Card name={character.name} ki={character.ki} maxKi={character.maxKi} race={character.race} gender={character.gender} affiliation={character.affiliation} image={character.image}/>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-[300px] gap-3 flex justify-start flex-col flex-wrap">
                            <h1 className="text-lg text-yellow-500 font-bold">Descrição do Personagem</h1>
                            <p className="w-[250px] sm:[250px] md:w-[280px] lg:w-[500px] text-white flex-wrap">{character.description}</p>
                        </div>
                        <div>
                            <h1 className="text-lg text-yellow-500 font-bold overflow-none">Transformações</h1>
                            <div className="w-[250px] sm:[250px] md:w-[280px] lg:w-[590px] flex flex-row overflow-x-auto gap-10 mt-12">
                                {character.transformations.map((item) => {
                                return (
                                    <CardTransformation name={item.name} ki={item.ki} image={item.image}/>
                                )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Perso;

export async function generateStaticParams () {
    const res = await fetch(`https://dragonball-api.com/api/characters`)
    const data: IDataStaticIndex = await res.json()

    return data.items.map((item) => item.id.toString())
}