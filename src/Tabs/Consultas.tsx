import { VStack, Divider, Button, ScrollView} from "native-base";
import { CardConsulta } from "../components/CardConsultas";
import { Titulo } from "../components/Titulo";

export default function Consutas() {
    return (
        <ScrollView p="5">
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Button 
                w="100%"
                bg="blue.800"
                mt={5}
                mb={6}
                borderRadius="lg"
                alignSelf='center'
            >
                Agendar outra consulta
            </Button>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta 
                nome="Dr. Lucas Barth"
                especialidade="Cardiologista"
                foto="https://github.com/BarthDev.png"
                data="20/08/2024"
                foiAgendado
              
            />

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta 
                nome="Dr. Lucas Barth"
                especialidade="Cardiologista"
                foto="https://github.com/BarthDev.png"
                data="20/08/2024"
                foiAtendido
            />
            <CardConsulta 
                nome="Dr. Lucas Barth"
                especialidade="Cardiologista"
                foto="https://github.com/BarthDev.png"
                data="20/08/2024"
                foiAtendido
            />
            <CardConsulta 
                nome="Dr. Lucas Barth"
                especialidade="Cardiologista"
                foto="https://github.com/BarthDev.png"
                data="20/08/2024"
                foiAtendido
            />
        </ScrollView>
    )
}