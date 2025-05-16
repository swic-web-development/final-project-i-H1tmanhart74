export default function Section({ vehicles }) {
  const { name, model, manufacturer, cost_in_credits } = vehicles

  return (
    <section className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-4 shadow-lg">
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <p className="text-gray-400">Model: {model}</p>
      <p className="text-gray-400">Manufacturer: {manufacturer}</p>
      <p className="text-gray-400">Cost: {cost_in_credits} credits</p>
    </section>
  )
}
