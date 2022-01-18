function distanceFromHqInBlocks(pickUpBlock){
    return Math.abs(42 - pickUpBlock)
}
function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock)* 264
}

function distanceTravelledInFeet(start, distance){
    return Math.abs((start-distance)*264)
}

function calculatesFarePrice(start, distance){ 
    const destination = distanceTravelledInFeet(start,distance)
    if (destination < 400){
        return 0;
    }
    else if (destination > 400 && destination < 2000) {
        return (destination - 400) * .02
    }
    else if (destination > 2000  && destination < 2500) {
        return 25
    }
    else if (destination > 2500) {
        return 'cannot travel that far'
    }
}