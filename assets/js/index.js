let userName = localStorage.getItem("name");
const text = document.getElementById("text");
const board = document.getElementById("gameBoard");
const takenKeys = document.getElementById("takenKeys");
const hintText = document.querySelector(".hintText");
const username = document.getElementById("username")
let userNick = localStorage.getItem("nameLucifer");
function nameSetting() {

    username.innerHTML = userNick.toLocaleUpperCase()
}

nameSetting()

let keyCount = 0;
let questionCount = 0;

let question;
let door;
let key;
let cross;

let crosses = false
let crossCount = 0

function winCheck() {
    win = true
    music.pause();
    document.body.innerHTML = `<div id="game-win"><p>YOU FOUND THE LIGHT!</p><h2>LET LUCIFER GUID YOU IN YOUR LIFE!</h2> 
   
    <a class="restart" href="index.htm"> RESTART </a>
    </div>`;
    document.body.style.height = "100vh"
    document.documentElement.style.cursor = 'default';
    document.documentElement.style.setProperty('--cursorX', '50vw');
    document.documentElement.style.setProperty('--cursorY', '50vh');
    document.documentElement.style.setProperty('--customBackgroundColor1', 'transparent');
    document.documentElement.style.setProperty('--customBackgroundColor2', 'transparent');
    document.documentElement.style.setProperty('--customBackgroundColor3', 'transparent');
}
let colors = [
    "red", "green", "blue"
]
let i = 0
function color() {
    hintText.classList = "red"
    setInterval(() => {
        hintText.className = "";
        hintText.classList.add(colors[i]);

        i = i + 1;
        if (i === colors.length) {
            i = 0;
        }
    }, 3000);
}
color()

function createCross() {
    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND THE CROSSES!`
    cross = document.createElement("i");
    cross.classList = "cross fa-solid fa-cross";
    cross.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const randomTop = Math.floor(Math.random() * (boardHeight - 60));
    const randomLeft = Math.floor(Math.random() * (boardWidth - 60));

    cross.style.top = randomTop + "px";
    cross.style.left = randomLeft + "px";

    board.appendChild(cross);
    crossCount += 1
    clickKey(cross);

}

let lastQuestion = [
    {
        hint: `"Then Enoch walked with God three hundred years after he became the father of Methuselah, and he had other sons and daughters. So all the days of Enoch were three hundred and sixty-five years. Enoch walked with God; and he was not, for God took him.read more.
Methuselah lived one hundred and eighty-seven years, and became the father of Lamech. Then Methuselah lived seven hundred and eighty-two years after he became the father of Lamech, and he had other sons and daughters. So all the days of Methuselah were nine hundred and sixty-nine years, and he died. Lamech lived one hundred and eighty-two years, and became the father of a son. Now he called his name Noah, saying, “This one will give us rest from our work and from the toil of our hands arising from the ground which the Lord has cursed." - Genesis 5:22-29`, correct: "a"
    },
    { hint: "He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him. And he is before all things, and in him all things hold together. And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent. For in him all the fullness of God was pleased to dwell, and through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross. - Colossians 1:15–20", correct: "b" },
    { hint: " And I have said, I will bring you up out of the affliction of Egypt unto the land of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites, unto a land flowing with milk and honey. - Exodus 3:17 ", correct: "c" }
];

let selectedQuestion = lastQuestion[Math.floor(Math.random() * lastQuestion.length)];
let correctAnswer = selectedQuestion.correct;


function checkItems(items) {
    const itemElements = items.querySelectorAll("i");

    itemElements.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (index + 1 === correctAnswer.charCodeAt(0) - 96) {
                winCheck()
            } else {
                document.body.innerHTML = `<div id="game-over"><p>YOU LITTLE DUMB!</p><h2>GAME OVER!</h2> 
                <audio class="music" src="https://rr2---sn-p5qlsn7d.googlevideo.com/videoplayback?expire=1707051965&ei=XDe_ZdH8OKColu8PsYWE2AI&ip=181.41.206.48&id=o-AKI6iOd-hpBEJ6ECgsU1_PPbdHgNp3C-g7xm5K1Drgvr&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=177014&dur=10.890&lmt=1626455175542291&keepalive=yes&fexp=24007246&c=ANDROID&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJYLP2kABY8l0cHj0YUNOvhl5PXgb0aqtqS8rHBgskrOAiAbHYNqeWIDGg1Fjztb760VXYBF-V9FLLJOSJj-uKM8DQ%3D%3D&redirect_counter=1&rm=sn-q4felk7e&req_id=5525a1cfee64a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=GN&mip=38.44.29.219&mm=31&mn=sn-p5qlsn7d&ms=au&mt=1707029340&mv=u&mvi=2&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgZL3Prx843H01oojDFlFRb6bTsfXYSSSml7r_6BrQIiECIDXoajEO0OzQL0JnM1MFABskWcLzTov9uy3AMG_Go9yV" autoplay ></audio>
                <a class="restart" href="index.htm"> RESTART </a>
                </div>`;
                document.body.style.height = "100vh"
            }
        });
    });
}



function createItems() {

    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND THE CORRECT SYMBOL USING THE MESSAGE! CLICK ON THE MESSAGE TO SEE THE HINT!`
    const items = document.createElement("div");
    items.classList = "items"
    items.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const itemsHeight = items.offsetHeight;
    const itemsWidth = items.offsetWidth;

    const randomTop = Math.floor(Math.random() * (boardHeight - itemsHeight));
    const randomLeft = Math.floor(Math.random() * (boardWidth - itemsWidth));


    items.style.top = randomTop + "px";
    items.style.left = randomLeft + "px";

    const ship = document.createElement("i")
    ship.classList = "item fa-solid fa-ship"

    const fish = document.createElement("i")
    fish.classList = "item fa-solid fa-fish"

    const sea = document.createElement("i")
    sea.classList = "item fa-solid fa-water"

    items.appendChild(ship)
    items.appendChild(fish)
    items.appendChild(sea)
    board.appendChild(items);

    checkItems(items)

} function createMessage() {

    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND THE MESSAGE!`
    const message = document.createElement("i");
    message.classList = "message fa-solid fa-envelope";
    message.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const randomTop = Math.floor(Math.random() * (boardHeight - 60));
    const randomLeft = Math.floor(Math.random() * (boardWidth - 60));

    message.style.top = randomTop + "px";
    message.style.left = randomLeft + "px";

    board.appendChild(message);

    message.addEventListener("click", () => {
        const takenMessage = document.createElement("i");
        takenMessage.classList = "message fa-solid fa-envelope";
        takenMessage.style.position = "absolute";

        const hint = selectedQuestion.hint;


        board.removeChild(message);
        takenKeys.appendChild(takenMessage);
        takenMessage.classList.add("takenMessage");

        createItems();

        takenMessage.addEventListener("click", () => {

            const messageTextDiv = document.createElement("div");
            messageTextDiv.classList.add("messageTextDiv");
            const messageText = document.createElement("h2");



            messageText.innerHTML = hint;

            const messageClose = document.createElement("button");
            messageClose.innerHTML = "X";

            messageTextDiv.appendChild(messageClose);
            messageTextDiv.appendChild(messageText);
            board.appendChild(messageTextDiv);

            messageClose.addEventListener("click", () => {
                board.removeChild(messageTextDiv);
            });
        });
    });
}





function createKey() {

    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND THE KEYS!`
    key = document.createElement("i");
    key.classList = "key fa-solid fa-key";
    key.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const randomTop = Math.floor(Math.random() * (boardHeight - 60));
    const randomLeft = Math.floor(Math.random() * (boardWidth - 60));

    key.style.top = randomTop + "px";
    key.style.left = randomLeft + "px";

    board.appendChild(key);

    clickKey(key);
}

createKey();


function createfire() {

    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND THE FIRE AND BURN THE CROSSES!`
    fire = document.createElement("i");
    fire.classList = "fire fa-solid fa-fire";
    fire.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const randomTop = Math.floor(Math.random() * (boardHeight - 90));
    const randomLeft = Math.floor(Math.random() * (boardWidth - 90));

    fire.style.top = randomTop + "px";
    fire.style.left = randomLeft + "px";

    board.appendChild(fire);

    fire.addEventListener("click", () => {

        hintText.innerHTML = ` ${userNick.toLocaleUpperCase()}, PUT THE CROSS WHERE IT BELONGS! DRAG AND DROP THE CROSS!`
        const crossPlace = document.createElement("div")
        crossPlace.classList.add("crossPlace")
        const randomTop = Math.floor(Math.random() * (boardHeight - 300));
        crossPlace.style.top = randomTop + "px"
        const crossPlaceCross = document.createElement("i")
        crossPlaceCross.classList = "crossPlaceCross fa-solid fa-cross"

        crossPlace.appendChild(crossPlaceCross)
        takenKeys.innerHTML = ""

        const mainCross = document.createElement("i")
        mainCross.classList = "mainCross fa-solid fa-cross"




        const randomLeftCross = Math.floor(Math.random() * (boardWidth - 90));

        mainCross.style.top = randomTop - 20 + "px"
        mainCross.style.left = randomLeftCross + "px"


        board.removeChild(fire)
        board.appendChild(mainCross)
        board.appendChild(crossPlace)
        let offsetX, offsetY;

        const checkOverCross = () => {
            const rect1 = mainCross.getBoundingClientRect();
            const rect2 = crossPlaceCross.getBoundingClientRect();

            if (
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top &&
                rect1.left < rect2.right &&
                rect1.right > rect2.left
            ) {
                mainCross.remove()
                crossPlaceCross.classList.add("doneCross")
                setTimeout(() => {
                    crossPlace.remove()
                    crossPlaceCross.remove()
                    createMessage()
                }, 1500);
            }
        };
        const move = (e) => {
            mainCross.style.left = `${e.clientX - offsetX}px`
            mainCross.style.top = `${e.clientY - offsetY}px`
        }

        mainCross.addEventListener("mousedown", (e) => {
            offsetX = e.clientX - mainCross.offsetLeft
            offsetY = e.clientY - mainCross.offsetTop
            document.addEventListener("mousemove", move)
        })

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", move)
            checkOverCross();


        })

    })
}






function clickKey(symb) {
    symb.addEventListener("click", () => {
        board.removeChild(symb);
        takenKeys.appendChild(symb);
        keyCount = keyCount + 1;
        if (keyCount === 3) {

            createDoor();
        } else {
            if (!crosses) {

                createKey();

            } else if (crosses) {

                if (crossCount < 3) {

                    createCross()
                } else if (crossCount === 3) {
                    createfire()

                }
            }
        }
    });
}

let questions = [
    {
        question: "What is the meaning of 'Lucifer'?",
        answers: [
            { option: "a", text: "a) Heavenly being" },
            { option: "b", text: "b) Dark angel" },
            { option: "c", text: "c) Bearer of light" },
            { option: "d", text: "d) Fire starter" },
            { correct: "c" }
        ]
    },
    {
        question: "What is the other name of the 'Jewish Star'?",
        answers: [
            { option: "a", text: "a) Pentagram" },
            { option: "b", text: "b) Star of David" },
            { option: "c", text: "c) Seal of Moses" },
            { option: "d", text: "d) Divine Sigil" },
            { correct: "b" }
        ]
    },    
    {
        question: "What is the primary symbolism associated with a 'Phoenix' in mythology?",
        answers: [
            { option: "a", text: "a) Symbol of darkness" },
            { option: "b", text: "b) Harbinger of chaos" },
            { option: "c", text: "c) Rebirth and renewal" },
            { option: "d", text: "d) Messenger of the underworld" },
            { correct: "c" }
        ]
    }
    
];


function createQuestion() {
    const currentQuestion = questions[questionCount];

    question = document.createElement("div");
    question.classList.add("question");

    question.innerHTML = `
        <h1>${currentQuestion.question}</h1>
        ${currentQuestion.answers ? currentQuestion.answers.map(answer =>
        answer.text ? `
                <div class="answers">
                    ${answer.text}
                    <input type="radio" name="answer" value="${answer.option}"> <br>
                </div>
            ` : ''
    ).join('') : ''}
        <button onclick="checkAnswer()">Submit</button>
    `;

    board.appendChild(question);
}




function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const selectedOption = selectedAnswer.value;
        const correctOption = questions[questionCount].answers.find(answer => answer.correct === selectedOption);


        if (correctOption) {
            takenKeys.removeChild(takenKeys.children[0]);
            board.removeChild(question)
            board.removeChild(door);
            if (questionCount < 2) {
                createDoor()
                questionCount = questionCount + 1;
            } else {
                crosses = true
                createCross()
            }
        } else {
            document.body.innerHTML = `<div id="game-over"><p>YOU LITTLE DUMB!</p><h2>GAME OVER!</h2> 
            <audio class="music" src="https://rr2---sn-p5qlsn7d.googlevideo.com/videoplayback?expire=1707051965&ei=XDe_ZdH8OKColu8PsYWE2AI&ip=181.41.206.48&id=o-AKI6iOd-hpBEJ6ECgsU1_PPbdHgNp3C-g7xm5K1Drgvr&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=audio%2Fmp4&gir=yes&clen=177014&dur=10.890&lmt=1626455175542291&keepalive=yes&fexp=24007246&c=ANDROID&txp=5311222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJYLP2kABY8l0cHj0YUNOvhl5PXgb0aqtqS8rHBgskrOAiAbHYNqeWIDGg1Fjztb760VXYBF-V9FLLJOSJj-uKM8DQ%3D%3D&redirect_counter=1&rm=sn-q4felk7e&req_id=5525a1cfee64a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=GN&mip=38.44.29.219&mm=31&mn=sn-p5qlsn7d&ms=au&mt=1707029340&mv=u&mvi=2&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgZL3Prx843H01oojDFlFRb6bTsfXYSSSml7r_6BrQIiECIDXoajEO0OzQL0JnM1MFABskWcLzTov9uy3AMG_Go9yV" autoplay ></audio>
            <a class="restart" href="index.htm"> RESTART </a>
            </div>`;
            document.body.style.height = "100vh"
        }
        isOver = true


    } else {
        alert("Select an answer, dumb!");
    }
}


function createDoor() {

    hintText.innerHTML = `${userNick.toLocaleUpperCase()}, FIND AND OPEN THE QUESTION DOORS!`
    let clicked = false;
    door = document.createElement("i");
    door.classList = "door fa-solid fa-door-closed";
    door.style.position = "absolute";

    const boardWidth = board.clientWidth;
    const boardHeight = board.clientHeight;

    const randomTop = Math.floor(Math.random() * (boardHeight - 60));
    const randomLeft = Math.floor(Math.random() * (boardWidth - 60));

    door.style.top = randomTop + "px";
    door.style.left = randomLeft + "px";

    board.appendChild(door);

    door.addEventListener("click", () => {
        clicked = true;
        door.classList.add("opendoor");
        if (clicked) {
            door.addEventListener("click", () => {
                clicked = false;

                createQuestion();
                console.log("done");
            })
        }
    });
}
