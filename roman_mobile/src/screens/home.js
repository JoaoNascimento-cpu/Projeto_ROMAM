import React, { Component } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

export default class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }

    logout = () => {
        this.props.navigation.navigate('login')
    }

  render()
  {
    return (
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
    
            <View style={styles.bemVindoHome}>
                <View style={styles.bemVindo}>
                    <Text style={styles.bemVindoText}>bem vindo</Text>
                </View>
                <View style={styles.bemVindo}>
                    <Text style={styles.bemVindoText}>{"User"}</Text>
                </View>
            </View>

            <View style={styles.TarefaHome}>
                <Text style={styles.tarefaText}>tarefas</Text>
            </View>

            <View style={styles.listaTarefa}>
                <Text style={styles.listaTarefaText}>{'{tema}'}</Text>
                <Text style={styles.listaTarefaText}>{'{tarefa}'}</Text>
                <Text style={styles.listaTarefaText}>{'{professor}'}</Text>
                <View style={styles.linhaTarefa}></View>
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

    bemVindoHome: {
        flex: 0.2,
        marginTop: 20,
        // backgroundColor: 'red'
    },  

    bemVindo: {
        flex: 0.5,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    bemVindoText: {
        color: 'black',
        fontFamily: 'Arial',
        fontSize: 40,
        textTransform: 'uppercase',
    },

    TarefaHome: {
        flex: 0.08,
        marginTop: 20,
        backgroundColor: 'rgba(0, 183, 100, 1)',
        justifyContent: 'center',
        alignItems : 'center',
    },

    tarefaText: {
        fontSize: 35,
        fontFamily: 'Arial',
        textTransform: 'uppercase',
        color: 'white'
    },

    listaTarefa: {
        marginTop: 10,
        flex: 'auto',
        // backgroundColor: 'red'
    },

    listaTarefaText: {
        marginTop: 10,
        marginLeft: 30,
        fontFamily: 'Arial',
        fontSize: 25,
    },

    linhaTarefa: {
        marginTop: 20,
        margin: 'auto',
        width: 400,
        height: 2,
        backgroundColor: 'gray'
    },
});