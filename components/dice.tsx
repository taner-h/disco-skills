import dice1 from "@/content/images/ui/notif-dice 1.png";
import dice2 from "@/content/images/ui/notif-dice 2.png";
import dice3 from "@/content/images/ui/notif-dice 3.png";
import dice4 from "@/content/images/ui/notif-dice 4.png";
import dice5 from "@/content/images/ui/notif-dice 5.png";
import dice6 from "@/content/images/ui/notif-dice 6.png";
import Image from "next/image";

export function Dice({ result }: { result: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const images = [dice1, dice2, dice3, dice4, dice5, dice6];
  const image = images[result - 1];
  return (
    <Image src={image} alt={`dice-result-${result}`} height={120} width={120} />
  );
}
