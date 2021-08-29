import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

const AppointmentDetails = () => {
  const members = [
    {
      id: '1',
      userName: 'Helder',
      avatar_url: 'https://github/ImagicTheCat.png',
      status: 'online'
    },
    {
      id: '2',
      userName: 'Helder',
      avatar_url: 'https://github/ImagicTheCat.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <FlatList
        style={styles.members}
        data={members}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <Member
            data={item}
          />
        )}
      />
      <View style={styles.footer}>
        <ButtonIcon
          title="Entrar na partida"
        />
      </View>
    </Background>
  )
}

export default AppointmentDetails;