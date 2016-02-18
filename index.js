// index.js
'use strict';

// solve some problem here!
var solver = function() {
	return () => "solved!";
}

var frequent = function(arr) {
    var winners = [], freq = {}, highest = 0;
    for (var i in arr) {
        var val = arr[i];
        // console.log('val', val);
        // simple frequency counter
        if (!freq[val]) freq[val] = 0;
        freq[val]++;
        // if a new high point
        if (freq[val] >= highest) {
            // we have a new potential winner
            highest = freq[val];
            winners.push({val: val, freq: freq[val]});
            // if multiple winners, any previous winner that is less than highest should be eliminated
            if (winners.length > 1) {
                // reduce to a new array
                winners = winners.reduce(function(previous, item, i, whole){
                    // console.log('reducing:', item, item.freq, previous, highest);
                    if (item.freq === highest) {
                        previous.push(item);
                        return previous;
                    }
                    return previous;
                }, []);
                // console.log('reduced:', winners);
            }  
        } 
    }
    
    winners = winners.map(function(item){ return item.val });
    console.log('done', freq, highest, winners);
    return winners;

}

module.exports = {
	solver: solver,
    frequent: frequent
}