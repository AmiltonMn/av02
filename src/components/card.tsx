import Image from "next/image";
import background from "@/assets/background.jpg"

export const Card = ({name, ki, maxki, race, gender, affiliation, image} : {
    name: string,
    ki: string,
    maxki: string,
    race: string,
    gender: string,
    affiliation: string,
    image: string
}) => {

    const style = 
    {
        background: "h-fit w-[250px] rounded-t-lg",
        cardText: "bg-slate-600 h-fit w-[250px] rounded-b-lg p-3 z-10",
        charImage: "hover:scale-110 hover:z-0 h-[400px] object-scale-down absolute",
        cardImages: "flex justify-center relative items-center transition ease-in-out duration-200 h-[400px]",
    }

    return (
        <>
        <div className="mb-20">
           
            <div className={style.cardImages}>
                {/* <div className={style.backgroundImage}>
                    <Image src={background} alt="Background"></Image>
                </div> */}
                <Image className={style.charImage} fill src={image} alt={name}></Image>
            </div>
            <div className={style.cardText}>
                <p className="text-white">{name}</p>
                <p className="text-yellow-500">{race} - {gender}</p>
                <p className="text-white">Base Ki:</p>
                <p className="text-yellow-500">{ki}</p>
                <p className="text-white">Total Ki:</p>
                <p className="text-yellow-500">{maxki}</p>  
                <p className="text-white">Affiliation</p>
                <p className="text-yellow-500">{affiliation}</p>
            </div>
        </div>
        </>
    )
}