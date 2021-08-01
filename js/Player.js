class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;

        this.rank = 0;

        
    }

    

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    getplayerAtEnd() {
        var playerAtEnd = database.ref('playerAtEnd');
        playerAtEnd.on("value",(data) => {
            this.rank = data.val();
        })
    }

    static updatePlayeratEnd(rank) {
        database.ref('/').update({
            playerAtEnd:rank 
        })
    }

    
}
