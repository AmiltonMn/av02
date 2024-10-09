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
        cardText: "bg-slate-600 h-fit w-[200px] rounded-b-lg p-2 z-10",
        charImage: "h-fit w-[100px]",
        cardImages: "flex justify-center items-center hover:scale-110 hover:z-0 transition ease-in-out duration-200 h-[200px]",
    }

    return (
        <>
        <div>
            <div className={style.cardImages}>
                {/* <Image className={style.background} src={background} alt="cardBackground"></Image> */}
                <Image className={style.charImage} width={130} height={0} src={image} alt="cardBackground"></Image>
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