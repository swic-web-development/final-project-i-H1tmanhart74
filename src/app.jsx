import Header from './components/header'
import VehicleGrid from './components/vehicle-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    function fetchVehicles() {
      fetch('https://swapi.tech/api/vehicles/')
        .then((response) => response.json())
        .then((data) => {
          Promise.all(
            data.results.map((item) =>
              fetch(item.url)
                .then((res) => res.json())
                .then((detail) => detail.result.properties),
            ),
          ).then((vehiclesWithDetails) => setVehicles(vehiclesWithDetails))
        })
        .catch((error) => {
          console.error('Error fetching vehicles:', error)
        })
    }

    fetchVehicles()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Header />
      <VehicleGrid vehicles={vehicles} />
    </main>
  )
}
