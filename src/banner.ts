import { client } from './flags';

export async function showBanner(userId: string): Promise<boolean> {
  // The legacy banner flag is archived in FluxGate; this code should be removed.
  return client.getBooleanValue('demo-legacy-banner', false, { targetingKey: userId });
}
