import { Menu } from "@/components/menu";
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    name: string,
    id: number,
    ki: string,
    maxki: string,
    race: string,
    gender: string,
    affiliation: string,
    description: string,
    image: string
}

interface IDataStaticIndex {
    items: IData[];
}

const Perso = async ({params: {id}} : IPerso) => {

    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const character : IData = await res.json();
    
    return (
        <>
            <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-start mt-48 bg-slate-500 w-[1300px] gap-3 p-4">
                    <div className="mr-12">
                        <Image src={character.image} width={250} height={250} alt={character.name}/>
                    </div>
                    <div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p>{character.name}</p>
                                <p>{character.gender} - {character.race}</p>
                            </div>

                            <div>
                                <p>Base KI: {character.ki}</p>
                                <p>Total KI: {character.maxki}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-48 flex-wrap w-[700px]">
                            <p>{character.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Perso;

export async function generateStaticParams () {
    const res = await fetch(`https://dragonball-api.com/api/characters`)
    const data: IDataStaticIndex = await res.json()

    return data.items.map((item) => item.id.toString())
}