import Header from './components/header'
import VehicleGrid from './components/vehicle-grid'
export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Header />
      <VehicleGrid vehicles={[]} />
    </main>
  )
}
