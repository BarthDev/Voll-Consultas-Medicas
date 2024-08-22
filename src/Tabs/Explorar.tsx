import { VStack, Text, ScrollView, Box, FormControl, Input, Button} from "native-base";
import { Titulo } from "../components/Titulo";
import { CardConsulta } from "../components/CardConsultas";

export default function Explorar() {
    return (
        <ScrollView flex={1} >
            <VStack mt={8}>
            <Box 
                 w={"4/5"}
                 
                 alignSelf="center"
                 bg="white"
                 borderRadius="md"
                 shadow={1}
                 style={{
                   shadowColor: '#000',
                   shadowOffset: { width: 0, height: 2 },
                   shadowOpacity: 0.15,
                   shadowRadius: 0.14,
                 }}
                >
                   <Box alignSelf='center'>
                   <FormControl mt={10}>
                        <Input 
                        placeholder='Digite a especialidade '
                        size="xl"
                        w="80%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        />
                    </FormControl>
                    <FormControl mt={3}>
                        <Input 
                        placeholder='Digite sua localização'
                        size="xl"
                        w="80%"
                        borderRadius="lg"
                        bgColor="gray.100"
                        />
                    </FormControl>
                   
                   </Box>
                   <Button
                        w="80%"
                        bg="blue.800"
                        mt={5}
                        mb={6}
                        borderRadius="lg"
                        alignSelf='center'
                        >
                            Buscar
                    </Button>
                </Box>

                 <VStack p={5} >
                    <Titulo mb={5} color="blue.500">Resultado da busca</Titulo>
                    <CardConsulta 
                    nome="Dr. Lucas Barth"
                    especialidade="Cardiologista"
                    foto="https://github.com/BarthDev.png"
                    buscar
                    />
                     <CardConsulta 
                    nome="Dr. Lucas Barth"
                    especialidade="Cardiologista"
                    foto="https://github.com/BarthDev.png"
                    buscar
                    />
                     <CardConsulta 
                    nome="Dr. Lucas Barth"
                    especialidade="Cardiologista"
                    foto="https://github.com/BarthDev.png"
                    buscar
                    />
                </VStack>
            </VStack>
        </ScrollView>
    )
}