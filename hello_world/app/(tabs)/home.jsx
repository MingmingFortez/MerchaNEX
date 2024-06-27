import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList 
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={(
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="text-3xl font-ibold">
                    MerchaNEX
                  </Text>
                </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home