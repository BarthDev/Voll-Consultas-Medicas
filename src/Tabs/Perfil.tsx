import { VStack, Text, ScrollView, Avatar, Divider} from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{ uri: "https://github.com/BarthDev.png"}} mt={5} />

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Lucas Barth</Titulo>
                <Text>12/12/1990</Text>
                <Text>Estância Velha</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Síndrome do Revisor de Código</Text>
                <Text>Síndrome do Pesadelo de Deploy</Text>
                <Text>Sobrecarga Neural</Text>
            </VStack>
        </ScrollView>
    )
}