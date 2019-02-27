// NOTE - You must have a level with the name "start".  This is used as the first level in the game.
var key = 0;
var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {
// music: "98_Lost_Mine.mp3",
        start: {
            message: "You wake up in a cave, the tunnel ahead splits.",
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
            message: "In the dark you wander off a cliff and fall to your death.",
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
            message: "The path continues to the left, there is a hole in the wall to your right and cliff infront of you.",
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
            message: "The cave splits again.",
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
                    nextLevel: "jump",
                },
                {
                    text: "Turn back",
                    nextLevel: "doors",
                },
            ]
        },
        jump: {
            message: "After falling throught the hole you hit the cave floor below. The fall knocks you out.",
            choices: [
                {
                    text: "Wake up",
                    nextLevel: "start3",
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
            message: "You find the way back to where you started.",
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
            message: "You enter a cavern, in the center you see a dragon!",
            choices: [
                {
                    text: "Escape",
                    nextLevel: "death1",
                },
                {
                    text: "Fight",
                    nextLevel: "fight2",
                },
                
            ]
        },
        preCavern: {
            message: "The tunnel is growing wider. Looking ahead you see something moving.",
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
            message: "You start heading back but quickly get stuck. Unable to move, you die",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        death1: {
            message: "Fun Fact #17: Dragons, which are capable of moving at speeds of greater than 200mph, are faster than people",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        fight2: {
            message: "As you charge forward the dragon notices you.",
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
        fight3: {
            message: "Just as you duck the dragon spews fire where your head just was.",
            choices: [
                 {
                    text: "Punch Dragon",
                    nextLevel: "death3",
                },
                {
                    text: "Continue to evade",
                    nextLevel: "fight4",
                },
            ]
        },
        death3: {
            message: "The dragon crushes you. What was your plan?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        fight4: {
            message: "After dodging the dragon for hours, it collapses, behind it you see a sliver of sunlight.",
            choices: [
                {
                    text: "Approach Light",
                    nextLevel: "exit1",
                },
            ]
        },
        death3: {
            message: "The dragon crushes you. What was your plan?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
        exit1: {
            message: "You leave the cave.",
            choices: [
                {
                    text: "Celebrate",
                    nextLevel: "exit2",
                },
            ]
        },
        exit2: {
            message: "As you celebrate you are unaware of you surroundings, you accidentally fall into a hole. . .",
            choices: [
                {
                    text: "Oh no",
                    nextLevel: "exit3",
                },
            ]
        },
        exit3: {
            message: ". . . the fall knocks you unconscious.",
            choices: [
                {
                    text: "Wake up",
                    nextLevel: "start3",
                },
            ]
        },
        doorKey: {
            message: "The cave collapses, crushing you.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start3",
                },
            ]
        },
    }
};
 //LLRRLLRLR or LR