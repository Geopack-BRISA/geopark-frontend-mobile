import * as SecureStore from 'expo-secure-store';

export async function saveSecureValue(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureValue(key: string) {
  const result = await SecureStore.getItemAsync(key);
  return result;
}
