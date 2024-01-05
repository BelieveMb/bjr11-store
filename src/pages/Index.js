import { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import ButtonHome from "../components/index/ButtonHome";

const  imgCard1 = require('../../assets/images/bg-index3.jpg');
const  imgCard3 = require('../../assets/images/bg-index2.jpg');
const titleCard1 = "One best app for all your needs";
const detailCard1 =  "The style prop can be a plain old - the last style in the array has precedence";
const checkSeparator = false;
const separator1 = "...............";



const  imgCard2  = require('../../assets/images/bg-index.jpg');
const  titleCard2 = "One1111 best app for all your needs";
const  detailCard2= "The st111yle prop can be a plain old - ";


function CardHomeDefault({imgCard, titleCard, detailCard, checkSeparator}){
    return (
        <View>
            <Image source={imgCard} style={styles.imageCard} />   
            <h1 style={styles.titleCard}> {titleCard} </h1>
            <p style={styles.CardP}> {detailCard} </p>

            <div style={styles.divSeparator}> 
                    <span style={styles.separatorCard} > 
                        {separator1}.

                    </span> 
                    <span style={styles.separatorCard} > .
                    </span>                  
            </div>
        </View>
    )
}

export default function Index({navigation}){
    

    const [change, setChange] = useState(1);

    function changeImg(){     
        if(change===0){
            setChange(1);
            // checkSeparator = true;
        }else if(change===1) {
            setChange(2);
            // checkSeparator = false;
        }else if(change===2) {
            setChange(3);
            // checkSeparator = false;
        } else{
            setChange(change-2)
        }
    }
    setTimeout(() => {changeImg()}, 5000);

    return(
        <View style={styles.home} >
            { change === 1 ? <CardHomeDefault imgCard={imgCard1} titleCard={titleCard1} detailCard={detailCard1} checkSeparator={checkSeparator}  /> : null }
            { change === 2 ? <CardHomeDefault  imgCard={imgCard2} titleCard={titleCard2} detailCard={detailCard2} checkSeparator={checkSeparator}/> : null }
            { change === 3 ? <CardHomeDefault  imgCard={imgCard3} titleCard={titleCard2} detailCard={detailCard2} checkSeparator={checkSeparator}/> : null }
            <ButtonHome navigation={navigation} />
            <p style={styles.CardP}>The style prop {change} can be a plain old - the last style in the array has precedence. </p>

        </View>
    );
}
const styles = StyleSheet.create({
    home: {
        backgroundColor : '#eceaea',
        display: 'flex',
        flexDirection: "column",
        alignContent: "center",
        justifyContent: 'center',
        textAlign: 'center',
        gap:   2,
        padding: 30,
        width: 'auto',

    },
    imageCard: {
        width: 320,
        height: 340,
        marginTop: 30,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#011',
        borderStyle: 'solid',
    },
    titleCard: {
        fontWeight: 800,
        marginBottom: 0,
        color: '#010422',
        width: 340,
    },
    CardP:{
        width: 340,
        color: '#13141d',
        fontWeight: 400,
    },
    
    divSeparator:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 10,
        width: 320,
    },
    separatorCard:{
        backgroundColor: '#010422',
        color: '#010422',
        padding: 2,
        borderRadius: 100,
        // fontSize: 25,

    },

});
