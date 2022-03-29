
import { StyleSheet, Text, View, FlatList } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/Botao";
import Dados from "./Dados/dadosJogos";
import Jogo from "./src/components/Jogos";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho>

      </Cabecalho>
      
      <Botao Logo="ios-game-controller-outline" Texto="Jogos" Cor="#002333" Logo2="book-outline" Texto2="Livros" Cor2="#002333"/>
      
      <View>
        <FlatList
        horizontal={true}
        data={Dados}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Jogo 
          titulo={item.nome}
          imagem={item.imagem}
          valor={item.valor}
          />
        )}
        />
      </View>
    </View>

  );
}
