import React from 'react'

import { ScrollView } from "react-native";

import { Category } from '../Category';

import { styles } from './styles'

import { categories } from '../../utils/categories'

type CategorySelectProps = {
  selectedCategory: string;
  setCategory: (categoryId: string) => void
}

export function CategorySelect({ selectedCategory, setCategory }: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40, alignItems: "center" }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === selectedCategory}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  )
}