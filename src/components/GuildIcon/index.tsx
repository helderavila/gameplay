import React from 'react'

import { Image } from "react-native";

import { styles } from './styles'

export function GuildIcon() {

  return (
    <Image
      source={{ uri: 'https://media-exp1.licdn.com/dms/image/C560BAQF4M0IT6_BcsA/company-logo_200_200/0/1620918122423?e=2159024400&v=beta&t=bS2Zs3ue9dfCics0Y1vaBxJJUKQJa_TudRCBf9zNfMY' }}
      style={styles.image}
      resizeMode="cover"
    />
  )
}