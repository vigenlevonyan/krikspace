export default async function handler(req, res) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const { name, text } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Krik.Space Message' },
        unit_amount: 100,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/`,
    metadata: { name, text }
  });

  res.status(200).json({ id: session.id });
}