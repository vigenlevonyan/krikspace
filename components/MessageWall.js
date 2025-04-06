export default function MessageWall({ messages }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-2xl font-bold mb-4">Крики, которые уже в небе:</h2>
      {messages.length === 0 && <p className="text-gray-500">Пока тишина...</p>}
      {messages.map((msg, i) => (
        <div key={i} className="border-b py-2">
          <p className="font-semibold">{msg.name}</p>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  )
}