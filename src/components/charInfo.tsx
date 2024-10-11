import Image from "next/image";
import Link from "next/link";
import sphere from "@/assets/sphere.png"

export const Info = ({name, gender, affiliation, race, id} : {
    name: string,
    gender: string,
    affiliation: string,
    race: string,
    id: number
}) => {

    return (
        <>
            <div className="shadow rounded-lg bg-zinc-800 flex flex-col justify-between w-[240px] h-[150px] gap-1 p-3">
                <p className="text-yellow-500 font-bold">{name} - {gender}</p>
                <div>
                        <p className="text-white font-bold">{race}</p>
                        <p className="text-yellow-500 font-bold">{affiliation}</p>
                    <div className="flex flex-row justify-center">
                        <Link className="h-[100px] w-[100px]" href={`/perso/${id}`}><Image className="shadow shadow-none flex relative bottom-10 left-[120px] w-[75px] object-scale-down bottom-[50px] hover:scale-110 hover:drop-shadow-ball" src={sphere} alt="esfera"></Image></Link>
                    </div>
                </div>
            </div>
        </>
    )
}