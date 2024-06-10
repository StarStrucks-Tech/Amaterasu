// App.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import VisualElement from './visualelementExample/VisualElement';

const App: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <VisualElement
                    title="Beautiful Scenery"
                    description="A beautiful scenery of mountains and rivers."
                    imageUrl='https://tse1.mm.bing.net/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwHaE7&pid=Api&P=0&h=180'
                />
                <VisualElement
                    title="City Lights"
                    description="The city lights shining brightly at night."
                    imageUrl='https://tse2.mm.bing.net/th?id=OIP.NnO-YQus2OWWyjGbcBghVgHaEo&pid=Api&P=0&h=180'
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
});

export default App