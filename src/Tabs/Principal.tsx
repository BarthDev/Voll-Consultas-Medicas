import { VStack, Text, ScrollView, Avatar, Divider, Image, Box, FormControl, Input, Button} from "native-base";
import { Titulo } from "../components/Titulo";
import Logo from '../assets/Logo.png'

const testimonials = [
    {
        id: 1,
        testimony: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        name: "Júlio, 40 anos, São Paulo/SP."
    },
    {
        id: 2,
        testimony: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        name: "Julia, 30 anos, Rio Grande do Sul/RS."
    },
    {   
        id: 3,
        testimony: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.",
        name: "Carlos, 52 anos, Rio de Janeiro/RJ."
    }
 ]


export default function Principal() {
    return (
        <ScrollView flex={1}>
            <VStack>
                 <Image source={Logo} alt="Logo Voll" mt={8} ml={4}/>
                <Titulo textAlign="end" p={4} color="blue.500" >Boa-vindas!</Titulo>

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
            </VStack>
            <VStack w="80%" alignSelf="center">   
                <Titulo color="blue.800" fontSize="3xl" mb={3}>Depoimetos</Titulo>     
                    {testimonials.map((testimony) =>(
                        <Box key={testimony.id}>
                            <Text color="gray.300">{testimony.testimony}</Text>
                            <Titulo mb={6} fontSize="lg">{testimony.name}</Titulo> 
                            <Divider mb={6}/>  
                        </Box>
                    ))}   
           </VStack>
        </ScrollView>
    )
}