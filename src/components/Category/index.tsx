import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { styles } from './styles'

import { theme } from '../../global/styles/theme'

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckbox?: boolean;
}

export function Category({ title, icon: Icon, checked = true, hasCheckbox = false, ...rest }: CategoryProps) {
  const { secondary50, secondary70, secondary85, secondary40 } = theme.colors

  return (
    <RectButton
      {...rest}
    >
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary85 : secondary40, secondary40]}
        >
          {hasCheckbox && <View style={checked ? styles.checked : styles.check} />}
          <Icon width={48} height={48} />
          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}