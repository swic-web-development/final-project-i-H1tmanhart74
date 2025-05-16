import Header from './components/header'
import VehicleGrid from './components/vehicle-grid'
import { useState, useEffect } from 'react'

export default function App() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    function fetchVehicles() {
      fetch('https://swapi.dev/api/vehicles/')
        .then((response) => response.json())
        .then((data) => setVehicles(data.results))
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
