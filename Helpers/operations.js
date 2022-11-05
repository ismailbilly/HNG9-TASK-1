function mathOperations(ops,num1,num2){
    let result;
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        switch(ops){
            case('addition'):
            result= num1 + num2
                break;
            case('subtraction'):
            result= num1 - num2
                break;
            case('multiplication'):
            result= num1 * num2
                break;
            default:
                'Invalid operation'    
        }
        return result
    }else{
        return "x and y must be integers"
    }
   
   
}
module.exports = {mathOperations}