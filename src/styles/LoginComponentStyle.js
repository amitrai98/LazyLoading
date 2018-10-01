import { StyleSheet } from 'react-native';

/**
 * login styles.
 */
const LoginComponentStyle = StyleSheet.create({
    container:{
        flexDirection:"column", 
        width:200,
        height:200
    },
    username_input:{
        backgroundColor:'#80cbc4',
        color:'white',
        padding:5,
        height:30,
        margin: 5
    },
    password_input:{
        backgroundColor:'#80cbc4',
        color:'white',
        padding:5,
        height:30,
        margin: 5
    },
    login_response_style: {
        color:'white', 
        backgroundColor:'blue', 
        marginTop:40, 
        padding:10        
    },

    login_button: {        
        paddingLeft: 20,
        paddingRight:20,
        paddingBottom:10,
        paddingTop:10,
        backgroundColor: '#283593',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft:5,
        marginRight:5,
        alignSelf:'center',
        color:'white',
    },
    login_parent:
    {
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop:200
    }
});

export default LoginComponentStyle;