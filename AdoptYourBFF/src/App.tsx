import { StatusBar } from 'expo-status-bar'
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
import { Text, View } from 'react-native'

import React, { useState } from 'react'

import '@/global.css'

export const App = () => {
  const [colorMode, setColorMode] = useState<'light' | 'dark' | 'system'>('system')

  return (
    <GluestackUIProvider mode={colorMode}>
      <View className="border-8">
        <Text className="font-extrablack">Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </GluestackUIProvider>
  )
}
