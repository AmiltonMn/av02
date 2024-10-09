import { Menu } from "@/components/menu";
import Image from "next/image";

export default function Home() {

  const style = {
    estilo: "flex flex-col gap-8 row-start-2 items-center sm:items-start"
  }
  return (
    <div>
      <Menu op1="Home" op2="Primeira Rota" op3="Segunda Rota"/>
    </div>
  );
}
