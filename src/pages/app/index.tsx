import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Stack } from 'expo-router';

const MyColors = {
  verdeEscuro: '#004d40',
  verdeClaro: '#86ff64',
  pretoTexto: '#1a1a1a',
  brancoFundo: '#ffffff'
};

export default function Index() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImg}
        />
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Início</Text>
      </View>

      {/* section destaques */}
      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>🔥 Notícias em Destaque</Text>

        {/* noticia principal */}
        <View style={styles.noticiaPrincipal}>
          <Text style={styles.tituloDestaque}>
            Veja ranking de clubes que mais faturaram com premiações em 2025
          </Text>
          <Text style={{ color: '#555555' }}>
            Atlético-MG pode entrar no top-5 caso conquiste o título da
            Sul-Americana neste sábado (22)
          </Text>

          <TouchableOpacity style={styles.botaoLerMais}>
            <Text style={styles.botaoTexto}>Ler Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View id="ultimas">
        <Text style={styles.tituloSecao}>📰 Últimas Notícias</Text>
        <View style={styles.feedNoticias}>

          {/* Card 1 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia1.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >Speed quebra recorde da NBA e "assusta" Kevin Durant</Text>
            <Text style={styles.descricaoNoticia}>
              Influenciador fez teste para comparar sua aptidão atlética com a
              de jovens que tentam entrar na liga de basquete, surpreendendo
              lenda do esporte com sua velocidade
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>

          {/* Card 2 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia2.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >
              Fórmula 1: Ferrari é a equipe mais valiosa pelo terceiro ano
              seguido
            </Text>
            <Text style={styles.descricaoNoticia}>
              Levantamento mostra que a Red Bull Racing, do atual campeão Max
              Verstappen, é a quarta escuderia mais valiosa do grid.
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>

          {/* Card 3 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia3.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >
              João Lucas Reis se torna segundo melhor tenista do Brasil no
              ranking da ATP
            </Text>
            <Text style={styles.descricaoNoticia}>
              Tenista pernambucano atingiu o feito após vitória na estreia do
              Challenger de Florianópolis, diante do norte-americano Bruno
              Kuzuhara
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>

          {/* Card 4 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia4.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >
              Santos possui melhor aproveitamento com Neymar em campo na
              temporada; veja números
            </Text>
            <Text style={styles.descricaoNoticia}>
              Meia do Peixe teve um problema no joelho esquerdo e pode não atuar
              mais em 2025
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>

          {/* Card 5 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia5.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >
              Neymar preocupa Santos e pode não jogar mais em 2025
            </Text>
            <Text style={styles.descricaoNoticia}>
              Atacante do Peixe teve problema no joelho esquerdo após jogo
              contra o Mirassol e retorno é dúvida retorno nos três jogos finais
              do Brasileirão, em meio à luta contra o rebaixamento
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>

          {/* Card 6 */}
          <View style={styles.noticiaRecente}>
            <Image
              source={require('../../assets/images/noticia6.png')}
              style={styles.imagemNoticia}
            />
            <Text style={styles.tituloNoticia} >
              Brasil goleia Itália e garante vaga nas quartas da Copa Feminina
              de Futsal
            </Text>
            <Text style={styles.descricaoNoticia}>
              Seleção derrotou as italianas por 6 a 1 na segunda rodada do Grupo
            </Text>
            <TouchableOpacity style={styles.botaoLerMais}>
              <Text style={styles.botaoTexto}>Ler Mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.container}>
          <Text style={styles.copyright}>
            © Notícias Agora. Todos os direitos reservados.
          </Text>

          <View style={styles.linksContainer}>
            <Text style={styles.link}>Política de Privacidade</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Contato</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: MyColors.brancoFundo,
  },
  header: {
    backgroundColor: MyColors.verdeEscuro,
    paddingVertical: 20,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImg: {
    height: 40,
    width: 120,
    resizeMode: 'contain',
  },
  secao: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: MyColors.pretoTexto,
    marginBottom: 15,
    marginLeft: 16,
  },

  noticiaPrincipal: {
    backgroundColor: '#f8f8f8',
    padding: 25,
    borderLeftWidth: 8,
    borderLeftColor: MyColors.verdeClaro,
  },
  tituloDestaque: {
    color: MyColors.verdeEscuro,
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },

  // --- AQUI ESTÁ A MÁGICA DO GRID ---
  feedNoticias: {
    padding: 16,
    gap: 20,
    flexDirection: 'row', // Coloca os itens um ao lado do outro
    flexWrap: 'wrap',     // Permite quebrar para a linha de baixo se faltar espaço
    // justifyContent: 'space-between', // Distribui o espaço entre os cards
  },

  noticiaRecente: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "31%", // Cada card ocupa cerca de 31% da largura do container
    flexGrow: 1,
  },

  imagemNoticia: {
    width: '100%',
    height: 180,
    borderRadius: 6,
    marginBottom: 12,
    resizeMode: 'cover',
  },

  tituloNoticia: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },

  descricaoNoticia: {
    fontSize: 14,
    color: '#004D40',
    marginBottom: 16,
    lineHeight: 20,
  },

  botaoLerMais: {
    backgroundColor: '#01492D',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  botaoTexto: {
    color: MyColors.brancoFundo,
    fontWeight: 'bold',
    fontSize: 14,
  },

  footer: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    gap: 8,
  },
  copyright: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  link: {
    color: '#4ade80',
    fontSize: 14,
    fontWeight: '500',
  },
  separator: {
    color: '#ffffff',
  },
});