import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Text } from 'react-native';

import { useAppSelector } from '../../redux/store';

export const FontText = ({
  text,
  style,
}: {
  text: string | number;
  style?: object;
}) => {
  const theme = useAppSelector((state) => state.theme);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = {
    ...style,
    color: theme.textMain,
    fontFamily: 'Poppins_400Regular',
  };

  return <Text style={styles}>{text}</Text>;
};
