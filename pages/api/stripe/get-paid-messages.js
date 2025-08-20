export default async function handler(req, res) {
  // In a real project, this would be Firestore or a database
  const dummyMessages = [
    { name: 'Anna', text: 'Love and live.' },
    { name: 'Ben', text: 'Peace to all who seek meaning.' }
  ]
  res.status(200).json(dummyMessages)
}