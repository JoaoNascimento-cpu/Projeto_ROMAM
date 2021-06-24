import React, { Component } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

export default class Cadastro extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    render()
    {
        return(
            <View style={styles.tela}>
                <View style={styles.headerHome}>
    
                    <View style={styles.headerMeio}>
                        <TouchableOpacity
                            style={styles.logoutHome}
                            onPress={this.logout}
                        >
                            <Image
                                source={require('../../assets/Img/seta.png')}
                                style={styles.logoutImg}
                            />

                            <Text style={styles.logoutText}>logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerMeio2}>
                        <Image
                            source={require('../../assets/Img/logoHeader.png')}
                            style={styles.headerLogo}
                        />
                    </View>
                </View>

                <View style={styles.tituloCadastro}>
                    <Text style={styles.tituloText}>cadastro</Text>
                </View>

                <View style={styles.inputCadastro}>
                    <View style={styles.backInput}>
                        <View style={styles.inputMeio}>
                            <Text style={styles.inputText}>Tema</Text>
                        </View>

                        {/* <View style={styles.inputMeio}>

                        </View> */}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tela: {
        flex: 1
    },

    headerHome: {
        flex: 0.12,
        backgroundColor: 'black',
        flexDirection: 'row',
    },

    headerMeio: {
        flex: 0.5,
        justifyContent: 'center',
        // backgroundColor: 'red',
    },

    logoutHome: {
        width: 170,
        height: 55,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        // backgroundColor: 'blue',
    },

    logoutImg: {
        width: 50,
        height: 50,
        tintColor: 'white',
    },

    logoutText: {
        fontFamily: 'Arial',
        fontSize: 25,
        color: 'white',
        textTransform: 'uppercase',
    },

    headerMeio2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'blue'
    },

    headerLogo: {
        width: 130,
        height: 60,
    },

    tituloCadastro: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'red',
    },
    
    tituloText: {
        fontSize: 35,
        fontFamily: 'Arial',
        textTransform: 'uppercase',
    },
    
    inputCadastro: {
        flex: 0.775,
        backgroundColor: '#00A359',
        justifyContent: 'center',
    }, 
    
    backInput: {
        flex: 0.8,
        backgroundColor: 'red',
        flexDirection: 'row',
    },

    inputMeio: {
        flex: 0.5,
        backgroundColor: 'blue'
    },  
})