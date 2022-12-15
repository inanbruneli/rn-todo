import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1A1A1A',    
  },
  containerInput:{
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    marginTop:-50,
  },
  input :{
    flex:1,
    height: 54,    
    backgroundColor: '#262626',
    borderColor:'#0D0D0D',    
    borderWidth:1,
    borderRadius: 6,
    padding: 16,
    shadowColor: "rgba(0,0,0,.25)",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botao:{    
    marginLeft: 4,
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection :'row',
  },
  containerStatus:{
    justifyContent: 'space-between',
    flexDirection:'row',
    paddingHorizontal: 24,    
  },
  itemStatus:{
    flexDirection:'row',    
  },
  textStatus:{
    fontWeight:'bold',
    marginRight:10
  },
  criadas:{
    color:'#4EA8DE'
  },
  concluidas:{
    color:'#8284FA'
  },
  numeroStatus:{
    fontWeight:'bold',    
  },
  containerNumero: {
    backgroundColor:'#333333',
    
  }
});
