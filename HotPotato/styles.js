import { StyleSheet } from 'react-native';

export const pageStyles = StyleSheet.create({
	container: {
        display: 'flex',
        alignItems: 'center',
        height: '90%',
        width: '96%',
        left: '2%',
        top: '2.25%',

        // To make the main page more like the figma
        //backgroundColor: '#FDDC9B',
        //borderRadius: 5,
    },
    contentBox: {
        backgroundColor: '#FDDC9B',
        borderColor: '#91743f',
        borderWidth: 3,
        borderRadius: 5,
        marginTop: 7,
        height: '20%',
        width: '95%',

        // To make the content boxes more like the figma
        //borderColor: '#D6AE60',
    }
});

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6AE60',
    justifyContent: 'center',
  }, 
  topbar: {
    backgroundColor: '#FDDC9B',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '12.5%',
    paddingBottom: 3,
  },
  icons: {
    resizeMode: 'contain',
    height: 65,
    width: 65,
  },
  navbar: {
    display: 'flex',
    backgroundColor: '#FDDC9B',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    height: '12.5%',
    marginBottom: 20,
    paddingBottom: 25,
    
    // To make the navbar like the figma
    //left: '2%',
    //width: '96%',
    //borderRadius: 5,

    // An alternate design
    width: '100%',
  }
});