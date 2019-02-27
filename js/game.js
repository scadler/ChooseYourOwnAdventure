// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up in a cave, the tunnel ahead splits",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "split",
                },

                {
                    text: "Go right",
                    nextLevel: "cliff",
                },

            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        cliff: {
            message: "In the dark you wander off a cliff and die",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        cliff2: {
            message: "What did you think would happen?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
         split: {
            message: "The path continues to the lft, there is a hole in the wall to your right and cliff infont of you",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "cliff2",
                },
            ]
        },

    }
};
