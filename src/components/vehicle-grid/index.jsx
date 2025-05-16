import Section from './section'

export default function VehicleGrid({ vehicles }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <Section vehicle={vehicle} key={vehicle.name} />
      ))}
    </div>
  )
}
