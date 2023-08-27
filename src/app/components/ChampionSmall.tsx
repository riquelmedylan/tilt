import Image from "next/image";

export const ChampionSmall = ({ image, name }: any): React.ReactNode => {
  return (
    <div>
      <Image
        priority={true}
        src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${image}`}
        width={85}
        height={85}
        alt={`${name}.png`}
      />
      <p>{name}</p>
    </div>
  );
};

export default ChampionSmall;
