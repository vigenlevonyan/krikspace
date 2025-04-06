export default async function handler(req, res) {
  // В реальном проекте тут будет Firestore или база
  const dummyMessages = [
    { name: 'Anna', text: 'Любите и живите.' },
    { name: 'Ben', text: 'Мир всем, кто ищет смысл.' }
  ]
  res.status(200).json(dummyMessages)
}