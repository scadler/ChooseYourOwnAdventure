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
            message: "The path continues to the left, there is a hole in the wall to your right and cliff infront of you",
            choices: [
                {
                    text: "GO left",
                    nextLevel: "doors",
                },
                {
                    text: "GO straight",
                    nextLevel: "cliff2",
                },
                {
                    text: "GO right",
                    nextLevel: "cliff2",
                },
            ]
        },
        doors: {
            message: "The cave grows into a cavern. Two massive doors appear on your left and right. Which door do you enter?",
            choices: [
                {
                    text: "Left door",
                    nextLevel: "leftDoor",
                },
                {
                    text: "Right door",
                    nextLevel: "rightDoor",
                },
            ]
        },
         rightDoor: {
            message: "The cave splits again",
            choices: [
                {
                    text: "Go left",
                    nextLevel: "deadEnd",
                },
                {
                    text: "Go right",
                    nextLevel: "key",
                },
            ]
        },
        leftDoor: {
            message: "A hole in the ground blocks your path, do your try to jump over it?",
            choices: [
                {
                    text: "Jump",
                    nextLevel: "start2",
                },
                {
                    text: "Turn back",
                    nextLevel: "doors",
                },
            ]
        },
        Jump: {
            message: "After falling throught the hole you hit the cave floor below. The fall knocks you out.",
            choices: [
                {
                    text: "Wake up",
                    nextLevel: "start",
                },
            ]
        },
        deadEnd: {
            message: "It is a dead end.",
            choices: [
                {
                    text: "Turn around",
                    nextLevel: "rightDoor",
                },
            ]
        },
        key: {
            message: "You find a key on the ground.",
            choices: [
                {
                    text: "Pick it up",
                    nextLevel: "restart",
                },
            ]
        },
        restart: {
            message: "You find the way back to where you started",
            choices: [
                {
                    text: "Pick it up",
                    nextLevel: "restart",
                },
            ]
        },

    }
};
