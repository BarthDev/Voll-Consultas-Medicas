import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />

     <Titulo>
      Faça Login em sua conta
     </Titulo>
     
      <Box
      >
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
          placeholder='Insira seu endereço de email'
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          shadow={3}
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
          placeholder='Insira sua senha'
          size="lg"
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          shadow={3}
          />
        </FormControl>
      </Box>
      <Button
      w="100%"
      bg="blue.800"
      mt={10}
      borderRadius="lg"
      onPress={() => navigation.navigate('Tabs')}
      >
        Entrar
      </Button>

      <Link  href='https://bgsolution.com.br' mt={2}>
         Esqueceu sua Senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>
          Ainda não tem cadastro?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça Seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


