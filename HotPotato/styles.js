import { StyleSheet } from 'react-native';

export const font = StyleSheet.create({
  titleFont: {
    fontFamily: 'Nunito-Reg',
    color: '#443105'
  }
})

export const pageStyles = StyleSheet.create({
	container: {
    display: 'flex',
    alignItems: 'center',
    height: '86.5%',
    width: '96%',
    left: '2%',
    top: '1%',
    paddingTop: 10,
    

    // To make the main page more like the figma
    backgroundColor: '#FDDC9B',
    borderRadius: 15,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 10,
  },
  contentBox: {
    backgroundColor: '#FDDC9B',
    borderColor: '#91743f',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 7,
    // height: '20%',
    width: '95%',
    padding: 10,

    // To make the content boxes more like the figma
    borderColor: '#D6AE60',
  },
  button: {
    borderColor: '#443105',
    borderWidth: 3,
    borderRadius: 5,
    height: 55,
    width: 280,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButton: {
    borderColor: '#443105',
    borderWidth: 3,
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: '#D6AE60',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '11%',
    paddingBottom: 6,
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
  },
});

// export const fonts = StyleSheet.create({
//   header: {
//     fontFamily: "Nunito-ExtraBold",
//   },
//   subHeader: {
//     fontFamily: "Nunito-Bold",
//   }
// })

export const displayStyles = StyleSheet.create({
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 100,
  }
})

export const textStyles = StyleSheet.create({
  header: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 30,
    lineHeight: 35,
  },
  subHeader: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 25,
    lineHeight: 35,
  },
  medium: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    lineHeight: 25,
  },
  regular: {
    color: '#443105',
    fontFamily: "Nunito-Bold",
    fontSize: 15
  },
  whiteSubHeader: {
    color: '#FFF2D9',
    fontFamily: "Nunito-ExtraBold",
    fontSize: 25,
    lineHeight: 35,
  }
});

export const recommenderStyles = StyleSheet.create({
  formSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  // The actual dropdown
  dropdown: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#443105',
    height: 160,
  },
  // The items in the actual dropdown
  dropdownItems: {
    alignItems: 'center',
  },
  // The box displaying the selected choice
  dropdownBox: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#443105',
    width: 300,
  },
  badge: {
    borderColor: '#443105',
    borderWidth: 3,
    borderRadius: 5,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDDC9B',
  },
  readyButton: {
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: 10,
  }
  // The text in the dropdown display box
  // dropdownBoxText: {
  //   fontSize: 15,
  // },
});

export const regimenStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    borderWidth: 3,
    borderRadius: 10,
    height: '91%',
    width: '95%',
    padding: 10,
    borderColor: '#D6AE60',
  },
  workoutTitle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  checklist: {
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  sumbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});