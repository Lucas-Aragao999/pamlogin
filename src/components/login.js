import { Text, View, Image } from 'react-native';
import React from 'react-native';
import styles from '../styles/LoginStyles';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
 <Image 
                source={require('../img/casual_dog.png')}
                style={styles.image1}
                accessibilityLabel='cachorro casual' // Corrigido de 'alt' para 'accessibilityLabel'
            />
            <Text>ótimo dia</Text>
            <Text>i put the new fords all legit</Text>
            </View>
    );

}