import { useEffect, useState } from 'react'

export default function App() {
  const [data] = useState([])

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles/4')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <main>
      <h1 className="text-3xl text-red-500">Hello, World!</h1>
      <p>This is a simple React application.</p>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Height: {data.model}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
    </main>
  )
}

/*

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main>
      <h1 className="text-3xl text-red-500">Hello, World!</h1>
      <p>This is a simple React application.</p>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
    </main>
  );
} */
