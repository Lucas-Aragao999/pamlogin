import { Text, View, Image, TouchableOpacity  } from 'react-native';
import React from 'react-native';
import styles from '../styles/defaultStyles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
 <Image 
                source={require('../img/casual_dog.png')}
                style={styles.image1}
                accessibilityLabel='cachorro casual' // Corrigido de 'alt' para 'accessibilityLabel'
            />
            <Text>ótimo dia</Text>
            <Text>i put the new fords all legit</Text>
            <TouchableOpacity style= {styles.button1}>
                <Image source={require('../img/Google.png')}
                style={styles.image2}
                alt ='google'></Image>  
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button2}>
                <Image source={require('../img/Facebook.png')}
                style={styles.image3}
                alt ='google'></Image>  
            </TouchableOpacity>
            
            <Text style={styles.text}>ou</Text>
            <Text style={styles.text}>cadastre-se</Text>
            
            <TouchableOpacity style= {styles.button3}>
                <Text style={styles.textbutton}>entrar</Text>
            </TouchableOpacity>
            </View>
            
    );

}