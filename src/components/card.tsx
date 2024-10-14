import Image from "next/image";
import background from "@/assets/background.webp"

export const Card = ({name, ki, maxKi, race, gender, affiliation, image} : {
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    affiliation: string,
    image: string
}) => {

    const style = 
    {
        background: "h-fit rounded-t-lg",
        cardText: "bg-zinc-800 h-fit w-[250px] rounded-b-lg p-3 z-10",
        charImage: "hover:scale-110 hover:z-0 object-scale-down absolute hover:drop-shadow-[0_20px_20px_rgba(255,129,0,0.50)] transition-all duration-300",
        cardImages: "flex justify-center relative items-center transition ease-in-out duration-200 h-[400px]",
        backgroundImage: "w-full h-full absolute rounded-t-lg"
    }

    return (
        <>
        <div>
            <div className={style.cardImages}>
                <Image className={style.backgroundImage} src={background} alt="Background"></Image>
                <Image className={style.charImage} fill src={image} alt={name}></Image>
            </div>
            <div className={style.cardText}>
                <p className="text-white font-bold">{name}</p>
                <p className="text-yellow-500 font-bold">{race} - {gender}</p>
                <p className="text-white font-bold">Base Ki:</p>
                <p className="text-yellow-500 font-bold">{ki}</p>
                <p className="text-white font-bold">Total Ki:</p>
                <p className="text-yellow-500 font-bold">{maxKi}</p>  
                <p className="text-white font-bold">Affiliation</p>
                <p className="text-yellow-500 font-bold">{affiliation}</p>
            </div>
        </div>
        </>
    )
}