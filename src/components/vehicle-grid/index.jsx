import Section from './section'

export default function VehicleGrid(state) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {state.vehicles.map((vehicle) => Section({ vehicle })).join('')}
    </div>
  )
}
