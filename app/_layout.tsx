import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ReduxProvider } from '../src/redux/provider';

export default function AppLayout() {
  return (
    <ReduxProvider>
      <StatusBar translucent backgroundColor="red" />
      <Slot />
    </ReduxProvider>
  );
}
