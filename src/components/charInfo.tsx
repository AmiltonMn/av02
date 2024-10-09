import Link from "next/link";

export const Info = ({name, gender, affiliation, race, id} : {
    name: string,
    gender: string,
    affiliation: string,
    race: string,
    id: number
}) => {

    return (
        <>
        <div className="rounded-lg bg-slate-600 flex flex-col w-[200px] h-[150px] gap-1 p-3">
                <p className="text-yellow-500 font-bold">{name} - {gender}</p>
                <p className="text-white font-bold">{race}</p>
                <p className="text-yellow-500">{affiliation}</p>
                <Link href={`/perso/${id}`}>Sobre</Link>
            </div>
        </>
    )
}