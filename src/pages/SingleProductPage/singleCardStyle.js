const singleCardStyles ={

    cardStyle:{
     position: "relative",
     padding: "20px",
     marginLeft: "auto",
     width: "1150px",
     height: 500, 
     display: "flex", 
     flexDirection: "row", 
     justifyContent: "flex-end",
     alignItems: "center",
     background: "#FFFFFF",
     borderRadius: "30px",
     
    },
    cardTextContent:{
        width:"50%",
    },
    cardContent:{
        display: "flex", 
        flexDirection: "column",
    },
    backBtn:{
        position: "absolute",
        top: "20px",
        left: "20px",
    },
    cardTitle:{
        fontWeight: 400,
        fontSize: "64px",
        lineHeight: "96px",
    },
    cardFooterStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        fontWeight: 500,
        fontSize: "64px",
        lineHeight: "96px",
    },
    iconStyle: {
        pointerEvents: "none",
        color: "#ffffff",
        width: "70px",
        height: "70px",
    },
    blackIcon:{
        pointerEvents: "none",
        color: "#414141",
        width: "70px",
        height: "70px",
    },
    buttonStyle: {
     width: "85px",
     height: "85px",
     border: "none",
     borderRadius: "10px",
     backgroundColor: "#FFCC26",
    }
}

   export default singleCardStyles

