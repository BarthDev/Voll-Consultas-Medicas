import { Text, Avatar, VStack, Button} from 'native-base';

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
    buscar?: boolean;
}

export function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    foiAgendado,
    foiAtendido,
    buscar
}: CardProps){
    return(
        <VStack 
            w="100%" 
            bg={foiAtendido ? 'blue.100' : buscar ? 'white' : 'white'}
            p="5" 
            borderRadius="lg"
            mb={5}
            shadow={2}
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 0.44,
            }}
            >

            <VStack flexDir="row" p="3" >
                <Avatar size="lg" source={{ uri: foto}}/>
                    <VStack pl="4">
                        <Text fontSize="lg" bold>{nome}</Text>
                        <Text fontSize="md">{especialidade}</Text>
                        <Text  fontSize="xs">{data}</Text>
                    </VStack>
                </VStack>

             <Button
                w="100%"
                bg="blue.800"
                mt={2}
                mb={2}
                borderRadius="lg"
                alignSelf='center'
                >
                 {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
                </Button>
        </VStack>
    )
}
