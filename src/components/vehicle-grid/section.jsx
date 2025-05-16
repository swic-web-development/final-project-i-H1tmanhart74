export default function Section({ vehicle }) {
  const { name, model, manufacturer, passengers, cargo_capacity, cost_in_credits } = vehicle

  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-lg">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <p className="text-gray-400">Model: {model}</p>
      <p className="text-gray-400">Manufacturer: {manufacturer}</p>
      <p className="text-gray-400">Seats: {passengers}</p>
      <p className="text-gray-400">Cargo Capacity: {cargo_capacity} kg</p>
      <p className="text-gray-400">Cost: {cost_in_credits} Credits</p>
    </section>
  )
}
