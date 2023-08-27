import ChampionSmall from "./ChampionSmall";

async function getData() {
  const champions = [];
  const req = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.16.1/data/es_MX/champion.json"
  );

  if (!req.ok) {
    throw new Error("Failed to fetch data");
  }

  const res = await req.json();
  for (const key in res.data) {
    champions.push(res.data[key]);
  }
  return champions;
}

const ListChampions = async () => {
  const champions = await getData();
  return (
    <section className="w-4/12 gap-y-3 justify-items-center grid grid-cols-4">
      {champions.length > 0 &&
        champions?.map((champion: any) => (
          <ChampionSmall
            key={champion.key}
            name={champion.name}
            image={champion.image.full}
          />
        ))}
    </section>
  );
};

export default ListChampions;
