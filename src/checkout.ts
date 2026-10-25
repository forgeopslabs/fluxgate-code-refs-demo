import { client } from './flags';

export async function checkoutPage(userId: string): Promise<string> {
  const newCheckout = await client.getBooleanValue('demo-new-checkout', false, { targetingKey: userId });
  return newCheckout ? 'checkout-v2' : 'checkout-v1';
}
