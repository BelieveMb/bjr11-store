import { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import ButtonHome from "../components/index/ButtonHome";

const  imgCard1 = require('../../assets/images/bg-index3.jpg');
const titleCard1 = "Découvrez les Nouveautés";
const detailCard1 =  "Découvrez les dernières tendances et les nouveautés de la saison dans notre boutique en ligne...";
const whitoutSeparator = ".";
const separator = "...............";

const  imgCard2  = require('../../assets/images/bg-index.jpg');
const  titleCard2 = "Promotions Immanquables";
const  detailCard2= "Profitez de nos promotions immanquables sur une large gamme de produits. Découvrez des réductions exclusives... ";

const titleCard3 = "Explorez nos Collections";
const  imgCard3 = require('../../assets/images/bg-index2.jpg');
const  detailCard3= "Plongez dans un univers de diversité et d'élégance en explorant nos collections variées. Des vêtements tendance aux gadgets innovants...";


export default function Index({navigation}){
    

    const [change, setChange] = useState(1);

    function changeImg(){     
        if(change===0){
            setChange(1);
        }else if(change===1) {
            setChange(2);
        }else if(change===2) {
            setChange(3);
        } else{
            setChange(change-2)
        }
    }
    setTimeout(() => {changeImg()}, 5000);

    function CardHomeDefault({imgCard, titleCard, detailCard, separator}){
        return (
            <View>
                <Image source={imgCard} style={styles.imageCard} />   
                <h1 style={styles.titleCard}> {titleCard} </h1>
                <p style={styles.CardP}> {detailCard} </p>
    
                <div style={styles.divSeparator}> 
                        <span style={styles.separatorCard} > 
                            { change===1 ? separator : "."}
                        </span> 
                        <span style={styles.separatorCard} > 
                            { change===2 ? separator : "."}
                        </span>
                        <span style={styles.separatorCard} > 
                            { change===3 ? separator : "."}
                        </span>                                    
                </div>
            </View>
        )
    }
    

    return(
        <View style={styles.home} >
            { change === 1 ? <CardHomeDefault imgCard={imgCard1} titleCard={titleCard1} detailCard={detailCard1} separator={separator}  /> : null }
            { change === 2 ? <CardHomeDefault  imgCard={imgCard2} titleCard={titleCard2} detailCard={detailCard2} separator={separator}/> : null }
            { change === 3 ? <CardHomeDefault  imgCard={imgCard3} titleCard={titleCard3} detailCard={detailCard3} separator={separator}/> : null }
            <ButtonHome navigation={navigation} textBtn="Allons-y"/>
            <p style={styles.CardP}> Laissez-vous inspirer par nos catégories soigneusement organisées et découvrez des trésors cachés qui ne demandent qu'à être dévoilés. </p>

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
