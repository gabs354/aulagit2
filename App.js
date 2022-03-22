
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/Botao";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho>

      </Cabecalho>
      <Botao Logo="ios-game-controller-outline" Texto="Jogos" Cor="#002333" Logo2="book-outline" Texto2="Livros" Cor2="#002333"/>
      
     </View>
  );
}
