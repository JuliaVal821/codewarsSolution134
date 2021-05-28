https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

    function movie(card, ticket, perc) {
        let sum = card;
        let sum1 = 0;
        let count = 0;
        while(Math.ceil(sum) >= sum1){
            count++;
            sum += ticket * perc ** count;
            sum1 = ticket * count;
        }
        return count;
    }