
 var eventType=prompt("Enter the event type");
 var tempFahr=prompt("Enter the temperature in Fahrenheit");
 var result;
 var clothingSuggestion1, clothingSuggestion2;
 switch(eventType){
     case 'casual':
        clothingSuggestion1='something comfy';
     break;
    case 'semi-formal':
        clothingSuggestion1='a polo';
    break;
    case 'formal':
        clothingSuggestion1='a suit';
    break;
    
 }
 switch(true){
        case (tempFahr < 54):
            clothingSuggestion2='a coat';

            break;
            case (70>tempFahr && tempFahr>54):
            clothingSuggestion2='a jacket';

            break;
            case (tempFahr>70):
            clothingSuggestion2='no jacket';
            break;
     
 }
result="Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear "+clothingSuggestion1+" and " +clothingSuggestion2+"";
alert(result);


