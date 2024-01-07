import { StyleSheet } from 'react-native'

const  HomeStyles = StyleSheet.create({ 
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        color: '#222',
        paddingHorizontal: '1rem',
        paddingVertical: '1.5rem',
        width: 395,
    }, 
    productCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '8rem',
        width: '8rem',
        padding: '1rem',
    },
    btnCard: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#010422',
        borderRadius: 18,
        borderWidth: 2,
        padding: 12,
        fontFamily: 'Arial',
        width: '6rem',
    },
    contentCat: {
        display:'flex', 
        flexDirection:'column', 
        gap:'0.4rem', 
        alignItems:'center', 
        justifyContent:'center',
    },
    shopCard: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },

    blockCat: {backgroundColor: '#7e7a7a', display: 'flex', flexDirection: 'column', gap: 4, padding: 4, }
});

export default HomeStyles