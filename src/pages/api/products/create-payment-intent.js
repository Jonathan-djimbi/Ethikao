// pages/api/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Montant en cents (ex: 1000 pour 10,00 €)
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
