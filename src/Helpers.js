    
    
    
    export const filterSubmissions = (submissionType, songObj) => {
        if(submissionType.length > 0 && submissionType[0].song){
            return submissionType.filter(element => element.song.id === songObj.id)
        }
        else if (submissionType.length > 0 && submissionType[0].beat){
            return submissionType.filter(element => element.beat.song.id === songObj.id)
        }
        else{
            return []
        }
    }

    export const createLeaderBoard = (filteredSubmissions) => {
        // if(submissions.length > 0){
            const wins = filteredSubmissions.map(element => element.results.length)
            const submissionsWithWins = []
            filteredSubmissions.forEach(function(v,i){
                const obj = {};
                obj.submission = v;
                obj.wins = wins[i];
                submissionsWithWins.push(obj);
            });
            const i = submissionsWithWins.sort(function (l, r) {
                return r.wins - l.wins;
            });
            return [i[0], i[1], i[2], i[3], i[4]]
        // }
    }

    export const selectPollChoices = (filteredSubmissions) => {
        const shuffled = filteredSubmissions.sort(() => 0.5 - Math.random());
        let choices = shuffled.slice(0, 2);
        return choices.map(choice => choice)
    }