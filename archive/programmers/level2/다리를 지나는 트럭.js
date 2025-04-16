function solution(bridge_length, weight, truck_weights) {
    // Time
    var answer = 0;
    // Weight of bridge 
    let nowWeightOfBridge = 0;
    // Queue(bridge length)
    const queue = [];
    for (let i = 0; i < bridge_length; i++) {
        queue.push(0)
    }
    // Trucks passing the bridge now
    let nowTruck = truck_weights.shift();
    // Truck in queue
    queue.unshift(nowTruck);
    queue.pop();
    // Increase the weight of bridge
    nowWeightOfBridge = nowWeightOfBridge + nowTruck;
    // Time increase
    answer++;  
    
    // Until all the trucks pass by.
    while(nowWeightOfBridge){ 
        // Pull the truck out of the bridge
        nowWeightOfBridge = nowWeightOfBridge - queue.pop();
        
        // Next truck
        nowTruck = truck_weights.shift();
        
        // Truck in queue
        if(nowTruck + nowWeightOfBridge <= weight){
            queue.unshift(nowTruck);
            nowWeightOfBridge = nowWeightOfBridge + nowTruck;
        }
        else{
            queue.unshift(0);
            truck_weights.unshift(nowTruck);
        }
        answer++;
    }
    return answer;
}
