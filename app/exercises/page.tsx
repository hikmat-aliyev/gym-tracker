import Image from "next/image";

interface Image {
  id: number;
  name: string;
  gifUrl: string;
  instructions: string;
  target: string;
  secondaryMuscles: [];
}

const Exercises = async () => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5c506613dbmsh93934315097af39p165c6ajsn2741d23b0458',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options)
  const result = await response.json()
  console.log(result)

  return (
    <main className="">
      <p>Hello</p>
      {result.map((item: Image) => 
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h3>Target muscle: {item.target}</h3>
          <h4>Secondary muscles: {item.secondaryMuscles.map(item => <p>{item}</p>)}</h4>
          <Image 
          className="border m-5"
          src={item.gifUrl}
          width={200}
          height={200}
          alt="Picture of the author"
          />
          <p>Instructions: {item.instructions}</p>
        </div>
      )}
    </main>
  );
}

export default Exercises