// NOTE - You must have a level with the name "start".  This is used as the first level in the game.
var key = 0;
var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {
// music: "98_Lost_Mine.mp3",
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
        start3: {
            message: "You wake up in a cave, the tunnel ahead splits. You get a strong sense of Deja Vu. . .",
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
        cliff: {
            message: "In the dark you wander off a cliff and die",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        cliff2: {
            message: "What did you think would happen?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
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
                    nextLevel: "path",
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
            message: "You enter a long narrow tunnel.",
            choices: [
                {
                    text: "Squeze Through",
                    nextLevel: "preCavern",
                },
                {
                    text: "Give Up",
                    nextLevel: "start3",
                },
                
            ]
        },
        restart: {
            message: "You find the way back to where you started",
            choices: [
                {
                    text: "Go right",
                    nextLevel: "cliff",
                },
                {
                    text: "Go left",
                    nextLevel: "split",
                },
            ]
        },
        path: {
            message: "The cave continues ahead, but you hear sounds coming from an adjacent cave.",
            choices: [
                {
                    text: "Continue ahead",
                    nextLevel: "doorKey",
                },
                {
                    text: "Investigate the sound",
                    nextLevel: "cavern",
                },
            ]
        },
        cavern: {
            message: "You enter a cavern, in the center there is a dragon!",
            choices: [
                {
                    text: "Fight",
                    nextLevel: "fight2",
                },
                {
                    text: "Escape",
                    nextLevel: "death1",
                },
            ]
        },
        preCavern: {
            message: "You see something ahead moving and the tunnel is widening",
            choices: [
                {
                    text: "Continue ahead",
                    nextLevel: "cavern",
                },
                {
                    text: "Go back",
                    nextLevel: "stuck",
                },
            ]
        },
        stuck: {
            message: "You start heading back but quikly get stuck. Unable to move, you die",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        death1: {
            message: "Fun Fact #17: Dragons are faster than people",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        fight2: {
            message: "As you charge toward it the dragon notices you.",
            choices: [
                {
                    text: "Duck",
                    nextLevel: "fight3",
                },
                {
                    text: "Continue Charging",
                    nextLevel: "death2",
                },
            ]
        },
        death2: {
            message: "The dragon quickly ends your advance with a jet of flames",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start3",
                },
            ]
        },
    }
};
