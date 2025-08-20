import { Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import styles from './telaRegisterStyle';

export default function TelaHome({ navigation }) {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [oculto, setOculto] = useState(true);
    const [confirmarOculto, setConfirmarOculto] = useState(true);

    function handleSocialLogin () {
        Alert.alert('Login inválido!', 'Funcionalidade ainda não implementada.');
    };

    useEffect(() => {
        // Só verifica as senhas se ambas estão preenchidas
        if (senha && confirmarSenha) {
            const timer = setTimeout(() => {
                if (senha !== confirmarSenha) {

                    Alert.alert('Erro', 'As senhas não coincidem.');
                }
            }, 1000); // Espera 1/2 segundo após parar de digitar

            return () => {
                clearTimeout(timer);
            }
        }
    }, [senha, confirmarSenha]);

    function handleContinuar() {
    // Verifica campos vazios
    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
        Alert.alert("Preencha todos os campos", "Insira os valores necessários para prosseguir.");
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        Alert.alert("Erro", "As senhas não coincidem.");
        return;
    }

    // Tudo certo → navega
    navigation.navigate('Nome');
}

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Cadastre-se</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu email'
                    value={email}
                    onChangeText={setEmail}                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={oculto}
                        placeholder='insira sua senha'
                    />
                    <TouchableOpacity onPress={() => setOculto(!oculto)}>
                        <Image
                            source={oculto ? require('../../../assets/images/eye-open.png') : require('../../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Confirmar senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={confirmarOculto}
                        placeholder='confirme sua senha'
                    />
                    <TouchableOpacity onPress={() => setConfirmarOculto(!confirmarOculto)}>
                        <Image
                            source={confirmarOculto ? require('../../../assets/images/eye-open.png') : require('../../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonEntry} onPress={handleContinuar}>
                    <Text style={{ color: '#ffffff' }}>Entre</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.dividingLine} />

                <Text style={styles.textLine}>OU</Text>

                <View style={styles.dividingLine} />
            </View>

            <View style={styles.containerImage}>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../../assets/images/Google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../../assets/images/Facebook.png')}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}