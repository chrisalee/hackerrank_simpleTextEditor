function processData(input) {
    const trials = [''];
    const [operationType, ...operations] = input.split('\n');
    operations.forEach(operation => {
        const [type, data] = operation.split(' ');
        switch (type) {
            case '1': {
                trials.push(trials[trials.length - 1] + data);
                break;
            }
            
            case '2': {
                const currentString = trials[trials.length - 1];
                trials.push(currentString.substring(0, currentString.length - data));
                break;
            }
            
            case '3': 
                console.log(trials[trials.length - 1].charAt(data - 1));
                break;
                
            case '4':
                if(trials.length > 1) {
                    trials.splice(-1);
                }
                break;
            
            default:
                break;
        }
    });

} 
