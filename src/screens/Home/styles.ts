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
    flexDirection:'row'
  },
  input :{
    flex:1,
    height: 54,    
    backgroundColor: '#262626',
    borderColor:'#0D0D0D',    
    borderWidth:1,
    borderRadius: 6
  },
  botao:{
    marginLeft: 4,
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  }
});
