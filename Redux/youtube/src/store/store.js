import { createStore } from "redux";


let initialState = {
    channelId:"",
    
    searchList:[],


    recommended:[],
    music:[],
    gaming:[],
    cartoon:[],

    trending:[],


    history:[],
    watchLater:[],
    likedVideos:[],


    subscription:[],


    

}

function appReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log("Global Store",action,stateCopy);
    switch(action.type){
        case "fetchedVideoList":
            stateCopy.searchList = action.payload;
            //console.log("FetchedListData");
            return stateCopy;
        case "trendingVideoList":
            stateCopy.trending = action.payload;
            //console.log("FetchedListData");
            return stateCopy;
        case "saveHistory":
            //console.log("saveHis",action);
            var present = stateCopy.history.find((x)=>{
                return x.id.videoId==action.payload.id.videoId
            })
            var newStateCopy = stateCopy;
            stateCopy.channelId=action.payload.snippet.channelId;
            if(!present){
                 stateCopy.history.push(action.payload);
                 
            }
            return stateCopy;
        case "watchLater":
            
           // console.log("saveHis",action.payload);
            var present = stateCopy.watchLater.find((x)=>{
                return x.id.videoId==action.payload.id.videoId
            })
            var newStateCopy = stateCopy;
            if(!present){
                 stateCopy.watchLater.push(action.payload);
                 return stateCopy;
            }

        
            
               
                
    }
    return state;
}

export default createStore(appReducerFunction);