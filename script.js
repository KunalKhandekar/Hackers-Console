const code_Buffing = () => {
    let syntax = '';
    while (syntax.length < 1200) {
        syntax = syntax.concat(Math.floor(Math.random() * 2));
    }
    return syntax;
}

async function Execute() {
    let h_Box = Array.from(document.body.getElementsByClassName("textContent"))

    let input_text = document.getElementById("target").value;

    let msg = [
        "<span class='green'>Initializing Hack Tool...</span>",
        "Setting Up - Hacking Environment....",
        "Waiting for System Response....",
        "<span class='red'>Error Found !!</span>",
        "Updating Logs....",
        "Trying Again....",
        "<span class='white'>+_+ Got Access to the Tool +_+</span>",
        `Searching For - <span class='yellow'>${input_text}</span>`,
        "Loading.......",
        `<span class='yellow'>${input_text}</span> Not Found !!`,
        `Trying Different Methods....`,
        "<span class='white'>===+++ Got Victim's IP Address +++===</span>",
        "Trying to Fetch Data....",
        "UserName Found - <span class='yellow'>@_Kunal_Khandekar</span>",
        "Executing BruteForce Lists....",
        "Trying 200K Passwords....",
        "<span class='red'>-_- No Match Found -_-</span>",
        "Trying Another 200K Passwords...",
        "<span class='red'>-_- No Match Found -_-</span>",
        "Trying Another 200K Passwords...",
        "<span class='green'>+_+ Match Found +_+</span>",
        "Password - <span class='yellow'>SW***210</span>",
        "Storing Data In <span class='white'>Log.txt</span> File.....",
        "Resetting Password...",
        "<span class='green'>Password Reset (#+#)</span>",
        "Finding <span class='white'>Phone No.</span> ....",
        "...................",
        "Phone Number - <span class='yellow'>836*****39</span>",
        "Trying to Reset System....",
        ".................",
        "<span class='white'>*_* Victim's Security Code Has Been Reset *_*</span>",
        "---------------------------------------",
        "<span class='green'>/ Successfully Completed the Hack /</span>"
    ]


    let first_box = setInterval(() => {
        h_Box[0].textContent = code_Buffing()
    }, 200)
    let second_box = setInterval(() => {
        h_Box[1].innerHTML = code_Buffing()
    }, 200)

    const sleep = (seconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, seconds * 1000);
        })
    }

    const showHack = async (message) => {
        await sleep(2)
        console.log(message)
        text.innerHTML = text.innerHTML + message + '</br>';
    }

    (async () => {
        for (let i = 0; i < msg.length; i++) {
            await showHack(msg[i])
        }
    })()

    // For Auto Scrolling the proceesing Div 
    let autoscroll = setInterval(() => {
        text.scrollTop = text.scrollHeight;
    }, 300)


    let clearInter = await new Promise((resolve, reject)=>{
        setTimeout( () => {
            resolve(true)
            clearInterval(first_box)
            clearInterval(second_box)
            clearInterval(autoscroll)
            h_Box.forEach((x) => {
                x.innerHTML = "Hacker Man"
            })
        }, 66000)
    })

}
