import { StyleSheet } from 'react-native';

export const font = StyleSheet.create({
  titleFont: {
    fontFamily: 'Avenir-Heavy',
    color: '#5e4d2b',
  }
})

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
    // Original Color Scheme
    backgroundColor: '#D6AE60',

    // Alternate Color Scheme
    //backgroundColor: '#fcfeff',

    flex: 1,
    justifyContent: 'center',
  }, 
  topbar: {
    // Original Color Scheme
    backgroundColor: '#FDDC9B',
    
    // Alternate Color Scheme
    //backgroundColor: '#fcfeff',
    //borderBottomWidth: 0.6,
    //borderColor: 'black',

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

    // Original Color Scheme
    backgroundColor: '#FDDC9B',

    // Alternate Color Scheme
    //backgroundColor: '#fcfeff',
    //borderTopWidth: 0.6,
  }
});

export const recommenderStyles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  // The actual dropdown
  dropdown: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5e4d2b',
  },
  // The items in the actual dropdown
  dropdownItems: {
    alignItems: 'center',
  },
  // The box displaying the selected choice
  dropdownBox: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5e4d2b',
    width: 320,
  },
  // The text in the dropdown display box
  dropdownBoxText: {
    fontSize: 15,
  },
})












