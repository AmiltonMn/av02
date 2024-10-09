import { ROUTES } from "@/constants/route";
import Link from "next/link";


export const Menu = ({op1, op2, op3, op4} : {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}) => {

    const style = 
    {
        bttn:"px-2 py-1 min-w-3.5 text-white cursor-pointer font-bold text-2xl",
        nav: "bg-black gap-3 font-robFont text-medium flex flex-row justify-around align-center p-3"
    }

    return (
    <nav className={style.nav}>
        <Link href={ROUTES.home} className={style.bttn}>{op1}</Link>
        <Link href={ROUTES.primeiraRota} className={style.bttn}>{op2}</Link>
        <Link href={ROUTES.segundaRota} className={style.bttn}>{op3}</Link>
        <Link href={ROUTES.terceiraRota} className={style.bttn}>{op4}</Link>
    </nav>
    )
}