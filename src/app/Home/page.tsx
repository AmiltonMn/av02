import { Menu } from "@/components/menu";
import Image from "next/image";
import Logo from "@/assets/apiLogo.webp"

export default function Home() {

  const style = {
    estilo: "flex flex-col gap-8 row-start-2 items-center sm:items-start"
  }
  return (
    <div>
      <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota" op4="Terceira Rota"/>
      
      <div className="mt-32 mb-10 flex flex-col items-center">
          <Image src={Logo} alt="Logo"></Image>
          <h1 className="mt-10 text-4xl font-bold text-yellow-500">The Dragon Ball API</h1>
      </div>
    </div>
  );
}
