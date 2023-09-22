// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let hq=42;
    if(location > hq){
        return location-hq;
    }else{
        return hq - location;
    }
}

function distanceFromHqInFeet(location){
    let distance=distanceFromHqInBlocks(location);
    let feetDistance=distance*264
    return feetDistance
}

function distanceTravelledInFeet(start,destination){
    if(destination > start){
        let blocksCovered=destination-start;
        let feetCovered=blocksCovered*264;
        return feetCovered
    }else{
        let blocksCovered=start-destination;
        let feetCovered=blocksCovered*264;
        return feetCovered
    }
    
}

function calculatesFarePrice(start,stop){
    let feetCovered = 0;
    if(stop > start){
        let blocksCovered=stop-start;
        feetCovered=blocksCovered*264;
    }else{
        let blocksCovered=start-stop;
        feetCovered=blocksCovered*264
    }

    if(feetCovered <= 400){
        return 0
    }else if(feetCovered > 400 && feetCovered < 2000){
        let extrafeet=feetCovered-400;
        let fare = extrafeet * 0.02;
        return fare;
    }else if(feetCovered>2500)
    {
        return 'cannot travel that far';
    }else if(feetCovered>2000 && feetCovered<2500){
        return 25;
    }

}


