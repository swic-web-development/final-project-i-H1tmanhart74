export default function Section({ vehicle }) {
  const { name, model, manufacturer, passengers, cargo_capacity, cost_in_credits } = vehicle

  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-900 p-4">
      <h2 className="text-xl font-bold text-yellow-400">{name}</h2>
      <p className="text-yellow-400">Model: {model}</p>
      <p className="text-yellow-400">Manufacturer: {manufacturer}</p>
      <p className="text-yellow-400">Seats: {passengers}</p>
      <p className="text-yellow-400">Cargo Capacity: {cargo_capacity} kg</p>
      <p className="text-yellow-400">Cost: {cost_in_credits} Credits</p>
    </section>
  )
}
