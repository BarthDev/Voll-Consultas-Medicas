import { NativeBaseProvider, StatusBar} from 'native-base';

import { TEMAS } from '../src/estilos/temas';
import Rotas from '../src/Rotas';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <NativeBaseProvider theme={TEMAS}>
        
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
          <Rotas />
      
   </NativeBaseProvider>
  );
}

