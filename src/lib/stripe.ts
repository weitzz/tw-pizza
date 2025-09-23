import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js';
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
//const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY);