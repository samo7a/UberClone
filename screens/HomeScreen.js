import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{ uri: "https://links.papareact.com/gzs" }} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    safeArea: {
        backgroundColor: "white",
    },
    container: {
        padding: 5,
    },
})

