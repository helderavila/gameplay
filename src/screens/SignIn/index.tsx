import React from 'react';

import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import illustrationImg from '../../assets/illustration.png'

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={illustrationImg} style={styles.image} resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas {`\n`} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>
          <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  )
}

export default SignIn;