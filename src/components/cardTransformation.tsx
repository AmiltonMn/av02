import Image from "next/image";
import background from "@/assets/background.webp"

export const CardTransformation = ({name, ki, image} : {
    name: string,
    ki: string,
    image: string
}) => {

    const style = 
    {
        cardText: "bg-zinc-800 h-fit w-[250px] rounded-b-lg p-3 z-10",
        charImage: "hover:scale-110 hover:z-0 h-[400px] object-scale-down absolute hover:drop-shadow-[0_20px_20px_rgba(255,129,0,0.50)] transition-all duration-300",
        cardImages: "flex justify-center relative items-center transition ease-in-out duration-200 h-[400px]",
        backgroundImage: "w-full h-full absolute rounded-t-lg"
    }

    return (
        <>
        <div className="mb-20">
            <div className={style.cardImages}>
                <Image className={style.backgroundImage} src={background} alt="Background"></Image>
                <Image className={style.charImage} fill src={image} alt={name}></Image>
            </div>
            <div className={style.cardText}>
                <p className="text-yellow-500 font-bold">{name}</p>
                <p className="text-white font-bold">Base Ki:</p>
                <p className="text-yellow-500 font-bold">{ki}</p>
            </div>
        </div>
        </>
    )
}