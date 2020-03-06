import {createStore} from 'redux';

let initialState = {
    list:[
        // {
        //     listId:1,
        //     listname:"Progress",
        //     card:[
        //         {
        //             cardId:1,
        //             cardData:"React",

        //         },
        //         {
        //             cardId:2,
        //             cardData:"Angular",

        //         }
        //     ]
        // },
        // {
        //     listId:2,
        //     listname:"Completed",
        //     card:[
        //         {
        //             cardId:1,
        //             cardData:"Vue",
                    
        //         }
        //     ]
        // },
        // {
        //     listId:3,
        //     listname:"Trial",
        //     card:[
        //         {
        //             cardId:1,
        //             cardData:"React",

        //         },
        //         {
        //             cardId:2,
        //             cardData:"Angular",

        //         }
        //     ]
        // }
    ],
    editStatus:false,
    editData:"",
    editDataListId:"",
    editDataCardId:"",
    posListId:"",
    posCardId:"",
    x:'',
    y:''
}
function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state));
    console.log("action Here>>>",action.type,action.payload)
    switch (action.type){
        case "add_List":
            let list = {
                listId: new Date().toString(),
                listname: action.payload,
                card:[]
            }
            stateCopy.list.push(list);
            try{localStorage.setItem("db", JSON.stringify(stateCopy))}catch(e){console.log(e)}
            return stateCopy;
        case "add_Card":
            let card = {
                cardId : new Date().toString(),
                cardData : action.payload.data
            }
            stateCopy.list[action.payload.index].card.push(card);
            try{localStorage.setItem("db", JSON.stringify(stateCopy))}catch(e){console.log(e)}
            return stateCopy;
        case "editing":
            stateCopy.editStatus=true;
            stateCopy.editDataListId = action.payload.listId;
            stateCopy.editDataCardId = action.payload.cardId;
            
            let posListId = stateCopy.list.map(function(e) { return e.listId; }).indexOf(action.payload.listId)
            let posCardId = stateCopy.list[posListId].card.map(function(e) { return e.cardId; }).indexOf(action.payload.cardId)
            console.log("pos Here>>>",posListId,posCardId);
            stateCopy.editData = stateCopy.list[posListId].card[posCardId].cardData
            stateCopy.posListId=posListId;
            stateCopy.posCardId=posCardId;
            stateCopy.x=action.payload.x;
            stateCopy.y=action.payload.y;
            try{localStorage.setItem("db", JSON.stringify(stateCopy))}catch(e){console.log(e)}
            return stateCopy;
        case "update_Data":
            stateCopy.list[stateCopy.posListId].card[stateCopy.posCardId].cardData = action.payload
            stateCopy.editStatus=false;
            stateCopy.editData = "";
            try{localStorage.setItem("db", JSON.stringify(stateCopy))}catch(e){console.log(e)}
            return stateCopy
        case "delete":
            let ListId = stateCopy.list.map(function(e) { return e.listId; }).indexOf(action.payload.listId)
            let CardId = stateCopy.list[ListId].card.map(function(e) { return e.cardId; }).indexOf(action.payload.cardId)
            console.log("Delte",ListId,CardId);
            stateCopy.list[ListId].card.splice(CardId,1);
            console.log(stateCopy.list[ListId])
            try{localStorage.setItem("db", JSON.stringify(stateCopy))}catch(e){console.log(e)}
            return stateCopy;

    }
    
    try{if (localStorage.getItem("db") === null) {
        //...
        return state;
      }
      else{
        var retrievedObject = localStorage.getItem('db')
        return JSON.parse(retrievedObject)
      }}catch(err){
        return state
      }

      
  
}


const store = createStore(appReducerFunction)
export default store;