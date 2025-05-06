'use client'
const dataSet = ['One environment.', 'One brain.', 'One command.']
export default function IdeaSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-32">
      <div>
        <h4 className="text-white text-2xl font-semibold mb-4">
          Everything you need from <br></br> idea to launch..
        </h4>
        {dataSet.map((data, idx) => (
          <h3 key={idx} className="text-white text-6xl font-semibold leading-20 font-gellix">
            {data}
          </h3>
        ))}
      </div>
    </section>
  )
}
