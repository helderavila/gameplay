import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import discordImg from '../../assets/discord.png'
import { styles } from './styles';

import { ButtonIconProps } from './interface'

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}