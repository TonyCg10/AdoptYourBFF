import { StatusBar } from 'expo-status-bar'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import '@/global.css'

export const App = () => {
  return (
    <GluestackUIProvider mode="light">
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
