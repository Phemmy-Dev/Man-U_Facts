let quoteText = document.getElementById("quoteText");
let soundBtn = document.getElementById("sound");
let tweetBtn = document.getElementById("tweet");
let copyBtn = document.getElementById("copy");

let quotes = [
    `Harry Maguire's first name isn't Harry: His full name is Jacob Harry Maguire but he goes by Harry.`,

    `Fans wanted Harry Maguire to be on the new £50 note:Following his World Cup heroics for England, a fan launched a petition to get a picture of him riding an inflatable unicorn on the new £50 note.`,

    `Manchester United Football Club was first formed in 1878 under the name Newton Heath LYR (Lancashire and Yorkshire Railway)`,

    `Ron Atkinson broke the transfer record to sign Bryan Robson from West Brom for £1.5million in 1981. He famously signed his contract on the pitch and became a hero.`,

    `Manchester United made history in 1999 by becoming only the second British team to achieve the feat of winning the treble (after Celtic in 1967). They are also the only English club to ever do so.`,

    `Wayne Rooney is the highest scoring Englishman in Champions League history, with 29, while former United midfielder Paul Scholes is the second highest with 24.`,
    `As of 2021, United have won just three UEFA Champions League trophies.`,

    `Manchester United has won 20 League titles which is a record.`,

    `Sir Alex Ferguson’s reign as United’s manager lasted a massive 27 years in total.`,

    `By winning the UEFA Europa League in 2017, Manchester United became one of only five teams to have won all three of the main European trophies.`,

    `Manchester United's last trophy was the Europa League in May 2017`,

    `Manchester United have won the FA Cup on 12 occasions - a feat bettered only by Arsenal's 14 triumphs.`,

    `Marcus Rashford is on the form of his life currently.`,

  `The Red Devils have been kings of Europe on three occasions, most recently during the 2007-08 campaign. They also nabbed the title during the 1998-99 season and in 1967-68`,

  `Edwin van der Sar set the record for oldest Manchester United player to appear in a match (post-World War II) when he played against Blackpool in a May 2011 Premier League match. The Dutchman was 40 years and seven months old.`,

  `David Gaskell was the youngest player to make a Manchester United first-team appearance. He was 16 years and 19 days old when he played against Manchester City in the Charity Shield in 1956.`,

  `Their first FA title came during the 1908-09 season. Their most recent FA trophy was won in 2003-04.`,

  `Ole Gunnar Solskjaer scored the fastest four goals in United's history when he subbed on and bagged four goals in a scant 12 minutes.`,

  `The Red Devils have won the FA Cup on 12 occasions.`,
];

function getQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomNumber];
}

soundBtn.addEventListener("click", ()=> {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
    speechSynthesis.speak(utterance)
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerHTML);
});

tweetBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl, "_blank")
    console.log(tweetUrl);
});
