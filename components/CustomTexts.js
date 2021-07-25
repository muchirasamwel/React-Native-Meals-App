import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const SuperText = props => {
  return (
    <Text {...props} style={{ ...styles.superHead, ...props.style }}>
      {props.children}
      <Text>___</Text>
    </Text>
  )
}
export const SuperTextN = props => {
  return (
    <Text style={{ ...styles.superHead, ...props.style }}>
      {props.children}
    </Text>
  )
}
export const HeadText = props => {
  return (
    <Text {...props} style={{ ...styles.head, ...props.style }}>
      {props.children}
    </Text>
  )
}

export const CustomText = props => {
  return (
    <Text style={{ ...styles.normal, ...props.style }}>{props.children}</Text>
  )
}
const styles = StyleSheet.create({
  superHead: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'bulleto'
  },
  head: {
    fontFamily: 'poppin-bold',
    fontSize: 20
  },
  normal: {
    fontSize: 15,
    fontFamily: 'poppin-medium'
  }
})
