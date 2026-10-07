export interface Question {
  q: string;
  opts: string[];
  answer: number;
  ref: string;
  cat: string;
  diff: string;
  explain: string;
}

export const QUESTIONS: Question[] = [
  {
    "q": "How many days did God take to create the world?",
    "opts": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1,
    "ref": "Genesis 1-2",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God created the world in 6 days and rested on the 7th day, sanctifying it."
  },
  {
    "q": "Who built the ark as God commanded?",
    "opts": [
      "Abraham",
      "Moses",
      "Noah",
      "Solomon"
    ],
    "answer": 2,
    "ref": "Genesis 6-7",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God instructed Noah to build the ark to survive the great flood that cleansed the earth."
  },
  {
    "q": "What was the name of the first man?",
    "opts": [
      "Noah",
      "Cain",
      "Adam",
      "Seth"
    ],
    "answer": 2,
    "ref": "Genesis 2",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Adam was the first man created by God from the dust of the ground."
  },
  {
    "q": "How many plagues did God send upon Egypt?",
    "opts": [
      "7",
      "8",
      "10",
      "12"
    ],
    "answer": 2,
    "ref": "Exodus 7-11",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "God sent ten devastating plagues upon Egypt to persuade Pharaoh to let the Israelites go."
  },
  {
    "q": "On which mountain did Moses receive the Ten Commandments?",
    "opts": [
      "Mount Sinai",
      "Mount Carmel",
      "Mount Zion",
      "Mount Ararat"
    ],
    "answer": 0,
    "ref": "Exodus 19-20",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God gave the tablets of the Covenant to Moses on Mount Sinai amidst fire and cloud."
  },
  {
    "q": "Which city's walls fell after Israelites marched around them seven times?",
    "opts": [
      "Jerusalem",
      "Jericho",
      "Bethlehem",
      "Samaria"
    ],
    "answer": 1,
    "ref": "Joshua 6",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "The high walls of Jericho collapsed after Joshua's army marched around them and blew trumpets."
  },
  {
    "q": "Who killed Goliath with a sling and a stone?",
    "opts": [
      "Jonathan",
      "Saul",
      "David",
      "Elijah"
    ],
    "answer": 2,
    "ref": "1 Samuel 17",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "David, a young Hebrew shepherd, slew the giant Philistine warrior Goliath with a single stone."
  },
  {
    "q": "Which prophet was swallowed by a great fish?",
    "opts": [
      "Elijah",
      "Ezekiel",
      "Jonah",
      "Amos"
    ],
    "answer": 2,
    "ref": "Jonah 1-2",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Jonah spent three days and nights in the belly of a great fish after trying to run from God's mission."
  },
  {
    "q": "Who led the Israelites into the Promised Land after Moses died?",
    "opts": [
      "Joshua",
      "Aaron",
      "Caleb",
      "Samuel"
    ],
    "answer": 0,
    "ref": "Joshua 1",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Joshua succeeded Moses as national leader and led the conquest of Canaan."
  },
  {
    "q": "What did God use to lead the Israelites through the wilderness by day?",
    "opts": [
      "A pillar of cloud",
      "A pillar of fire",
      "A golden eagle",
      "A host of angels"
    ],
    "answer": 0,
    "ref": "Exodus 13:21",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "By day the Lord went ahead of them in a pillar of cloud to guide them on their path."
  },
  {
    "q": "Which giant Philistine town did Samson carry the heavy city gates away from?",
    "opts": [
      "Ekron",
      "Gath",
      "Gaza",
      "Ashdod"
    ],
    "answer": 2,
    "ref": "Judges 16:3",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Samson rose at midnight, seized the doors of the city gate of Gaza, and carried them to a hilltop."
  },
  {
    "q": "In what form did God first appear to Moses in the wilderness?",
    "opts": [
      "A gentle whisper",
      "A burning bush",
      "An earthquake",
      "A majestic cloud"
    ],
    "answer": 1,
    "ref": "Exodus 3",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God spoke to Moses from a bush that burned with fire but was not consumed."
  },
  {
    "q": "Who was Abraham's wife and the mother of Isaac?",
    "opts": [
      "Sarah",
      "Hagar",
      "Rebecca",
      "Rachel"
    ],
    "answer": 0,
    "ref": "Genesis 17",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Sarah was Abraham's wife who gave birth to Isaac in her extreme old age."
  },
  {
    "q": "What food did God send from heaven daily to feed the running Israelites?",
    "opts": [
      "Quail",
      "Figs and honey",
      "Manna",
      "Barley cakes"
    ],
    "answer": 2,
    "ref": "Exodus 16",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God provided manna, a fine flake-like substance resembling sweet honey wafers."
  },
  {
    "q": "Which of Jacob's sons was sold into Egyptian slavery by his brothers?",
    "opts": [
      "Benjamin",
      "Reuben",
      "Judah",
      "Joseph"
    ],
    "answer": 3,
    "ref": "Genesis 37",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Joseph's jealous brothers sold him to Midianite merchantmen traveling down to Egypt."
  },
  {
    "q": "Who was David's close friend and the son of King Saul?",
    "opts": [
      "Absalom",
      "Jonathan",
      "Abner",
      "Mephibosheth"
    ],
    "answer": 1,
    "ref": "1 Samuel 18",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Jonathan loved David as himself, forming one of the most famous covenants of friendship."
  },
  {
    "q": "What was the name of the tower where God confused human language?",
    "opts": [
      "Tower of Babel",
      "Tower of Zion",
      "Tower of Babylon",
      "Tower of Nineveh"
    ],
    "answer": 0,
    "ref": "Genesis 11",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Because humanity grew proud and built a tower, God confused their tongue and scattered them."
  },
  {
    "q": "In the valley of dry bones vision, which prophet commanded life into the skeleton army?",
    "opts": [
      "Isaiah",
      "Ezekiel",
      "Jeremiah",
      "Daniel"
    ],
    "answer": 1,
    "ref": "Ezekiel 37",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Ezekiel prophesied to the dry bones, and they assembled together, covered with flesh, and stood up."
  },
  {
    "q": "Who was the first high priest ordained for the tabernacle service?",
    "opts": [
      "Moses",
      "Aaron",
      "Eleazar",
      "Melchizedek"
    ],
    "answer": 1,
    "ref": "Leviticus 8",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Aaron, the older brother of Moses, was anointed and consecrated as Israel's first high priest."
  },
  {
    "q": "Which king built the first magnificent Temple building in Jerusalem?",
    "opts": [
      "David",
      "Saul",
      "Solomon",
      "Hezekiah"
    ],
    "answer": 2,
    "ref": "1 Kings 6",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "King Solomon built the Temple, completing the grand architectural vision of his father David."
  },
  {
    "q": "Which prophet called down holy fire to consume a rain-soaked bull sacrifice on Mount Carmel?",
    "opts": [
      "Elisha",
      "Elijah",
      "Samuel",
      "Micah"
    ],
    "answer": 1,
    "ref": "1 Kings 18",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Elijah challenged the prophets of Baal, and God answered with dramatic fire consuming the water-soaked altar."
  },
  {
    "q": "What animal did Abraham find caught in a thicket to sacrifice instead of his son Isaac?",
    "opts": [
      "A ram",
      "A bull",
      "A lamb",
      "A dove"
    ],
    "answer": 0,
    "ref": "Genesis 22",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God provided a ram caught by its horns in a nearby bush as a substitute sacrifice for Isaac."
  },
  {
    "q": "In the wilderness, what did Moses strike with his staff to produce sweet drinking water?",
    "opts": [
      "A dry tree",
      "A rock",
      "The sandy ground",
      "The bronze altar"
    ],
    "answer": 1,
    "ref": "Exodus 17",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God told Moses to strike the rock at Horeb, and water flowed out in abundance for the people."
  },
  {
    "q": "Who was Moses' father-in-law, a priest of Midian, who advised him on delegating leadership?",
    "opts": [
      "Jethro",
      "Balaam",
      "Laban",
      "Melchizedek"
    ],
    "answer": 0,
    "ref": "Exodus 18",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Jethro advised Moses to set up capable men as judges, rather than wearing himself out listening to every dispute."
  },
  {
    "q": "What metal did Moses work to construct the snake of healing on a pole in the desert?",
    "opts": [
      "Gold",
      "Silver",
      "Bronze",
      "Iron"
    ],
    "answer": 2,
    "ref": "Numbers 21",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Moses made a bronze serpent and put it on a pole; anyone bitten who looked at the bronze serpent lived."
  },
  {
    "q": "Which Persian emperor decreed that the exiled Jews could return to Jerusalem and rebuild the Temple?",
    "opts": [
      "Cyrus the Great",
      "Darius I",
      "Xerxes",
      "Artaxerxes"
    ],
    "answer": 0,
    "ref": "Ezra 1:1-3",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "King Cyrus of Persia released the Jews from Babylonian captivity and sponsored their temple reconstruction."
  },
  {
    "q": "Who was Israel's last judge and anointed both King Saul and King David?",
    "opts": [
      "Gideon",
      "Eli",
      "Samson",
      "Samuel"
    ],
    "answer": 3,
    "ref": "1 Samuel 8-16",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Samuel served as faithful priest, prophet, and judge, managing the transition to the monarchy."
  },
  {
    "q": "Which Babylonian king went mad and ate grass like an ox after boasting of his grand works?",
    "opts": [
      "Belshazzar",
      "Nebuchadnezzar",
      "Darius",
      "Cyrus"
    ],
    "answer": 1,
    "ref": "Daniel 4",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Nebuchadnezzar was afflicted with temporary mental affliction, living like a beast until he recognized God's supremacy."
  },
  {
    "q": "What did Jacob steal from his brother Esau in exchange for some red lentil stew?",
    "opts": [
      "His birthright",
      "His favorite staff",
      "His flocks of sheep",
      "His fine garments"
    ],
    "answer": 0,
    "ref": "Genesis 25",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Esau returned exhausted from hunting and foolishly bartered his family birthright for Jacob's hot soup."
  },
  {
    "q": "Which Hebrew prophet did God instruct to marry a faithless woman named Gomer as a symbol of Israel's unfaithfulness?",
    "opts": [
      "Hosea",
      "Amos",
      "Joel",
      "Micah"
    ],
    "answer": 0,
    "ref": "Hosea 1",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Hosea's tragic marital struggles served as a living prophecy representing the Lord's persistent love for Israel."
  },
  {
    "q": "What is the shortest verse in the Bible?",
    "opts": [
      "God is love",
      "Jesus wept",
      "Pray without ceasing",
      "Fear not"
    ],
    "answer": 1,
    "ref": "John 11:35",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "\"Jesus wept\" (John 11:35) is the shortest verse, showing Christ's deep human compassion at Lazarus' grave."
  },
  {
    "q": "In which town was Jesus born according to Luke's gospel?",
    "opts": [
      "Nazareth",
      "Jerusalem",
      "Bethlehem",
      "Capernaum"
    ],
    "answer": 2,
    "ref": "Luke 2:1-7",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus was born in Bethlehem of Judea, fulfilling the ancient prophecy of Micah 5:2."
  },
  {
    "q": "How many apostles did Jesus choose?",
    "opts": [
      "10",
      "12",
      "14",
      "7"
    ],
    "answer": 1,
    "ref": "Luke 6:12-16",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus chose twelve apostles to sit with him, learn His core teachings, and spread the Gospel."
  },
  {
    "q": "Who baptized Jesus in the Jordan River?",
    "opts": [
      "Peter",
      "Philip",
      "John the Baptist",
      "Andrew"
    ],
    "answer": 2,
    "ref": "Matthew 3:13-17",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John the Baptist baptized Jesus, signaling the formal inauguration of Jesus' public ministry."
  },
  {
    "q": "What miracle did Jesus perform at the wedding in Cana?",
    "opts": [
      "Healed a blind man",
      "Walked on water",
      "Turned water into wine",
      "Fed 5,000 people"
    ],
    "answer": 2,
    "ref": "John 2:1-11",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "At His mother's behest, Jesus performed His first miracle by turning public water into fine wine."
  },
  {
    "q": "How many loaves of bread did Jesus use to feed the 5,000 with?",
    "opts": [
      "2",
      "3",
      "5",
      "7"
    ],
    "answer": 2,
    "ref": "John 6:1-14",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus blessed five barley loaves and two fish offered by a young boy, multiplying them to feed a vast crowd."
  },
  {
    "q": "Who betrayed Jesus for 30 pieces of silver?",
    "opts": [
      "Peter",
      "Thomas",
      "Judas Iscariot",
      "Bartholomew"
    ],
    "answer": 2,
    "ref": "Matthew 26:14-16",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Judas Iscariot went to the chief priests and delivered Jesus in exchange for thirty silver coins."
  },
  {
    "q": "On what day after His death did Jesus rise from the grave?",
    "opts": [
      "The first day",
      "The second day",
      "The third day",
      "The seventh day"
    ],
    "answer": 2,
    "ref": "Luke 24:1-6",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus rose on the third day, transforming standard history and establishing Christian Easter triumph."
  },
  {
    "q": "Which apostle wrote the most books in the New Testament?",
    "opts": [
      "Peter",
      "John",
      "Paul",
      "Luke"
    ],
    "answer": 2,
    "ref": "Romans to Philemon",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "The apostle Paul wrote 13 (or 14, if Hebrew authorship is counted) theological letters in the New Testament."
  },
  {
    "q": "Which disciple denied Jesus three times before the rooster crowed?",
    "opts": [
      "Peter",
      "Andrew",
      "Thomas",
      "John"
    ],
    "answer": 0,
    "ref": "Matthew 26:69-75",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Peter denied Jesus three times out of fear, weeping bitterly when the rooster warning was heard."
  },
  {
    "q": "Under which Roman governor was Jesus crucified?",
    "opts": [
      "Pontius Pilate",
      "Herod Antipas",
      "Felix",
      "Festus"
    ],
    "answer": 0,
    "ref": "Matthew 27",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Pontius Pilate sentenced Jesus to crucifixion after yielding to the local crowd's demands."
  },
  {
    "q": "To whom did Jesus say, 'You must be born again' to enter God's Kingdom?",
    "opts": [
      "Zacchaeus",
      "Nicodemus",
      "Pilate",
      "Stephen"
    ],
    "answer": 1,
    "ref": "John 3:3",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus explained the mystery of spiritual birth to Nicodemus, a prominent Pharisee and ruler."
  },
  {
    "q": "On what day was the Holy Spirit poured out on the disciples in Jerusalem?",
    "opts": [
      "Passover",
      "Pentecost",
      "Day of Atonement",
      "Feast of Booths"
    ],
    "answer": 1,
    "ref": "Acts 2",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "On Pentecost, the Holy Spirit descended as wind and fire, initiating the global Christian church."
  },
  {
    "q": "Which island was the apostle John exiled to when he wrote the Book of Revelation?",
    "opts": [
      "Cyprus",
      "Malta",
      "Crete",
      "Patmos"
    ],
    "answer": 3,
    "ref": "Revelation 1:9",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "John was exiled to the island of Patmos because of the word of God and the testimony of Jesus."
  },
  {
    "q": "Which New Testament writer was a physician and wrote a companion volume to his Gospel?",
    "opts": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "answer": 2,
    "ref": "Luke 1:1-4, Acts 1:1",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Luke, the 'beloved physician' and companion of Paul, penned both Luke's Gospel and the Acts of the Apostles."
  },
  {
    "q": "What city was Saul traveling to when he encountered a bright light and fell blind?",
    "opts": [
      "Rome",
      "Alexandria",
      "Jerusalem",
      "Damascus"
    ],
    "answer": 3,
    "ref": "Acts 9",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Saul was on the road to Damascus to arrest Christians, when a vision of the resurrected Christ converted him."
  },
  {
    "q": "What did the soldiers weave and place on Jesus' head before His crucifixion?",
    "opts": [
      "A crown of silver",
      "A crown of laurel",
      "A crown of thorns",
      "A band of linen"
    ],
    "answer": 2,
    "ref": "Mark 15:17",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Mocking Jesus' kingship, Roman soldiers wove a painful crown of thorns and forced it onto His head."
  },
  {
    "q": "In what city was the name 'Christians' first given to early disciples?",
    "opts": [
      "Jerusalem",
      "Antioch",
      "Ephesus",
      "Colossae"
    ],
    "answer": 1,
    "ref": "Acts 11:26",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "In Antioch, believers were first called 'Christians' by local observers of their Christ-centered lifestyle."
  },
  {
    "q": "Which letter of Paul is the longest and lays out a deep framework of justification by faith?",
    "opts": [
      "Galatians",
      "Ephesians",
      "Romans",
      "1 Corinthians"
    ],
    "answer": 2,
    "ref": "Romans",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Romans is Paul's masterwork epistle, containing his most thorough systematic explanation of faith."
  },
  {
    "q": "Who was raised from the dead by Jesus after lying in a cave tomb for four days?",
    "opts": [
      "Jairus' daughter",
      "The widow's son",
      "Lazarus",
      "Eutychus"
    ],
    "answer": 2,
    "ref": "John 11",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus showed His authority over death by calling Lazarus out of the tomb, even after decomposition had begun."
  },
  {
    "q": "Which New Testament book is primarily composed of moral advisories and practical faith, often compared to Old Testament wisdom?",
    "opts": [
      "James",
      "Hebrews",
      "Galatians",
      "Titus"
    ],
    "answer": 0,
    "ref": "James",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "James focuses closely on living faith, advising readers to control the tongue and aid the vulnerable."
  },
  {
    "q": "What tax collector climbed a wild sycamore tree in Jericho to catch a glimpse of Jesus?",
    "opts": [
      "Matthew",
      "Levi",
      "Zacchaeus",
      "Cornelius"
    ],
    "answer": 2,
    "ref": "Luke 19:1-10",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Zacchaeus, a wealthy tax collector of short stature, climbed a tree as Jesus was passing by, leading to dinner at his home."
  },
  {
    "q": "What was the name of the high priest's servant whose ear Peter cut off with a sword?",
    "opts": [
      "Malchus",
      "Cornelius",
      "Ananias",
      "Caiaphas"
    ],
    "answer": 0,
    "ref": "John 18:10",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "John's Gospel identifies Malchus as the servant, and notes that Jesus healed his severed ear instantly."
  },
  {
    "q": "Which apostle was bit by a venomous viper on the island of Malta but suffered no harm?",
    "opts": [
      "Peter",
      "John",
      "Barnabas",
      "Paul"
    ],
    "answer": 3,
    "ref": "Acts 28",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "After being shipwrecked on Malta, Paul was collecting firewood when a viper bit him, but he suffered no swelling or death."
  },
  {
    "q": "In what language was the phrase 'Eloi, Eloi, lema sabachthani' spoken by Jesus on the cross?",
    "opts": [
      "Hebrew",
      "Greek",
      "Latin",
      "Aramaic"
    ],
    "answer": 3,
    "ref": "Mark 15:34",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "This phrase translates to 'My God, my God, why have you forsaken me?' in Aramaic, citing Psalm 22."
  },
  {
    "q": "Who was chosen by cast lots to replace Judas Iscariot as the twelfth apostle?",
    "opts": [
      "Matthias",
      "Barnabas",
      "Joseph Barsabbas",
      "Silas"
    ],
    "answer": 0,
    "ref": "Acts 1:21-26",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Matthias was selected after prayers were offered to locate a witness to Jesus' resurrection to replace Judas."
  },
  {
    "q": "Which book of the New Testament contains the famous 'hall of faith' catalog of historic saints?",
    "opts": [
      "Romans",
      "Hebrews",
      "James",
      "1 Peter"
    ],
    "answer": 1,
    "ref": "Hebrews 11",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Hebrews 11 chronicles the triumphs of central figures like Noah, Abraham, Moses and Rahab who moved in faith."
  },
  {
    "q": "What did Jesus write on the ground when the Pharisees brought a woman caught in adultery?",
    "opts": [
      "Their names",
      "No specific text is recorded",
      "The Ten Commandments",
      "The law of divorce"
    ],
    "answer": 1,
    "ref": "John 8:6",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Scripture reports that Jesus bent down and wrote with His finger in the dirt, but the words are unrecorded."
  },
  {
    "q": "Who was the Roman centurion, the first Gentile convert, who received a vision from an angel?",
    "opts": [
      "Cornelius",
      "Longinus",
      "Julius",
      "Malchus"
    ],
    "answer": 0,
    "ref": "Acts 10",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Cornelius, a devout military man, was directed to summon Peter, starting the spread of the Gospel to the Gentiles."
  },
  {
    "q": "What was the name of the silversmith in Ephesus who started a riot because Paul's preaching hurt his business?",
    "opts": [
      "Demetrius",
      "Alexander",
      "Gaius",
      "Aristarchus"
    ],
    "answer": 0,
    "ref": "Acts 19:24",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Demetrius built silver shrines of Artemis and feared Paul's message would ruin their temple economy."
  },
  {
    "q": "What is the first book of the Bible?",
    "opts": [
      "Exodus",
      "Psalms",
      "Genesis",
      "Matthew"
    ],
    "answer": 2,
    "ref": "Genesis 1:1",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Genesis is the book of beginnings, detailing Creation, the Patriarchs, and the descent of Israel to Egypt."
  },
  {
    "q": "How many books are in the standard Protestant Bible?",
    "opts": [
      "60",
      "66",
      "72",
      "73"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "The Protestant biblical canon contains 66 books, divided into 39 in the Old and 27 in the New Testament."
  },
  {
    "q": "Which book of the Bible contains the Ten Commandments?",
    "opts": [
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Exodus"
    ],
    "answer": 3,
    "ref": "Exodus 20",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "The Commandments are listed fully in Exodus 20, and repeated later in Deuteronomy Chapter 5."
  },
  {
    "q": "In which book does the historic story of Job appear?",
    "opts": [
      "Psalms",
      "Proverbs",
      "Job",
      "Ecclesiastes"
    ],
    "answer": 2,
    "ref": "Job 1",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "The Book of Job is a poetic dialogue exploring suffering, devotion, and God's infinite wisdom."
  },
  {
    "q": "Who wrote the majority of the Old Testament Psalms?",
    "opts": [
      "Moses",
      "Solomon",
      "David",
      "Asaph"
    ],
    "answer": 2,
    "ref": "Psalms",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "While the Psalms contain various writers, King David is identified as the author of 73 specific psalms."
  },
  {
    "q": "What is the final book of the Protestant Bible?",
    "opts": [
      "Jude",
      "3 John",
      "Revelation",
      "Acts"
    ],
    "answer": 2,
    "ref": "Revelation",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Revelation, written by John on Patmos, closes out the New Testament canon."
  },
  {
    "q": "Which book contains the verse: 'For everything there is a season, and a time for every matter under heaven'?",
    "opts": [
      "Ecclesiastes",
      "Song of Solomon",
      "Proverbs",
      "Isaiah"
    ],
    "answer": 0,
    "ref": "Ecclesiastes 3:1",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Ecclesiastes, traditionally attributed to King Solomon, contains the famous reflection on time."
  },
  {
    "q": "Which book tells the history of early Christians and the journeys of Paul?",
    "opts": [
      "Romans",
      "The Acts of the Apostles",
      "Revelation",
      "Luke"
    ],
    "answer": 1,
    "ref": "Acts",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Acts of the Apostles records the birth of the early church and its early missionary expansion."
  },
  {
    "q": "What is the shortest book in the standard Protestant Bible by verse count?",
    "opts": [
      "Philemon",
      "Obadiah",
      "2 John",
      "3 John"
    ],
    "answer": 2,
    "ref": "2 John",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "2 John has only 13 verses, making it the shortest book by direct verse statistics in standard translations."
  },
  {
    "q": "Which book of the Old Testament is a love poem traditionally representing God and His people?",
    "opts": [
      "Ruth",
      "Esther",
      "Song of Solomon",
      "Lamentations"
    ],
    "answer": 2,
    "ref": "Song of Solomon",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Song of Solomon (or Song of Songs) is a unique collection of romantic love poems depicting courtship."
  },
  {
    "q": "In which book does Israel cross the Jordan River to possess Canaan?",
    "opts": [
      "Joshua",
      "Judges",
      "Deuteronomy",
      "Ezra"
    ],
    "answer": 0,
    "ref": "Joshua 3-4",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "The Book of Joshua details Israel's crossing of the Jordan River and their conquest campaigns."
  },
  {
    "q": "Which Book of law lists detailed rules for priestly garments and temple sacrifices?",
    "opts": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy"
    ],
    "answer": 1,
    "ref": "Leviticus",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Leviticus is primarily composed of laws, priestly rituals, holiness codes, and temple guidelines."
  },
  {
    "q": "Which prophetic book contains predictions about Christ as a 'suffering servant' who was wounded for our sins?",
    "opts": [
      "Isaiah",
      "Jeremiah",
      "Ezekiel",
      "Daniel"
    ],
    "answer": 0,
    "ref": "Isaiah 53",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Isaiah contains many prophecies of Christ, including the famous suffering servant text in Chapter 53."
  },
  {
    "q": "What book is named after the Hebrew queen who preserved her people from Haman's genocide plot?",
    "opts": [
      "Ruth",
      "Esther",
      "Judith",
      "Song of Solomon"
    ],
    "answer": 1,
    "ref": "Esther",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "The Book of Esther explains the origin of the Purim festival, recording how she saved Persian Jewry."
  },
  {
    "q": "Which book of prophecy details the rebuilding of the city walls of Jerusalem under a Persian governor?",
    "opts": [
      "Nehemiah",
      "Ezra",
      "Haggai",
      "Zechariah"
    ],
    "answer": 0,
    "ref": "Nehemiah 1-3",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Nehemiah led the effort to reconstruct the destroyed defensive walls of Jerusalem in record time."
  },
  {
    "q": "What is the longest book in the Bible by chapter count?",
    "opts": [
      "Isaiah",
      "Jeremiah",
      "Genesis",
      "Psalms"
    ],
    "answer": 3,
    "ref": "Psalms",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "The book of Psalms contains 150 unique poetic songs, prayers, and celebratory declarations."
  },
  {
    "q": "In which book do we read about a census taken in the desert of Sinai?",
    "opts": [
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy"
    ],
    "answer": 2,
    "ref": "Numbers 1-3",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Numbers (called Bemidbar or 'In the Wilderness' in Hebrew) details Israel's desert military census."
  },
  {
    "q": "Which epistle is considered Paul’s very last letter before his martyrdom in Rome?",
    "opts": [
      "1 Timothy",
      "2 Timothy",
      "Titus",
      "Philemon"
    ],
    "answer": 1,
    "ref": "2 Timothy 4",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "In 2 Timothy, Paul states he is 'being poured out' and has 'finished the race', anticipating execution."
  },
  {
    "q": "Which book describes a massive locust plague as a warning of the imminent 'Day of the Lord'?",
    "opts": [
      "Joel",
      "Amos",
      "Obadiah",
      "Jonah"
    ],
    "answer": 0,
    "ref": "Joel 1-2",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Joel opens with a locust infestation that devastated Israel, comparing it to an advancing divine army."
  },
  {
    "q": "What New Testament letter is uniquely addressed to a Christian slave owner to welcome back his runaway slave?",
    "opts": [
      "Colossae",
      "Philemon",
      "Titus",
      "Galatians"
    ],
    "answer": 1,
    "ref": "Philemon 1",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Paul wrote Philemon to welcome Onesimus back not as a slave, but as an equal brother in Christ."
  },
  {
    "q": "Which book contains the story of Israel's cycle of failure and rescue by tribal deliverers?",
    "opts": [
      "Joshua",
      "Judges",
      "Ruth",
      "1 Samuel"
    ],
    "answer": 1,
    "ref": "Judges",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Judges outlines Israel's pattern of turning to foreign gods, oppression, and rescue by deliverers."
  },
  {
    "q": "Which Old Testament book contains the romantic story of a loyal Moabite daughter-in-law of Naomi?",
    "opts": [
      "Esther",
      "Ruth",
      "Amos",
      "Hosea"
    ],
    "answer": 1,
    "ref": "Ruth",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Ruth tells how a Moabite widow dedicated her life to her Hebrew mother-in-law, ultimately joining the ancestry of King David."
  },
  {
    "q": "Which gospel is considered the earliest written and has the shortest narrative of Jesus' life?",
    "opts": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "answer": 1,
    "ref": "Gospel of Mark",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Many scholars agree Mark was the first gospel penned, prioritizing action and immediate movement."
  },
  {
    "q": "What book details predictions and measurements of a grand, new futuristic temple?",
    "opts": [
      "Isaiah",
      "Ezekiel",
      "Zechariah",
      "Malachi"
    ],
    "answer": 1,
    "ref": "Ezekiel 40-48",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Ezekiel covers the visual dimensions, gates, and rivers flowing out of a grand temple vision."
  },
  {
    "q": "In which New Testament book is Jesus described as high priest 'according to the order of Melchizedek'?",
    "opts": [
      "Romans",
      "Hebrews",
      "Ephesians",
      "Colossians"
    ],
    "answer": 1,
    "ref": "Hebrews 5-7",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Hebrews explains Jesus' priesthood as superior to Levi's model, using the mysterious royal figure Melchizedek."
  },
  {
    "q": "Which Old Testament book is penned by a weeping prophet lamenting the destruction of Jerusalem?",
    "opts": [
      "Jeremiah",
      "Lamentations",
      "Baruch",
      "Hosea"
    ],
    "answer": 1,
    "ref": "Lamentations 1",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Lamentations consists of five poetic poems grieving the Babylonian conquest of the holy city in 586 BC."
  },
  {
    "q": "Which minor prophet is named after his central warning about the complete destruction of Edom?",
    "opts": [
      "Joel",
      "Obadiah",
      "Jonah",
      "Micah"
    ],
    "answer": 1,
    "ref": "Obadiah 1",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Obadiah is the shortest book in the Old Testament, specializing in judgment on Edom for betraying Israel."
  },
  {
    "q": "Which New Testament book is written to counter false teachers by describing the 'archangel Michael disputing about the body of Moses'?",
    "opts": [
      "Jude",
      "2 Peter",
      "James",
      "1 John"
    ],
    "answer": 0,
    "ref": "Jude 9",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Jude cites this conflict to warn believers against disrespecting holy authorities and turning to wickedness."
  },
  {
    "q": "Which prophetic book is composed of a series of questions between a frustrated prophet and God regarding why He lets evil nations conquer Israel?",
    "opts": [
      "Habakkuk",
      "Zephaniah",
      "Haggai",
      "Nahum"
    ],
    "answer": 0,
    "ref": "Habakkuk 1-2",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Habakkuk questions why God uses the wicked Babylonians to bring judgment upon Judah."
  },
  {
    "q": "What is the very last book of the Old Testament in standard Protestant editions?",
    "opts": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Micah"
    ],
    "answer": 0,
    "ref": "Malachi",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Malachi ends the Old Testament canonical placement with prophecies calling for the return of Elijah."
  },
  {
    "q": "What was the name of Abraham's wife?",
    "opts": [
      "Rebekah",
      "Leah",
      "Rachel",
      "Sarah"
    ],
    "answer": 3,
    "ref": "Genesis 17:15",
    "cat": "People",
    "diff": "Easy",
    "explain": "Abraham's wife was Sarah (previously Sarai), whom God promised would bear Isaac at an advanced age."
  },
  {
    "q": "Which judge of Israel had supernatural physical strength from keeping a Nazirite cut hair vow?",
    "opts": [
      "Gideon",
      "Samson",
      "Deborah",
      "Jephthah"
    ],
    "answer": 1,
    "ref": "Judges 13-16",
    "cat": "People",
    "diff": "Easy",
    "explain": "Samson's physical power depended on his consecrated Nazirite lifestyle, represented by uncut hair."
  },
  {
    "q": "Who was the wisest king of unified Israel?",
    "opts": [
      "David",
      "Saul",
      "Rehoboam",
      "Solomon"
    ],
    "answer": 3,
    "ref": "1 Kings 3-4",
    "cat": "People",
    "diff": "Easy",
    "explain": "King Solomon asked God for discernment and was blessed with legendary wisdom and peaceful prosperity."
  },
  {
    "q": "Which woman in the Bible was the mother of John the Baptist?",
    "opts": [
      "Mary",
      "Anna",
      "Elizabeth",
      "Martha"
    ],
    "answer": 2,
    "ref": "Luke 1:57-60",
    "cat": "People",
    "diff": "Medium",
    "explain": "Elizabeth, a descendant of Aaron and cousin to Mary, was the mother of John the Baptist."
  },
  {
    "q": "Who was the first recorded Christian martyr?",
    "opts": [
      "James",
      "Peter",
      "Stephen",
      "Philip"
    ],
    "answer": 2,
    "ref": "Acts 7:54-60",
    "cat": "People",
    "diff": "Hard",
    "explain": "Stephen, one of the seven local deacons, was stoned to death after describing his vision of Christ in heaven."
  },
  {
    "q": "What was the apostle Paul's Hebrew name before his conversion?",
    "opts": [
      "Silas",
      "Barnabas",
      "Saul",
      "Titus"
    ],
    "answer": 2,
    "ref": "Acts 9:1",
    "cat": "People",
    "diff": "Medium",
    "explain": "Before his conversion, Paul was known on historical record as Saul of Tarsus, a devoted Pharisee."
  },
  {
    "q": "Who was the first king anointed over Israel?",
    "opts": [
      "David",
      "Solomon",
      "Saul",
      "Samuel"
    ],
    "answer": 2,
    "ref": "1 Samuel 9-10",
    "cat": "People",
    "diff": "Easy",
    "explain": "Saul, son of Kish from Benjamin, was anointed by Samuel to be Israel's first monarch."
  },
  {
    "q": "Who are the twin sons born to Isaac and Rebekah?",
    "opts": [
      "Jacob & Esau",
      "Cain & Abel",
      "Joseph & Benjamin",
      "Ephraim & Manasseh"
    ],
    "answer": 0,
    "ref": "Genesis 25",
    "cat": "People",
    "diff": "Easy",
    "explain": "Esau and Jacob were born twins, with Esau coming out first, covered in red hair."
  },
  {
    "q": "What was the name of Moses' older sister, a prophetess, who sang after crossing the Red Sea?",
    "opts": [
      "Miriam",
      "Hannah",
      "Deborah",
      "Zipporah"
    ],
    "answer": 0,
    "ref": "Exodus 15:20",
    "cat": "People",
    "diff": "Medium",
    "explain": "Miriam led the daughters of Israel with tambourines, singing a grand triumphal song after the escape."
  },
  {
    "q": "Who was the husband of Ruth and the great-grandfather of King David?",
    "opts": [
      "Boaz",
      "Mahlon",
      "Jesse",
      "Salmon"
    ],
    "answer": 0,
    "ref": "Ruth 4:21-22",
    "cat": "People",
    "diff": "Medium",
    "explain": "Boaz served as the kinsman-redeemer who married Ruth the Moabite, yielding David's ancestry line."
  },
  {
    "q": "What priest of Salem blessed Abraham and was offered a tenth of the spoils?",
    "opts": [
      "Melchizedek",
      "Jethro",
      "Balaam",
      "Zadok"
    ],
    "answer": 0,
    "ref": "Genesis 14:18-20",
    "cat": "People",
    "diff": "Hard",
    "explain": "Melchizedek was the king of Salem and priest of God Most High, who fed Abraham bread and wine."
  },
  {
    "q": "Which disciple was a tax collector in Capernaum when Jesus called him?",
    "opts": [
      "Peter",
      "Andrew",
      "Thomas",
      "Matthew"
    ],
    "answer": 3,
    "ref": "Matthew 9:9",
    "cat": "People",
    "diff": "Easy",
    "explain": "Matthew (or Levi) worked collecting taxes for the Roman state when Jesus commanded him to follow."
  },
  {
    "q": "Who was the female judge of Israel who sat beneath a palm tree?",
    "opts": [
      "Gomer",
      "Deborah",
      "Jael",
      "Athaliah"
    ],
    "answer": 1,
    "ref": "Judges 4",
    "cat": "People",
    "diff": "Medium",
    "explain": "Deborah was a prophetess who judged Israel, advising Barak on military actions."
  },
  {
    "q": "Who was David's grandfather, whose lineage led to Jesus' earthly home?",
    "opts": [
      "Jesse",
      "Boaz",
      "Obed",
      "Elimelech"
    ],
    "answer": 2,
    "ref": "Ruth 4:21-22",
    "cat": "People",
    "diff": "Hard",
    "explain": "Obed was the son of Ruth and Boaz, who fathered Jesse, who fathered David."
  },
  {
    "q": "Which queen of Israel tried to kill Elijah and was later thrown from a window?",
    "opts": [
      "Jezebel",
      "Athaliah",
      "Vashti",
      "Delilah"
    ],
    "answer": 0,
    "ref": "1 Kings 19, 2 Kings 9",
    "cat": "People",
    "diff": "Easy",
    "explain": "Jezebel introduced Phoenician worship of Baal to Israel, persecuting the prophets of God."
  },
  {
    "q": "Who of the twelve apostles is identified as the brother of Simon Peter?",
    "opts": [
      "John",
      "James",
      "Andrew",
      "Philip"
    ],
    "answer": 2,
    "ref": "Matthew 4:18",
    "cat": "People",
    "diff": "Medium",
    "explain": "Andrew was the first disciple called, who immediately fetched his brother Simon Peter to meet Jesus."
  },
  {
    "q": "What young king began reigning over Judah at age eight and instituted great reforms after finding the Book of the Law?",
    "opts": [
      "Hezekiah",
      "Josiah",
      "Uzziah",
      "Manasseh"
    ],
    "answer": 1,
    "ref": "2 Kings 22",
    "cat": "People",
    "diff": "Medium",
    "explain": "Josiah rediscovered scripture, cleaned the temple of idols, and reinstituted the Passover celebration."
  },
  {
    "q": "What wealthy friend of Jesus gave up his newly constructed tomb for Jesus' burial?",
    "opts": [
      "Joseph of Arimathea",
      "Nicodemus",
      "Lazarus",
      "Zacchaeus"
    ],
    "answer": 0,
    "ref": "Matthew 27:57-60",
    "cat": "People",
    "diff": "Easy",
    "explain": "Joseph of Arimathea, a wealthy disciple, requested Jesus' body from Pilate and laid it in his own tomb."
  },
  {
    "q": "Who was Moses' spokesperson and brother who processed God's words to Pharaoh?",
    "opts": [
      "Aaron",
      "Joshua",
      "Miriam",
      "Hur"
    ],
    "answer": 0,
    "ref": "Exodus 4",
    "cat": "People",
    "diff": "Easy",
    "explain": "Because Moses claimed to have slow speech, God appointed Aaron to speak on his behalf."
  },
  {
    "q": "What was the name of the female seller of luxurious purple fabric in Philippi who opened her home to Paul?",
    "opts": [
      "Lydia",
      "Priscilla",
      "Chloe",
      "Phoebe"
    ],
    "answer": 0,
    "ref": "Acts 16:14-15",
    "cat": "People",
    "diff": "Hard",
    "explain": "Lydia, a businesswoman from Thyatira, heard Paul tell the Gospel and was baptized with her household."
  },
  {
    "q": "Which of King David's sons attempted to seize the throne from Solomon but was later executed?",
    "opts": [
      "Absalom",
      "Adonijah",
      "Amnon",
      "Mephibosheth"
    ],
    "answer": 1,
    "ref": "1 Kings 1-2",
    "cat": "People",
    "diff": "Hard",
    "explain": "Adonijah set himself up as successor, but David abdicated and anointed Solomon, who consolidated power."
  },
  {
    "q": "What was the name of the girl who answered the door after Simon Peter escaped prison and knocked?",
    "opts": [
      "Rhoda",
      "Tabitha",
      "Priscilla",
      "Phoebe"
    ],
    "answer": 0,
    "ref": "Acts 12:13",
    "cat": "People",
    "diff": "Hard",
    "explain": "Rhoda was so excited to hear Peter's voice that she forgot to open the gate, and ran back to tell the others."
  },
  {
    "q": "Who was Timothy's mother, a key teacher of his faith along with his grandmother Lois?",
    "opts": [
      "Eunice",
      "Priscilla",
      "Lydia",
      "Bernice"
    ],
    "answer": 0,
    "ref": "2 Timothy 1:5",
    "cat": "People",
    "diff": "Hard",
    "explain": "Eunice was a Jewish Christian whose legacy of sincere scripture study influenced her son Timothy."
  },
  {
    "q": "Which close friend of Paul was a co-worker tentmaker, along with his wife Priscilla?",
    "opts": [
      "Aquila",
      "Silas",
      "Barnabas",
      "Apollos"
    ],
    "answer": 0,
    "ref": "Acts 18:2-3",
    "cat": "People",
    "diff": "Medium",
    "explain": "Paul worked alongside Aquila and Priscilla, residing with them in Corinth whilst ministering."
  },
  {
    "q": "Who was the Roman procurator before whom Paul defended himself, who kept Paul in prison for two years hoping for a bribe?",
    "opts": [
      "Felix",
      "Festus",
      "Pilate",
      "Gallio"
    ],
    "answer": 0,
    "ref": "Acts 24:26-27",
    "cat": "People",
    "diff": "Hard",
    "explain": "Felix listened to Paul speak but dismissed him in fear, keeping him imprisoned until replaced by Porcius Festus."
  },
  {
    "q": "Which faithful companion accompanied Naomi from Moab to Bethlehem, declaring: 'Your people will be my people'?",
    "opts": [
      "Orpah",
      "Ruth",
      "Esther",
      "Hannah"
    ],
    "answer": 1,
    "ref": "Ruth 1",
    "cat": "People",
    "diff": "Easy",
    "explain": "Ruth stayed loyal to Naomi, abandoning her Moabite hometown to embrace Naomi's path and God."
  },
  {
    "q": "Who was the cousin of Esther who uncovered a palace assassination plot and instructed her to speak to the king?",
    "opts": [
      "Mordecai",
      "Haman",
      "Memucan",
      "Hathach"
    ],
    "answer": 0,
    "ref": "Esther 2, 4",
    "cat": "People",
    "diff": "Medium",
    "explain": "Mordecai raised Esther, guided her through the court, and refused to bow before the wicked Haman."
  },
  {
    "q": "What daughter-in-law of Judah bore twin sons, Perez and Zerah, after posing as a roadside shrine prostitute?",
    "opts": [
      "Tamar",
      "Rahab",
      "Zipporah",
      "Coobi"
    ],
    "answer": 0,
    "ref": "Genesis 38",
    "cat": "People",
    "diff": "Hard",
    "explain": "Tamar secured her rightful family inheritance through an elaborate deception when Judah failed to marry her to his third son."
  },
  {
    "q": "Who was David's military commander (general) who captured the Jebusite city of Jerusalem for him?",
    "opts": [
      "Joab",
      "Abner",
      "Benaiah",
      "Asahel"
    ],
    "answer": 0,
    "ref": "2 Samuel 8, 1 Chronicles 11",
    "cat": "People",
    "diff": "Hard",
    "explain": "Joab, son of Zeruiah, served faithfully as David's chief general, though David often struggled with his ruthless style."
  },
  {
    "q": "What helper, mentioned in Romans 16, was a deaconess of the church of Cenchreae who carried Paul's Epistle to the Romans?",
    "opts": [
      "Phoebe",
      "Junia",
      "Tryphena",
      "Tryphosa"
    ],
    "answer": 0,
    "ref": "Romans 16:1-2",
    "cat": "People",
    "diff": "Hard",
    "explain": "Paul commends Phoebe to the Roman church, requesting that they assist her in any matters she needs."
  },
  {
    "q": "How many days and nights did it rain during the great flood?",
    "opts": [
      "20",
      "30",
      "40",
      "50"
    ],
    "answer": 2,
    "ref": "Genesis 7:12",
    "cat": "Events",
    "diff": "Medium",
    "explain": "It rained continuously for 40 days and nights, drowning the earth in the days of Noah."
  },
  {
    "q": "Which dramatic event marked the start of the early Christian church in the Book of Acts?",
    "opts": [
      "The Ascension",
      "The Baptism of Jesus",
      "Pentecost",
      "The Conversion of Paul"
    ],
    "answer": 2,
    "ref": "Acts 2",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Pentecost marked the formal coming of the Holy Spirit, empowering 120 disciples to share the Gospel."
  },
  {
    "q": "Which annual festival commemorates Israel's hasty exit from Egyptian slavery?",
    "opts": [
      "Pentecost",
      "Passover",
      "Tabernacles",
      "Purim"
    ],
    "answer": 1,
    "ref": "Exodus 12",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Passover celebrates the day the angel of death 'passed over' Israelite homes marked with sacrifice blood."
  },
  {
    "q": "Where was Jesus traveling when He was arrested in a garden?",
    "opts": [
      "Mount of Olives (Gethsemane)",
      "Mount of Transfiguration",
      "Mount Sinai",
      "Mount Temple"
    ],
    "answer": 0,
    "ref": "Matthew 26:36",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus was praying in Gethsemane, located on the Mount of Olives, when Judas led the guards to arrest Him."
  },
  {
    "q": "Who became mute during his priestly service because he doubted an angel's birth announcement?",
    "opts": [
      "Zechariah",
      "Simeon",
      "Caiaphas",
      "Annas"
    ],
    "answer": 0,
    "ref": "Luke 1:18-20",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Zechariah was struck mute by Gabriel for doubting that his aged wife Elizabeth would conceive John the Baptist."
  },
  {
    "q": "What occurred first when Moses threw his rod onto the floor of Pharaoh's palace?",
    "opts": [
      "It turned into water",
      "It turned into dust",
      "It turned into a snake",
      "It split into two halves"
    ],
    "answer": 2,
    "ref": "Exodus 7:10",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Aaron threw his rod down and it became a serpent, which subsequently swallowed the magicians' fake serpents."
  },
  {
    "q": "What miraculously split when Moses raised his hand over the water to let Israel escape Egyptian chariots?",
    "opts": [
      "Jordan River",
      "Red Sea",
      "Nile River",
      "Dead Sea"
    ],
    "answer": 1,
    "ref": "Exodus 14",
    "cat": "Events",
    "diff": "Easy",
    "explain": "God drove the Red Sea back with a strong east wind, dividing the waters and providing clear dry ground."
  },
  {
    "q": "What event occurred at Cana that represented Jesus' transition to public works?",
    "opts": [
      "A massive feast",
      "A wedding",
      "A funeral of a child",
      "A harvest collection festival"
    ],
    "answer": 1,
    "ref": "John 2:1-11",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus attended a wedding at Cana with His disciples, where He saved the host by turning water to wine."
  },
  {
    "q": "Which building project caused humanity's direct dispersal across the earth?",
    "opts": [
      "The Temple of Solomon",
      "The Walls of Jericho",
      "The Tower of Babel",
      "The Palace of Nebuchadnezzar"
    ],
    "answer": 2,
    "ref": "Genesis 11",
    "cat": "Events",
    "diff": "Easy",
    "explain": "God intervened at the Tower of Babel to break safe language, preventing proud, self-centered developments."
  },
  {
    "q": "What occurred when David brought the Ark of the Covenant to Jerusalem featuring dancing?",
    "opts": [
      "A major defeat",
      "Banqueting and dance",
      "A localized storm",
      "The arrival of a foreign king"
    ],
    "answer": 1,
    "ref": "2 Samuel 6",
    "cat": "Events",
    "diff": "Medium",
    "explain": "David danced before the Lord with all his might, wearing a linen ephod, celebrating the Ark's arrival."
  },
  {
    "q": "What happened when the disciple Eutychus fell asleep during a long sermon by Paul?",
    "opts": [
      "He was expelled",
      "He fell out of a third-story window and died",
      "He ran out of the building",
      "He was given a rebuke"
    ],
    "answer": 1,
    "ref": "Acts 20:9-12",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Eutychus fell into a deep sleep, fell from the third-story window, and was picked up dead. Paul embraced him, bringing him back to life."
  },
  {
    "q": "What dramatic event shook the prison in Philippi, releasing Paul and Silas from their chains?",
    "opts": [
      "A Roman assault",
      "An earthquake",
      "A prison riot",
      "An angelic descent of light"
    ],
    "answer": 1,
    "ref": "Acts 16:25-26",
    "cat": "Events",
    "diff": "Easy",
    "explain": "While Paul and Silas were singing hymns, a violent earthquake shook the foundations, throwing open the doors."
  },
  {
    "q": "What natural event did Elijah experience on Mount Horeb where God was NOT found?",
    "opts": [
      "Wind, earthquake, and fire",
      "Rain, hail, and locusts",
      "Famine and heat",
      "Darkness and eclipse"
    ],
    "answer": 0,
    "ref": "1 Kings 19:11-12",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The Lord passed by with wind, earthquake, and fire, but was only present in the quiet whisper that followed."
  },
  {
    "q": "What was the tragic fate of Lot's wife during the escape from the destruction of Sodom?",
    "opts": [
      "Drowned in the sea",
      "Turned into a pillar of salt",
      "Burned by holy fire",
      "Kidnapped by wild tribesmen"
    ],
    "answer": 1,
    "ref": "Genesis 19:26",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Lot's wife looked back at Sodom in disobedience and was transformed into a pillar of salt."
  },
  {
    "q": "Who was raised from the dead by Peter in Joppa after falling ill, who was known for her charity work making clothes?",
    "opts": [
      "Tabitha (Dorcas)",
      "Lydia",
      "Rhoda",
      "Priscilla"
    ],
    "answer": 0,
    "ref": "Acts 9:36-42",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Peter went to the upper room, knelt and prayed, and said: 'Tabitha, get up.' She opened her eyes and stood."
  },
  {
    "q": "What dream of Pharaoh did Joseph interpret to save Egypt from starvation?",
    "opts": [
      "Seven fat cows swallowed by seven skinny cows",
      "A vine with branches forming grapes",
      "Stars bowing down blockwise",
      "A tree reaching to the sky"
    ],
    "answer": 0,
    "ref": "Genesis 41",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Joseph explained that Egypt would have seven years of great bounty followed by seven severe years of famine."
  },
  {
    "q": "What event occurred at the River Jabbok when Jacob stayed behind alone at night?",
    "opts": [
      "He built a large altar",
      "He wrestled with a mysterious man until dawn",
      "He fell into a deep trance of prophecy",
      "He made a pact with Laban"
    ],
    "answer": 1,
    "ref": "Genesis 32:22-32",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Jacob wrestled with a mysterious supernatural visitor, who changed his name to Israel (which means 'struggled with God')."
  },
  {
    "q": "Where was Jesus when He was famously tempted by Satan with bread and world kingdoms?",
    "opts": [
      "The temple steps",
      "The wilderness (for 40 days)",
      "The mountain of Carmel",
      "The sea shores of Galilee"
    ],
    "answer": 1,
    "ref": "Matthew 4:1-11",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus prepared for His ministry with forty days of fasting in the desert, countering Satan's temptations with scripture."
  },
  {
    "q": "What historic battle event involved Joshua commanding the sun and moon to stand still?",
    "opts": [
      "Battle of Gibeon",
      "Battle of Jericho",
      "Battle of Ai",
      "Battle of Hazor"
    ],
    "answer": 0,
    "ref": "Joshua 10",
    "cat": "Events",
    "diff": "Hard",
    "explain": "So Joshua could completely rout his Amorite foes, God held the sun high for nearly an entire day."
  },
  {
    "q": "At what event did Jesus dine with tax collectors and sinners, prompting criticism from the local Pharisees?",
    "opts": [
      "Levi's (Matthew's) banquet",
      "The feeding of 4,000",
      "The Cana reception",
      "The dinner at Bethany"
    ],
    "answer": 0,
    "ref": "Luke 5:29-32",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Levi held a great banquet for Jesus, prompting Jesus to declare He came for the sick, not the healthy."
  },
  {
    "q": "What tragedy struck Job's children at the beginning of his trials?",
    "opts": [
      "A severe plague",
      "A home collapse caused by a desert wind",
      "A capture by Chaldean raiders",
      "They drowned on a capsized vessel"
    ],
    "answer": 1,
    "ref": "Job 1:18-19",
    "cat": "Events",
    "diff": "Hard",
    "explain": "While his children were dining, a windstorm struck the corners of the house, causing a fatal collapse."
  },
  {
    "q": "Which specific event caused Moses to flee Egypt and settle in the land of Midian?",
    "opts": [
      "An angel warned him",
      "He was expelled by the royal guards",
      "He killed an Egyptian taskmaster",
      "He was banished for starting a strike"
    ],
    "answer": 2,
    "ref": "Exodus 2:11-15",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Moses killed an Egyptian who was beating a Hebrew slave; when Pharaoh heard of this, he sought to execute Moses."
  },
  {
    "q": "Which miracle was performed by Elijah to support a starving widow in Zarephath?",
    "opts": [
      "Her jar of flour and jug of oil did not run dry",
      "He converted water to oil",
      "A spring flow appeared in her yard",
      "He sent bread daily with ravens"
    ],
    "answer": 0,
    "ref": "1 Kings 17",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Through Elijah's word, her minimal resources of flour and oil lasted throughout the severe famine."
  },
  {
    "q": "What event occurred on the Mount of Olives 40 days after Jesus' resurrection?",
    "opts": [
      "The Sermon on the Mount",
      "The Transfiguration",
      "The Ascension to Heaven",
      "The feeding of 5,000"
    ],
    "answer": 2,
    "ref": "Acts 1:9-12",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Jesus blessed His disciples and was taken up in a cloud, returning to His heavenly throne."
  },
  {
    "q": "What sign did Peter experience that prompted him to immediately go inside a Gentile household?",
    "opts": [
      "A sheet lowered from heaven with unclean animals",
      "A voice from an angel on a rooftop",
      "A sudden localized earthquake",
      "An encounter with three strangers"
    ],
    "answer": 0,
    "ref": "Acts 10",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Peter had a vision of a sheet containing unclean beasts, with a voice saying: 'What God has made clean, do not call common'."
  },
  {
    "q": "What was the final sign that Solomon gave when determining which woman was the real mother of a baby?",
    "opts": [
      "He ordered the baby cut in half",
      "He asked the priest to bless them",
      "He cast lots before the Ark",
      "He examined their home lineage"
    ],
    "answer": 0,
    "ref": "1 Kings 3",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Solomon proposed dividing the infant; the real mother instantly begged him to spare the child, proving her maternity."
  },
  {
    "q": "What incident caused the death of Ananias and his wife Sapphira in the early church?",
    "opts": [
      "They denied Christ",
      "They lied about the sale price of a field",
      "They desecrated the elements",
      "They started a riot among leaders"
    ],
    "answer": 1,
    "ref": "Acts 5",
    "cat": "Events",
    "diff": "Medium",
    "explain": "They kept back portion of the land's proceeds but lied to the apostles, claiming they donated everything."
  },
  {
    "q": "What miraculous healing took place when the Syrian general Naaman dipped seven times in the Jordan River?",
    "opts": [
      "His blindness was healed",
      "His leprosy was cleansed",
      "His withered arm grew back",
      "His chronic high fever left him"
    ],
    "answer": 1,
    "ref": "2 Kings 5",
    "cat": "Events",
    "diff": "Medium",
    "explain": "After overcoming his pride and obeying Elisha's instructions, Naaman's flesh was restored like a child's."
  },
  {
    "q": "What occurred to the golden calf after Moses returned and witnessed the worship festival?",
    "opts": [
      "He hid it in the Tabernacle",
      "He melted it, ground it to powder, and made the Israelites drink it",
      "He returned it to the royal treasury",
      "He threw it down Mount Sinai"
    ],
    "answer": 1,
    "ref": "Exodus 32:20",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Moses destroyed the calf with fire, ground it to dust, scattered it on the drinking water, and made Israel ingest it."
  },
  {
    "q": "At what Jewish feast did the dramatic sign of writing on the plaster walls happen in Belshazzar's palace?",
    "opts": [
      "A royal banquet using Jerusalem's sacred gold vessels",
      "A victory celebration over Persia",
      "The annual Passover",
      "A public temple sacrifice"
    ],
    "answer": 0,
    "ref": "Daniel 5",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Using Israel's stolen temple cups, Belshazzar threw a grand party, prompting the writing on the wall: 'Mene, Mene, Tekel, Parsin'."
  },
  {
    "q": "What language was the New Testament originally written in?",
    "opts": [
      "Latin",
      "Hebrew",
      "Aramaic",
      "Greek"
    ],
    "answer": 3,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "The books of the New Testament were penned in Koine Greek, the common language of the Mediterranean world."
  },
  {
    "q": "What is the longest chapter in the standard Protestant Bible?",
    "opts": [
      "Psalm 23",
      "Psalm 117",
      "Psalm 119",
      "Isaiah 53"
    ],
    "answer": 2,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Psalm 119 has 176 verses, detailing beautiful praises for the statutes and laws of God."
  },
  {
    "q": "How many books are there in the Old Testament of the Protestant Bible?",
    "opts": [
      "27",
      "39",
      "46",
      "66"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Protestant Old Testament consists of 39 books, ranging from Genesis to Malachi."
  },
  {
    "q": "How many books are in the New Testament?",
    "opts": [
      "12",
      "27",
      "39",
      "66"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "There are 27 books in the New Testament, beginning with Matthew's Gospel and ending with Revelation."
  },
  {
    "q": "What is the shortest chapter in the bible?",
    "opts": [
      "Psalm 117",
      "Psalm 119",
      "2 John",
      "Jude"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Psalm 117 is the shortest chapter, consisting of only two verses praising the Lord's love."
  },
  {
    "q": "Which book of the Old Testament contains the Hebrew Shema prayer: 'Hear, O Israel: The Lord our God, the Lord is one'?",
    "opts": [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "answer": 3,
    "ref": "Deuteronomy 6:4",
    "cat": "General",
    "diff": "Medium",
    "explain": "Deuteronomy 6 contains the central declaration of faith, which observant Jews recite daily."
  },
  {
    "q": "What does the word 'Genesis' mean?",
    "opts": [
      "Exodus",
      "Beginning",
      "Law",
      "Covenant"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Genesis originates from the Greek word which means 'origin' or 'birth'."
  },
  {
    "q": "Which book describes a futuristic vision where a river of life flows out of the throne of God?",
    "opts": [
      "Daniel",
      "Ezekiel",
      "Zechariah",
      "Revelation"
    ],
    "answer": 3,
    "ref": "Revelation 22:1",
    "cat": "General",
    "diff": "Medium",
    "explain": "The final chapter of Revelation outlines the new Jerusalem, featuring the water of life."
  },
  {
    "q": "Which major language was the Old Testament primarily written in?",
    "opts": [
      "Greek",
      "Latin",
      "Hebrew",
      "Coptic"
    ],
    "answer": 2,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Old Testament was penned in classical Hebrew, with small portions written in Aramaic."
  },
  {
    "q": "What does 'Gospel' mean literally?",
    "opts": [
      "Good news",
      "Tidings of law",
      "Holy scripture",
      "Voice of the Savior"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Gospel comes from Old English 'godspell', which translates directly from Greek 'euangelion' meaning 'good news'."
  },
  {
    "q": "Who was the earliest recorded person to live to 969 years in Genesis chronicles?",
    "opts": [
      "Methuselah",
      "Enoch",
      "Adam",
      "Jared"
    ],
    "answer": 0,
    "ref": "Genesis 5:27",
    "cat": "General",
    "diff": "Easy",
    "explain": "Methuselah, son of Enoch, lived to the oldest recorded age of nine hundred and sixty-nine years."
  },
  {
    "q": "What does 'Apostle' mean in its original Greek concept?",
    "opts": [
      "Teacher of truth",
      "One sent out",
      "Scholar of history",
      "Disciple of rules"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Apostle comes from Greek 'apostolos', which means an emissary or 'one who is sent out' with a message."
  },
  {
    "q": "What was the first animal Noah sent out from the ark to look for dry ground?",
    "opts": [
      "A dove",
      "A raven",
      "A leaf-cutter ant",
      "A hawk"
    ],
    "answer": 1,
    "ref": "Genesis 8:7",
    "cat": "General",
    "diff": "Easy",
    "explain": "Noah first sent out a raven, which flew back and forth until the waters dried up."
  },
  {
    "q": "According to the proverb, what is identified as 'the beginning of wisdom'?",
    "opts": [
      "Fear of the Lord",
      "Reading books",
      "Listening to elders",
      "Living in peace"
    ],
    "answer": 0,
    "ref": "Proverbs 9:10",
    "cat": "General",
    "diff": "Easy",
    "explain": "The fear of the Lord (deep awe and moral alignment) is the foundation of biblical wisdom."
  },
  {
    "q": "Which book contains the line: 'For what does it profit a man to gain the whole world and forfeit his soul?'",
    "opts": [
      "Romans",
      "Mark",
      "Acts",
      "Hebrews"
    ],
    "answer": 1,
    "ref": "Mark 8:36",
    "cat": "General",
    "diff": "Easy",
    "explain": "Jesus cautioned His disciples about pursuing transient worldly gain at the expense of eternal life."
  },
  {
    "q": "What is the English translation of the Hebrew title 'Messiah'?",
    "opts": [
      "Anointed one",
      "Teacher of peace",
      "Redeemer of sins",
      "Sovereign king"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Messiah comes from Hebrew 'Mashiach', meaning 'Anointed One', translated in Greek as 'Christ'."
  },
  {
    "q": "Which section of books does the Jewish title 'Tanakh' represent?",
    "opts": [
      "The five books of Moses only",
      "The Torah, Prophets, and Writings",
      "The historical records of kings",
      "The poetic wisdom collections"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "Tanakh is an acronym forming T (Torah/Law), N (Nevi'im/Prophets), and K (Ketuvim/Writings)."
  },
  {
    "q": "What does the name 'Jesus' mean in Hebrew (Yeshua)?",
    "opts": [
      "God preserves",
      "The Lord saves",
      "King of peace",
      "The holy light"
    ],
    "answer": 1,
    "ref": "Matthew 1:21",
    "cat": "General",
    "diff": "Medium",
    "explain": "Yeshua means 'Yahweh saves', which is why the angel declared He would save His people from their sins."
  },
  {
    "q": "Which New Testament letter contains the definition of love as 'patient and kind, not arrogant or rude'?",
    "opts": [
      "Galatians",
      "Ephesians",
      "Romans",
      "1 Corinthians"
    ],
    "answer": 3,
    "ref": "1 Corinthians 13",
    "cat": "General",
    "diff": "Easy",
    "explain": "Paul's great chapter on love (charity) describes the divine character, which is above every spiritual gift."
  },
  {
    "q": "What Hebrew word serves as a legal or liturgical confirmation meaning 'so be it' or 'truth'?",
    "opts": [
      "Hallelujah",
      "Amen",
      "Selah",
      "Hosanna"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Amen constitutes a solemn confirmation of an oath or prayer, signifying complete reliability."
  },
  {
    "q": "Which mountain is traditionally recognized as the landing spot of Noah's Ark?",
    "opts": [
      "Mount Ararat",
      "Mount Sinai",
      "Mount Zion",
      "Mount Hermon"
    ],
    "answer": 0,
    "ref": "Genesis 8:4",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Ark came to rest in the seventh month on the mountains of Ararat in eastern Turkey."
  },
  {
    "q": "According to Jesus' parable, what tiny seed represents the dynamic growth of God’s Kingdom?",
    "opts": [
      "Mustard seed",
      "Acorn",
      "Flax seed",
      "Poppy seed"
    ],
    "answer": 0,
    "ref": "Matthew 13:31-32",
    "cat": "General",
    "diff": "Easy",
    "explain": "The mustard seed is very small but grows into a vast shrub, providing shelter for the birds."
  },
  {
    "q": "What term is traditionally used for the 400-year interval between Malachi's prophecies and John the Baptist's appearance?",
    "opts": [
      "The Exile",
      "The Silent Era (Intertestamental period)",
      "The Great Captivity",
      "The Era of Kings"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "The intertestamental period featured major historical updates (Greek and Roman periods) but no active Hebrew prophecy."
  },
  {
    "q": "Which major biblical translation, written in Alexandria, converted the Hebrew Bible into Greek?",
    "opts": [
      "The Vulgate",
      "The Septuagint",
      "The Peshitta",
      "The Samaritan Torah"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "The Septuagint (often labeled LXX) was crafted by Jewish scholars for Greek-speaking Levantines."
  },
  {
    "q": "Which ancient code represents the priestly standard in Leviticus calling for love towards your neighbor?",
    "opts": [
      "The Holiness Code",
      "The Ten Commandments",
      "The civil laws",
      "The Sinai regulations"
    ],
    "answer": 0,
    "ref": "Leviticus 19:18",
    "cat": "General",
    "diff": "Medium",
    "explain": "Leviticus 19:18 contains the key commandment: 'Love your neighbor as yourself', quoted by Jesus."
  },
  {
    "q": "What material was the ancient writing paper constructed from water weeds in Egypt?",
    "opts": [
      "Parchment",
      "Papyrus",
      "Vellum",
      "Clay tablets"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Papyrus was assembled from sliced reeds of the papyrus plant, used for early biblical manuscripts."
  },
  {
    "q": "According to biblical custom, how often did the Jubilee Year occur when lands were restored and slaves released?",
    "opts": [
      "Every 7 years",
      "Every 12 years",
      "Every 49 years",
      "Every 50 years"
    ],
    "answer": 3,
    "ref": "Leviticus 25",
    "cat": "General",
    "diff": "Hard",
    "explain": "The Jubilee occurred after seven cycles of seven sabbatical years (on the 50th year)."
  },
  {
    "q": "Which early Latin translation of the Bible was compiled by Saint Jerome in the late 4th century?",
    "opts": [
      "Septuagint",
      "Vulgate",
      "Geneva Bible",
      "Peshitta"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "The Latin Vulgate served as the standard scripture translation for Western Christianity for centuries."
  },
  {
    "q": "What Hebrew musical term, found frequently in the Psalms, is traditionally interpreted as a meditative pause?",
    "opts": [
      "Hallelujah",
      "Selah",
      "Hosanna",
      "Amen"
    ],
    "answer": 1,
    "ref": "Psalms",
    "cat": "General",
    "diff": "Medium",
    "explain": "Selah is a musical/liturgical instruction meaning to stop, ponder, or take a meditative breath."
  },
  {
    "q": "Which book in the New Testament is composed on historical record as a personal letter to a lady friend of early Christians?",
    "opts": [
      "Philemon",
      "2 John",
      "3 John",
      "Titus"
    ],
    "answer": 1,
    "ref": "2 John 1:1",
    "cat": "General",
    "diff": "Hard",
    "explain": "2 John is addressed directly to the 'elect lady and her children', confirming theological hospitality."
  },
  {
    "q": "Which brother suggested throwing Joseph into a pit instead of killing him?",
    "opts": [
      "Reuben",
      "Simeon",
      "Judah",
      "Dan"
    ],
    "answer": 0,
    "ref": "Genesis 37:21-22",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Reuben hoped to rescue Joseph and return him safely to Jacob."
  },
  {
    "q": "What did Jacob call the place where he saw a ladder reaching to heaven?",
    "opts": [
      "Peniel",
      "Bethel",
      "Shechem",
      "Shiloh"
    ],
    "answer": 1,
    "ref": "Genesis 28:19",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Jacob named the place Bethel, which means 'House of God'."
  },
  {
    "q": "For how many pieces of silver did Joseph's brothers sell him?",
    "opts": [
      "10",
      "20",
      "30",
      "50"
    ],
    "answer": 1,
    "ref": "Genesis 37:28",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "The Midianite merchants bought Joseph for 20 shekels of silver."
  },
  {
    "q": "Who was Aaron's son who succeeded him as the high priest?",
    "opts": [
      "Eleazar",
      "Nadab",
      "Abihu",
      "Phinehas"
    ],
    "answer": 0,
    "ref": "Numbers 20:25-28",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Eleazar was dressed in Aaron's priestly garments upon Aaron's death on mount Hor."
  },
  {
    "q": "How many men were chosen by Gideon to fight the Midianites?",
    "opts": [
      "300",
      "1,000",
      "10,000",
      "32,000"
    ],
    "answer": 0,
    "ref": "Judges 7:7",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "God narrowed Gideon's army down to 300 men who lapped water like dogs."
  },
  {
    "q": "Which judge of Israel sacrificed his daughter to fulfill a rash vow?",
    "opts": [
      "Jephthah",
      "Gideon",
      "Samson",
      "Barak"
    ],
    "answer": 0,
    "ref": "Judges 11",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Jephthah vowed to offer whatever first came out of his house to meet him if he returned victorious."
  },
  {
    "q": "What was the name of King David's eldest son who was killed by Absalom?",
    "opts": [
      "Amnon",
      "Adonijah",
      "Solomon",
      "Kileab"
    ],
    "answer": 0,
    "ref": "2 Samuel 13",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Absalom ordered his servants to kill Amnon in revenge for violating his sister Tamar."
  },
  {
    "q": "Who was the prophet who rebuked King David for his sin with Bathsheba?",
    "opts": [
      "Nathan",
      "Samuel",
      "Elijah",
      "Gad"
    ],
    "answer": 0,
    "ref": "2 Samuel 12",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Nathan used the parable of a rich man stealing a poor man's only lamb to bring David to repentance."
  },
  {
    "q": "Which king of Israel was killed by Jehu in Jezreel?",
    "opts": [
      "Joram",
      "Ahab",
      "Ahaziah",
      "Jeroboam II"
    ],
    "answer": 0,
    "ref": "2 Kings 9",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Jehu shot an arrow that pierced Joram's heart as part of God's judgement on Ahab's house."
  },
  {
    "q": "Which prophet was taken up to heaven in a whirlwind?",
    "opts": [
      "Elijah",
      "Elisha",
      "Ezekiel",
      "Isaiah"
    ],
    "answer": 0,
    "ref": "2 Kings 2:11",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Elijah was separated from Elisha by a chariot of fire and taken up in a whirlwind."
  },
  {
    "q": "Which Assyrian king laid siege to Jerusalem during Hezekiah's reign?",
    "opts": [
      "Sennacherib",
      "Tiglath-Pileser",
      "Sargon II",
      "Shalmaneser V"
    ],
    "answer": 0,
    "ref": "2 Kings 18:13",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Sennacherib invaded Judah, but his army was destroyed by an angel."
  },
  {
    "q": "Who was the Moabite king who hired Balaam to curse Israel?",
    "opts": [
      "Balak",
      "Eglon",
      "Mesha",
      "Sihon"
    ],
    "answer": 0,
    "ref": "Numbers 22:4-6",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Balak son of Zippor feared Israel's numbers and hired the prophet Balaam."
  },
  {
    "q": "What was the name of Moses' mother?",
    "opts": [
      "Jochebed",
      "Miriam",
      "Zipporah",
      "Elisheba"
    ],
    "answer": 0,
    "ref": "Exodus 6:20",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Jochebed was of Levi's tribe, marrying Amram."
  },
  {
    "q": "What tool did Shamgar use to kill 600 Philistines?",
    "opts": [
      "An oxgoad",
      "A jawbone",
      "A sling",
      "A bronze sword"
    ],
    "answer": 0,
    "ref": "Judges 3:31",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Shamgar saved Israel using a simple agricultural oxgoad."
  },
  {
    "q": "Which of Saul's daughters did David marry first?",
    "opts": [
      "Michal",
      "Merab",
      "Ahinoam",
      "Abigail"
    ],
    "answer": 0,
    "ref": "1 Samuel 18:27",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Saul offered Michal to David for a hundred Philistine foreskins."
  },
  {
    "q": "On which mountain did Aaron die?",
    "opts": [
      "Mount Hor",
      "Mount Nebo",
      "Mount Sinai",
      "Mount Carmel"
    ],
    "answer": 0,
    "ref": "Numbers 20:28",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Aaron was gathered to his ancestors on top of Mount Hor."
  },
  {
    "q": "Who wrote the Book of Lamentations traditionally?",
    "opts": [
      "Jeremiah",
      "Baruch",
      "Ezekiel",
      "Daniel"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "The weeping prophet Jeremiah is traditionally credited with writing Lamentations."
  },
  {
    "q": "How many men did Moses send to spy out the land of Canaan?",
    "opts": [
      "12",
      "10",
      "2",
      "70"
    ],
    "answer": 0,
    "ref": "Numbers 13:2",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Moses sent 12 tribal leaders down to explore the land."
  },
  {
    "q": "Which city did Joshua curse after its destruction?",
    "opts": [
      "Jericho",
      "Ai",
      "Hazor",
      "Gibeon"
    ],
    "answer": 0,
    "ref": "Joshua 6:26",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Joshua cursed anyone who tried to rebuild Jericho, costing them their oldest and youngest sons."
  },
  {
    "q": "Who was Isaac's oldest son?",
    "opts": [
      "Esau",
      "Jacob",
      "Ishmael",
      "Joseph"
    ],
    "answer": 0,
    "ref": "Genesis 25",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Esau was born first as twins, preceding Jacob."
  },
  {
    "q": "What did David use to soothe Saul when troubled by a harmful spirit?",
    "opts": [
      "A harp (lyre)",
      "A flute",
      "Psalms read aloud",
      "Spices"
    ],
    "answer": 0,
    "ref": "1 Samuel 16:23",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "David played the lyre to bring physical and mental relief to Saul."
  },
  {
    "q": "Whom did Samuel designate as the first King of Israel?",
    "opts": [
      "Saul",
      "David",
      "Jonathan",
      "Abner"
    ],
    "answer": 0,
    "ref": "1 Samuel 10:1",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Samuel poured olive oil on Saul's head, anointing him prince."
  },
  {
    "q": "Which son of Jacob was the ancestor of the priestly tribe?",
    "opts": [
      "Levi",
      "Judah",
      "Joseph",
      "Reuben"
    ],
    "answer": 0,
    "ref": "Deuteronomy 10:8",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "The descendants of Levi were set apart to serve before God."
  },
  {
    "q": "What are the names of the two pillars of Solomon’s Temple?",
    "opts": [
      "Jachin and Boaz",
      "Alpha and Omega",
      "Urim and Thummim",
      "Zion and Moriah"
    ],
    "answer": 0,
    "ref": "1 Kings 7:21",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "He named the south pillar Jachin ('Establish') and the north pillar Boaz ('Strength')."
  },
  {
    "q": "How many years did the Israelites wander in the wilderness?",
    "opts": [
      "40",
      "12",
      "7",
      "50"
    ],
    "answer": 0,
    "ref": "Numbers 14:33",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Due to unbelief, Israel wandered forty years in the desert."
  },
  {
    "q": "Which king of Judah was struck with leprosy for burning temple incense?",
    "opts": [
      "Uzziah",
      "Hezekiah",
      "Josiah",
      "Rehoboam"
    ],
    "answer": 0,
    "ref": "2 Chronicles 26:16-21",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Uzziah became proud and tried to burn priestly incense; leprosy broke out on his forehead."
  },
  {
    "q": "Which king of Israel had the shortest reign of only seven days?",
    "opts": [
      "Zimri",
      "Shallum",
      "Zechariah",
      "Elah"
    ],
    "answer": 0,
    "ref": "1 Kings 16:15",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Zimri reigned seven days in Tirzah before setting the royal palace on fire."
  },
  {
    "q": "What meat did God provide to Israel in the wilderness besides manna?",
    "opts": [
      "Quail",
      "Pheasant",
      "Wild lamb",
      "Doves"
    ],
    "answer": 0,
    "ref": "Exodus 16:13",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "By evening, quail flew in and covered the camp."
  },
  {
    "q": "Who was the father of King David?",
    "opts": [
      "Jesse",
      "Saul",
      "Boaz",
      "Samuel"
    ],
    "answer": 0,
    "ref": "1 Samuel 16",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Jesse of Bethlehem was the father of eight sons, of whom David was the youngest."
  },
  {
    "q": "Which queen of Judah destroyed almost the entire royal line to seize power?",
    "opts": [
      "Athaliah",
      "Jezebel",
      "Vashti",
      "Shelomith"
    ],
    "answer": 0,
    "ref": "2 Kings 11:1",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Athaliah attempted to destroy the entire royal seed of Judah to reign herself."
  },
  {
    "q": "How many children did Job lose in his initial trials?",
    "opts": [
      "10",
      "7",
      "3",
      "12"
    ],
    "answer": 0,
    "ref": "Job 1:2, 19",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Job's seven sons and three daughters were killed when a wind demolished the house."
  },
  {
    "q": "What instruments did Gideon's 300 men carry in battle?",
    "opts": [
      "Trumpets (shofars)",
      "Flutes",
      "Tambourines",
      "Harps"
    ],
    "answer": 0,
    "ref": "Judges 7:16",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Gideon equipped each man with a shofar, empty jars, and burning torches."
  },
  {
    "q": "How many times did Naaman dip in the Jordan River to heal his leprosy?",
    "opts": [
      "7",
      "3",
      "10",
      "12"
    ],
    "answer": 0,
    "ref": "2 Kings 5:14",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Naaman obeyed Elisha's word and was healed completely on the seventh dip."
  },
  {
    "q": "Who did Saul seek to have the witch of Endor summon?",
    "opts": [
      "Samuel",
      "Moses",
      "Abraham",
      "Elijah"
    ],
    "answer": 0,
    "ref": "1 Samuel 28:11",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Saul went in disguise and asked the medium to call up Samuel for advice."
  },
  {
    "q": "Who was Moses' wife, whom he met in the land of Midian?",
    "opts": [
      "Zipporah",
      "Miriam",
      "Jochebed",
      "Leah"
    ],
    "answer": 0,
    "ref": "Exodus 2:21",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Jethro, priest of Midian, gave his daughter Zipporah to Moses."
  },
  {
    "q": "Which tribe of Israel was almost entirely destroyed in a civil war in Judges?",
    "opts": [
      "Benjamin",
      "Manasseh",
      "Dan",
      "Asher"
    ],
    "answer": 0,
    "ref": "Judges 20",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Due to the crime of Gibeah, Israel attacked Benjamin, leaving only 600 men alive."
  },
  {
    "q": "What was the name of Ruth's first husband?",
    "opts": [
      "Mahlon",
      "Chilion",
      "Elimelech",
      "Boaz"
    ],
    "answer": 0,
    "ref": "Ruth 4:10",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "Ruth had originally married Mahlon, one of Naomi's sons, who died in Moab."
  },
  {
    "q": "Which city did Jonah flee to instead of Nineveh?",
    "opts": [
      "Tarshish",
      "Joppa",
      "Babylon",
      "Tyre"
    ],
    "answer": 0,
    "ref": "Jonah 1:3",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Jonah boarded a ship traveling to Tarshish to flee from the Lord."
  },
  {
    "q": "What did God send to destroy the vine that shaded Jonah?",
    "opts": [
      "A worm",
      "A locust swarm",
      "An intense heatwave",
      "A severe wind"
    ],
    "answer": 0,
    "ref": "Jonah 4:7",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "At dawn, God appointed a worm that chewed the vine, causing it to wither."
  },
  {
    "q": "What did Jacob wrestle with until daybreak at Peniel?",
    "opts": [
      "An angel of God",
      "Esau",
      "A wild wolf",
      "A mysterious thief"
    ],
    "answer": 0,
    "ref": "Genesis 32:24",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Jacob wrestled with a mysterious man, recognized as God's angelic presence."
  },
  {
    "q": "Which prophet had the vision of the valley of dry bones?",
    "opts": [
      "Ezekiel",
      "Isaiah",
      "Jeremiah",
      "Malachi"
    ],
    "answer": 0,
    "ref": "Ezekiel 37",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Ezekiel saw dry skeleton pieces assembly and coming to life."
  },
  {
    "q": "In the flood narrative, how long did the waters prevail on the earth?",
    "opts": [
      "150 days",
      "40 days",
      "7 days",
      "30 days"
    ],
    "answer": 0,
    "ref": "Genesis 7:24",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "The floor waters overwhelmed the landscape for 150 days before receding."
  },
  {
    "q": "Who was Solomon’s son who succeeded him and caused the kingdom split?",
    "opts": [
      "Rehoboam",
      "Jeroboam",
      "Adonijah",
      "Absalom"
    ],
    "answer": 0,
    "ref": "1 Kings 11:43",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Rehoboam's harsh policies provoked the northern tribes to rebel."
  },
  {
    "q": "Who was the King of Babylon when Jerusalem fell in 586 BC?",
    "opts": [
      "Nebuchadnezzar",
      "Belshazzar",
      "Evil-Merodach",
      "Cyrus"
    ],
    "answer": 0,
    "ref": "2 Kings 25",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Nebuchadnezzar's forces breached Jerusalem and destroyed the Temple."
  },
  {
    "q": "Who was Jacob's twelfth and youngest son?",
    "opts": [
      "Benjamin",
      "Joseph",
      "Judah",
      "Dan"
    ],
    "answer": 0,
    "ref": "Genesis 35:18",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Rachel died giving birth to Benjamin in the region of Bethlehem."
  },
  {
    "q": "What fruit did the Hebrew spies carry back on a pole?",
    "opts": [
      "A single cluster of grapes",
      "Vast bags of wheat",
      "Gigantic sweet figs",
      "Pomegranates in honey"
    ],
    "answer": 0,
    "ref": "Numbers 13:23",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "The grape cluster cut at Eshkol was so heavy it required two men to carry."
  },
  {
    "q": "How many decks did God tell Noah to build inside the ark?",
    "opts": [
      "Three",
      "Two",
      "Four",
      "Five"
    ],
    "answer": 0,
    "ref": "Genesis 6:16",
    "cat": "Old Testament",
    "diff": "Hard",
    "explain": "God designed Noah's ark with lower, second, and third levels."
  },
  {
    "q": "What did Abram change his name to?",
    "opts": [
      "Abraham",
      "Israel",
      "Isaac",
      "Abimelech"
    ],
    "answer": 0,
    "ref": "Genesis 17:5",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Abram was changed to Abraham, meaning 'Father of a Multitude'."
  },
  {
    "q": "On what day of creation did God create marine life and birds?",
    "opts": [
      "Fifth",
      "Fourth",
      "Sixth",
      "Third"
    ],
    "answer": 0,
    "ref": "Genesis 1:21-23",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "God designed sea beasts and birds on the fifth day."
  },
  {
    "q": "Who succeeded Moses and led Israel across the Jordan?",
    "opts": [
      "Joshua",
      "Caleb",
      "Aaron",
      "Eleazar"
    ],
    "answer": 0,
    "ref": "Joshua 1:1-2",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Joshua succeeded Moses as national leader of Israel."
  },
  {
    "q": "In what city was Jesus raised as a child?",
    "opts": [
      "Nazareth",
      "Jerusalem",
      "Bethlehem",
      "Capernaum"
    ],
    "answer": 0,
    "ref": "Luke 2:39-40",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "After returning from Egypt, His parents settled in Nazareth."
  },
  {
    "q": "What was the profession of Simon Peter and Andrew before meeting Jesus?",
    "opts": [
      "Fishermen",
      "Tax collectors",
      "Tentmakers",
      "Carpenters"
    ],
    "answer": 0,
    "ref": "Matthew 4:18",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "They were casting nets into the sea when Jesus called them."
  },
  {
    "q": "Which of the four gospels contains the phrase 'In the beginning was the Word'?",
    "opts": [
      "John",
      "Matthew",
      "Mark",
      "Luke"
    ],
    "answer": 0,
    "ref": "John 1:1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John begins his gospel with a deep theological prologue on the Word."
  },
  {
    "q": "Which city did Jesus enter on a donkey during Palm Sunday?",
    "opts": [
      "Jerusalem",
      "Bethany",
      "Jericho",
      "Samaria"
    ],
    "answer": 0,
    "ref": "Matthew 21",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus rode a colt into Jerusalem while crowds shouted 'Hosanna!'."
  },
  {
    "q": "How many people did Jesus feed with five loaves and two fish?",
    "opts": [
      "5,000 men",
      "4,000 men",
      "3,000 men",
      "10,000 men"
    ],
    "answer": 0,
    "ref": "Matthew 14:21",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus fed 5,000 men besides women and children."
  },
  {
    "q": "Who was the high priest who presided over the trial of Jesus?",
    "opts": [
      "Caiaphas",
      "Annas",
      "Ananias",
      "Gamaliel"
    ],
    "answer": 0,
    "ref": "Matthew 26:57",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Caiaphas served as high priest during Jesus' trial."
  },
  {
    "q": "What was the official inscription written on the cross above Jesus?",
    "opts": [
      "Jesus of Nazareth, the King of the Jews",
      "The Messiah of Israel",
      "This is Jesus, Son of God",
      "The King who reigns"
    ],
    "answer": 0,
    "ref": "John 19:19",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Pilate wrote 'Jesus of Nazareth, the King of the Jews' in multiple languages."
  },
  {
    "q": "Who was the first person to see the resurrected Jesus?",
    "opts": [
      "Mary Magdalene",
      "Simon Peter",
      "John",
      "Mother Mary"
    ],
    "answer": 0,
    "ref": "John 20:14",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Mary Magdalene met Jesus near the open garden tomb."
  },
  {
    "q": "For how many days did the resurrected Jesus appear before ascending?",
    "opts": [
      "40 days",
      "50 days",
      "30 days",
      "7 days"
    ],
    "answer": 0,
    "ref": "Acts 1:3",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus presented Himself alive with many convincing proofs over forty days."
  },
  {
    "q": "Who was the first apostle to be martyred in the book of Acts?",
    "opts": [
      "James the brother of John",
      "Stephen",
      "Peter",
      "Paul"
    ],
    "answer": 0,
    "ref": "Acts 12:2",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Herod killed James, the brother of John, with the sword."
  },
  {
    "q": "Which city did Paul write two letters to, rebuking internal divisions?",
    "opts": [
      "Corinth",
      "Rome",
      "Ephesus",
      "Colossae"
    ],
    "answer": 0,
    "ref": "1 Corinthians 1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Paul addressed the church of Corinth because of their factions and conflicts."
  },
  {
    "q": "For how long had the beggar healed at the Beautiful Gate been crippled?",
    "opts": [
      "From birth",
      "12 years",
      "38 years",
      "Since childhood"
    ],
    "answer": 0,
    "ref": "Acts 3:2",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "The man healed by Peter and John was lame from his mother's womb."
  },
  {
    "q": "Which New Testament book is written about a slave named Onesimus?",
    "opts": [
      "Philemon",
      "Titus",
      "Colossians",
      "Ephesians"
    ],
    "answer": 0,
    "ref": "Philemon 1",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Paul wrote Philemon to welcome Onesimus back as a brother."
  },
  {
    "q": "Which church did Jesus describe as lukewarm in Revelation?",
    "opts": [
      "Laodicea",
      "Sardis",
      "Ephesus",
      "Philadelphia"
    ],
    "answer": 0,
    "ref": "Revelation 3:14-16",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Laodicea was neither hot nor cold, so Jesus stated He would spit them out."
  },
  {
    "q": "What armor of God piece represents salvation in Ephesians?",
    "opts": [
      "The helmet of salvation",
      "The breastplate of righteousness",
      "The shield of faith",
      "The belt of truth"
    ],
    "answer": 0,
    "ref": "Ephesians 6:17",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Paul instructs believers to take the Helmet of Salvation."
  },
  {
    "q": "Who was Timothy's grandmother mentioned by Paul?",
    "opts": [
      "Lois",
      "Eunice",
      "Priscilla",
      "Lydia"
    ],
    "answer": 0,
    "ref": "2 Timothy 1:5",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Paul mentions the sincere faith that lived in grandmother Lois first."
  },
  {
    "q": "Who wrote the Book of Acts?",
    "opts": [
      "Luke",
      "Paul",
      "Peter",
      "John"
    ],
    "answer": 0,
    "ref": "Acts 1:1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Luke the physician wrote Acts as a sequel to his gospel."
  },
  {
    "q": "To what location did Jesus go to pray before His arrest?",
    "opts": [
      "Gethsemane",
      "Golgotha",
      "Capernaum",
      "The Wilderness"
    ],
    "answer": 0,
    "ref": "Matthew 26:36",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus brought His disciples to a garden called Gethsemane."
  },
  {
    "q": "What was the name of the synagogue official whose daughter Jesus raised?",
    "opts": [
      "Jairus",
      "Zacchaeus",
      "Cornelius",
      "Nicodemus"
    ],
    "answer": 0,
    "ref": "Mark 5:22",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jairus fell at Jesus' feet pleading for his dying daughter."
  },
  {
    "q": "Where was Paul's ship heading before it was wrecked near Malta?",
    "opts": [
      "Rome",
      "Alexandria",
      "Jerusalem",
      "Athens"
    ],
    "answer": 0,
    "ref": "Acts 27",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Paul was being transported as a prisoner to stand trial in Rome."
  },
  {
    "q": "Who was the silversmith in Ephesus who started a riot against Paul?",
    "opts": [
      "Demetrius",
      "Alexander",
      "Gaius",
      "Aristarchus"
    ],
    "answer": 0,
    "ref": "Acts 19:24",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Demetrius feared Paul's message would damage the trade of Artemis shrines."
  },
  {
    "q": "Which Gospel moves rapidly and emphasizes Jesus' actions?",
    "opts": [
      "Mark",
      "Matthew",
      "Luke",
      "John"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Mark's gospel uses 'immediately' frequently and focuses on Jesus' miracles."
  },
  {
    "q": "How many baskets of leftovers were collected after Jesus fed the 5,000?",
    "opts": [
      "12",
      "7",
      "5",
      "3"
    ],
    "answer": 0,
    "ref": "Matthew 14:20",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "The disciples picked up twelve full baskets of broken bread."
  },
  {
    "q": "Which sister sat at Jesus' feet listening while the other prepared dinner?",
    "opts": [
      "Mary",
      "Martha",
      "Lydia",
      "Salome"
    ],
    "answer": 0,
    "ref": "Luke 10:39",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Mary sat listening while her sister Martha was distracted with serving."
  },
  {
    "q": "What name did the demon-possessed man use when answering Jesus?",
    "opts": [
      "Legion",
      "Beelzebub",
      "Abaddon",
      "Mammon"
    ],
    "answer": 0,
    "ref": "Mark 5:9",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "He said, 'My name is Legion, for we are many'."
  },
  {
    "q": "Which king of Judea sought to kill the baby Jesus?",
    "opts": [
      "Herod the Great",
      "Herod Antipas",
      "Herod Agrippa I",
      "Archelaus"
    ],
    "answer": 0,
    "ref": "Matthew 2",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Herod the Great ordered the execution of infants in Bethlehem."
  },
  {
    "q": "On what type of feature was Jesus transfigured before Peter, James, and John?",
    "opts": [
      "A high mountain",
      "A deep valley",
      "Beside the Jordan",
      "On the Temple Pinnacle"
    ],
    "answer": 0,
    "ref": "Matthew 17:1",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus led them up on a high mountain where His face shone like the sun."
  },
  {
    "q": "What represents the 'sword of the Spirit' in Ephesians?",
    "opts": [
      "The word of God",
      "The faith of saints",
      "The prayer of intercession",
      "Sincere love"
    ],
    "answer": 0,
    "ref": "Ephesians 6:17",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Paul explicitly defines the sword of the Spirit as the word of God."
  },
  {
    "q": "Which Roman province had churches Paul criticized for turning from grace?",
    "opts": [
      "Galatia",
      "Rome",
      "Macedonia",
      "Achaia"
    ],
    "answer": 0,
    "ref": "Galatians 1:1-2",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Paul wrote to the Galatians to retrieve them from legalism."
  },
  {
    "q": "Who did Peter raise from the dead in Joppa?",
    "opts": [
      "Tabitha (Dorcas)",
      "Lydia",
      "Priscilla",
      "Rhoda"
    ],
    "answer": 0,
    "ref": "Acts 9:36-40",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Peter prayed and said, 'Tabitha, arise,' and she opened her eyes."
  },
  {
    "q": "At what pool did Jesus heal a man paralyzed for 38 years?",
    "opts": [
      "Bethesda",
      "Siloam",
      "Hebron",
      "Jordan"
    ],
    "answer": 0,
    "ref": "John 5:2",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus healed him on the Sabbath at the pool of Bethesda."
  },
  {
    "q": "What prophetic sign did Jesus give when asked for a proof by the Pharisees?",
    "opts": [
      "The sign of Jonah",
      "Fire from heaven",
      "Turning stones to bread",
      "The parting of Jordan"
    ],
    "answer": 0,
    "ref": "Matthew 12:39",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus said only the sign of the prophet Jonah would be given."
  },
  {
    "q": "Who was the Roman emperor when Jesus was born?",
    "opts": [
      "Augustus Caesar",
      "Tiberius Caesar",
      "Nero",
      "Claudius"
    ],
    "answer": 0,
    "ref": "Luke 2:1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Augustus decreed a census that brought Joseph and Mary to Bethlehem."
  },
  {
    "q": "Who was the Roman emperor when Jesus was crucified?",
    "opts": [
      "Tiberius",
      "Augustus",
      "Nero",
      "Caligula"
    ],
    "answer": 0,
    "ref": "Luke 3:1",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Tiberius Caesar ruled during Jesus' active ministry and death."
  },
  {
    "q": "How many gates are on the New Jerusalem in Revelation?",
    "opts": [
      "12",
      "10",
      "4",
      "7"
    ],
    "answer": 0,
    "ref": "Revelation 21:12",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "The city has twelve gates with the names of the twelve tribes of Israel."
  },
  {
    "q": "What is the primary spiritual theme of Hebrews Chapter 11?",
    "opts": [
      "Faith",
      "Love",
      "Hope",
      "Priesthood"
    ],
    "answer": 0,
    "ref": "Hebrews 11",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Hebrews 11 is known as the 'Hall of Faith' compiling historic saints."
  },
  {
    "q": "In which pool did Jesus tell the blind man to wash to recover his sight?",
    "opts": [
      "Siloam",
      "Bethesda",
      "Jordan",
      "Gihon"
    ],
    "answer": 0,
    "ref": "John 9:7",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Jesus spat on the dirt, made mud, applied it, and sent him to Siloam."
  },
  {
    "q": "Which apostle refused to believe the resurrection until he saw the wounds?",
    "opts": [
      "Thomas",
      "Peter",
      "John",
      "Andrew"
    ],
    "answer": 0,
    "ref": "John 20:25",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Thomas stated he would not believe unless he saw Jesus' hands."
  },
  {
    "q": "What did Jesus declare as the first and greatest commandment?",
    "opts": [
      "Love God with all your heart",
      "Love your neighbor as yourself",
      "Honor your father and mother",
      "Keep the Sabbath holy"
    ],
    "answer": 0,
    "ref": "Matthew 22:37-38",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus named loving the Lord with whole heart, soul, and mind as greatest."
  },
  {
    "q": "How many times did Paul pray to have his thorn in the flesh removed?",
    "opts": [
      "Three times",
      "Once",
      "Seven times",
      "Never"
    ],
    "answer": 0,
    "ref": "2 Corinthians 12:8",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "Three times Paul pleaded with God, but was told 'My grace is sufficient'."
  },
  {
    "q": "What is the literal translation of 'Golgotha'?",
    "opts": [
      "Place of the Skull",
      "House of Pain",
      "Mount of Olives",
      "Hill of Death"
    ],
    "answer": 0,
    "ref": "John 19:17",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Golgotha in Aramaic translates literally to Place of the Skull."
  },
  {
    "q": "How many years did Paul spend in Arabia following his conversion?",
    "opts": [
      "3 years",
      "1 year",
      "7 years",
      "40 days"
    ],
    "answer": 0,
    "ref": "Galatians 1:17-18",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Paul spent three years in Arabia before visiting Peter in Jerusalem."
  },
  {
    "q": "Who was the tanner with whom Peter stayed in Joppa?",
    "opts": [
      "Simon",
      "Ananias",
      "Cornelius",
      "Jason"
    ],
    "answer": 0,
    "ref": "Acts 9:43",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Peter resided for many days in Joppa with Simon, a professional tanner."
  },
  {
    "q": "Which companion deserted Paul because he 'loved this present world'?",
    "opts": [
      "Demas",
      "Luke",
      "Titus",
      "Crescens"
    ],
    "answer": 0,
    "ref": "2 Timothy 4:10",
    "cat": "New Testament",
    "diff": "Hard",
    "explain": "Paul writes with sorrow that Demas has deserted him for Thessalonica."
  },
  {
    "q": "What does the name 'Barnabas' mean literally?",
    "opts": [
      "Son of Encouragement",
      "Man of Peace",
      "Teacher of Truth",
      "Leader of Zeal"
    ],
    "answer": 0,
    "ref": "Acts 4:36",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "The apostles called him Barnabas, meaning Son of Encouragement."
  },
  {
    "q": "Which member of Peter's family was healed of a fever by Jesus?",
    "opts": [
      "His mother-in-law",
      "His wife",
      "His daughter",
      "His father"
    ],
    "answer": 0,
    "ref": "Luke 4:38-39",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus stood over Peter's mother-in-law, rebuked the fever, and she arose."
  },
  {
    "q": "How many elders are seated around the throne of God in Revelation?",
    "opts": [
      "24",
      "12",
      "7",
      "144"
    ],
    "answer": 0,
    "ref": "Revelation 4:4",
    "cat": "New Testament",
    "diff": "Medium",
    "explain": "John saw twenty-four thrones occupied by twenty-four elders in white."
  },
  {
    "q": "What did John the Baptist wear as clothing?",
    "opts": [
      "Camel's hair and leather belt",
      "Linen robe",
      "Woolen cloak",
      "Goatskin tunic"
    ],
    "answer": 0,
    "ref": "Matthew 3:4",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John wore garments woven from coarse camel's hair with a leather belt."
  },
  {
    "q": "What form did the Holy Spirit take during Jesus' baptism?",
    "opts": [
      "A dove",
      "Tongues of fire",
      "A wind",
      "A shining cloud"
    ],
    "answer": 0,
    "ref": "Matthew 3:16",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John saw God's Spirit descending physical-like as a dove on Jesus."
  },
  {
    "q": "Which town was the home of Mary, Martha, and Lazarus?",
    "opts": [
      "Bethany",
      "Nazareth",
      "Bethlehem",
      "Jerusalem"
    ],
    "answer": 0,
    "ref": "John 11:1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Bethany was a village located near the eastern slopes of the Mount of Olives."
  },
  {
    "q": "Which Old Testament book is placed directly after Joshua?",
    "opts": [
      "Judges",
      "Ruth",
      "1 Samuel",
      "Deuteronomy"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Judges directly follows Joshua, picking up after Joshua's death."
  },
  {
    "q": "Which book is placed directly before the New Testament?",
    "opts": [
      "Malachi",
      "Zechariah",
      "Haggai",
      "Joel"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Malachi is the last book of the Old Testament canon in Protestant Bibles."
  },
  {
    "q": "Which book tells the detailed story of Belshazzar's palace banquet wall-writing?",
    "opts": [
      "Daniel",
      "Ezekiel",
      "Isaiah",
      "Jeremiah"
    ],
    "answer": 0,
    "ref": "Daniel 5",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Daniel chapter 5 records the mysterious hand writing on the plaster wall."
  },
  {
    "q": "Which book consists of five poetic laments over the fall of Jerusalem?",
    "opts": [
      "Lamentations",
      "Jeremiah",
      "Habakkuk",
      "Micah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Lamentations contains five acrostic poems mourning Jerusalem's ruins."
  },
  {
    "q": "To whom is the short letter of 2 John addressed?",
    "opts": [
      "The elect lady and her children",
      "Gaius",
      "The church of Ephesus",
      "Timothy"
    ],
    "answer": 0,
    "ref": "2 John 1:1",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "John addresses 2 John to 'the chosen lady and her children'."
  },
  {
    "q": "To whom is the personal letter of 3 John addressed?",
    "opts": [
      "Gaius",
      "Philemon",
      "Timothy",
      "The elect lady"
    ],
    "answer": 0,
    "ref": "3 John 1:1",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "John addresses 3 John to his beloved friend Gaius."
  },
  {
    "q": "Which prophet was told to marry a faithless woman named Gomer?",
    "opts": [
      "Hosea",
      "Amos",
      "Joel",
      "Micah"
    ],
    "answer": 0,
    "ref": "Hosea 1",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Hosea's marriage to Gomer represented God's persistent covenant with faithless Israel."
  },
  {
    "q": "Which short single-chapter book is a message of judgment on Edom?",
    "opts": [
      "Obadiah",
      "Nahum",
      "Zephaniah",
      "Haggai"
    ],
    "answer": 0,
    "ref": "Obadiah 1",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Obadiah is a single-chapter prophecy denouncing Edom for helping invaders."
  },
  {
    "q": "Which book contains the account of a Moabite widow in Jesse's lineage?",
    "opts": [
      "Ruth",
      "Esther",
      "Judges",
      "Song of Solomon"
    ],
    "answer": 0,
    "ref": "Ruth 1",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Ruth chronicles her faithfulness, leading she and Boaz to bear Obed."
  },
  {
    "q": "Which book is a collection of poetic Solomon-connected love songs?",
    "opts": [
      "Song of Solomon",
      "Ecclesiastes",
      "Proverbs",
      "Psalms"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Song of Solomon is a rich biblical text celebrating marriage."
  },
  {
    "q": "Which book immediately precedes Esther in standard layouts?",
    "opts": [
      "Nehemiah",
      "Ezra",
      "Job",
      "Psalms"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "In standard layouts, Nehemiah directly precedes Esther."
  },
  {
    "q": "Which Gospel emphasizes Jesus' lineage back to Abraham and David?",
    "opts": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Matthew is designed with a Jewish audience in mind, starting with Jesus' lineage."
  },
  {
    "q": "Which gospel is universally credited to the disciple whom Jesus loved?",
    "opts": [
      "John",
      "Matthew",
      "Mark",
      "Luke"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "John's Gospel contains distinct style patterns highlighting 'the beloved disciple'."
  },
  {
    "q": "Which book is placed directly after Deuteronomy?",
    "opts": [
      "Joshua",
      "Judges",
      "Ruth",
      "Leviticus"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Joshua follows Deuteronomy, continuing the conquest history."
  },
  {
    "q": "Which book contains the Sermon on the Mount?",
    "opts": [
      "Matthew",
      "Mark",
      "Luke",
      "John"
    ],
    "answer": 0,
    "ref": "Matthew 5-7",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Matthew 5-7 houses the Sermon on the Mount."
  },
  {
    "q": "In which book do we read about a bronze serpent raised on a pole?",
    "opts": [
      "Numbers",
      "Exodus",
      "Leviticus",
      "Deuteronomy"
    ],
    "answer": 0,
    "ref": "Numbers 21",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Numbers chapter 21 details the fiery serpents and the bronze snake."
  },
  {
    "q": "Which prophet was a herdman of Tekoa and gatherer of sycamore fruit?",
    "opts": [
      "Amos",
      "Hosea",
      "Joel",
      "Obadiah"
    ],
    "answer": 0,
    "ref": "Amos 1:1, 7:14",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Amos declared he was an agricultural keeper, not a career prophet."
  },
  {
    "q": "Which book contains the shortest psalm in the Bible?",
    "opts": [
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "Lamentations"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Psalms holds the shortest chapter (Psalm 117)."
  },
  {
    "q": "Which book repeats the phrase 'Vanity of vanities, all is vanity'?",
    "opts": [
      "Ecclesiastes",
      "Proverbs",
      "Job",
      "Song of Solomon"
    ],
    "answer": 0,
    "ref": "Ecclesiastes 1:2",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Ecclesiastes notes the transience of life under the sun."
  },
  {
    "q": "Which book concludes with a chapter praising the virtuous woman?",
    "opts": [
      "Proverbs",
      "Ecclesiastes",
      "Song of Solomon",
      "Ruth"
    ],
    "answer": 0,
    "ref": "Proverbs 31",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Proverbs 31 contains the famous acrostic of the wife of noble character."
  },
  {
    "q": "Which Pauline epistle contains a detailed defense against critics of his apostleship?",
    "opts": [
      "2 Corinthians",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Paul expounds on his hardships and calling deeply in 2 Corinthians."
  },
  {
    "q": "Which book opens with letters to seven churches in Asia Minor?",
    "opts": [
      "Revelation",
      "Acts",
      "Ephesians",
      "Colossians"
    ],
    "answer": 0,
    "ref": "Revelation 1-3",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Revelation contains seven individual letters authored by Jesus."
  },
  {
    "q": "Which book is placed between Ruth and 2 Samuel?",
    "opts": [
      "1 Samuel",
      "Judges",
      "1 Kings",
      "1 Chronicles"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "1 Samuel sits between Ruth and 2 Samuel in historical sequence."
  },
  {
    "q": "Which Old Testament book contains the vision of four beasts from the sea?",
    "opts": [
      "Daniel",
      "Ezekiel",
      "Isaiah",
      "Zechariah"
    ],
    "answer": 0,
    "ref": "Daniel 7",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Daniel chapter 7 details his symbolic vision of the beasts."
  },
  {
    "q": "Which historical book describes the wicked deeds of King Ahab?",
    "opts": [
      "1 Kings",
      "Judges",
      "2 Kings",
      "2 Samuel"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "The rise and sins of Ahab are chronicled in 1 Kings."
  },
  {
    "q": "Which book details the return is exiles to rebuild the secondary Temple?",
    "opts": [
      "Ezra",
      "Nehemiah",
      "Esther",
      "Daniel"
    ],
    "answer": 0,
    "ref": "Ezra 1-3",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Ezra details the architectural and altar restoration of the exiles."
  },
  {
    "q": "Which book describes the early missionary work of Paul across Europe?",
    "opts": [
      "Acts",
      "Romans",
      "Galatians",
      "Ephesians"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Acts of the Apostles outlines the early church's global work."
  },
  {
    "q": "Which book has the most chapters in standard Bible editions?",
    "opts": [
      "Psalms",
      "Genesis",
      "Isaiah",
      "Jeremiah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Psalms has exactly 150 unique chapter-like divisions."
  },
  {
    "q": "Which four-chapter book predicts the rebuilding of the second Temple?",
    "opts": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Jonah"
    ],
    "answer": 0,
    "ref": "Haggai 1",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Haggai urges Zerubbabel to complete the work of the Temple."
  },
  {
    "q": "Which minor prophet prophesied that the Messiah would be born in Bethlehem?",
    "opts": [
      "Micah",
      "Hosea",
      "Amos",
      "Zechariah"
    ],
    "answer": 0,
    "ref": "Micah 5:2",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Micah predicts the ruler of Israel coming from Bethlehem Ephrathah."
  },
  {
    "q": "Which Pauline epistle focus heavily on the 'unity of the body' in Ephesus?",
    "opts": [
      "Ephesians",
      "Galatians",
      "Colossians",
      "Philippians"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Ephesians details the armor of God and unity in Christ."
  },
  {
    "q": "Which epistle contains the famous passage describing Christ 'emptying' Himself?",
    "opts": [
      "Philippians",
      "Colossians",
      "Ephesians",
      "Galatians"
    ],
    "answer": 0,
    "ref": "Philippians 2:5-7",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Philippians 2 contains the famous 'Kenosis' Christ hymn."
  },
  {
    "q": "Which book focuses heavily on Jesus' superiority over Levitical laws?",
    "opts": [
      "Hebrews",
      "Romans",
      "Galatians",
      "James"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Hebrews explains Jesus as a better high priest than Aaron's order."
  },
  {
    "q": "Which minor prophet begins with 'In the second year of Darius the king'?",
    "opts": [
      "Haggai",
      "Zechariah",
      "Malachi",
      "Joel"
    ],
    "answer": 0,
    "ref": "Haggai 1:1",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Both Haggai and Zechariah prophecy in Darius' second year, Haggai starts first."
  },
  {
    "q": "Which gospel is addressed to 'Most Excellent Theophilus'?",
    "opts": [
      "Luke",
      "Matthew",
      "Mark",
      "John"
    ],
    "answer": 0,
    "ref": "Luke 1:3",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Both Luke and Acts are penned with dedications into Theophilus."
  },
  {
    "q": "Which minor prophet wrote about beating swords into plowshares?",
    "opts": [
      "Micah",
      "Hosea",
      "Amos",
      "Joel"
    ],
    "answer": 0,
    "ref": "Micah 4:3",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Micah and Isaiah both feature the plowshare prophecy."
  },
  {
    "q": "Which minor prophet contains a vision of a giant flying scroll?",
    "opts": [
      "Zechariah",
      "Haggai",
      "Joel",
      "Amos"
    ],
    "answer": 0,
    "ref": "Zechariah 5:1-2",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Zechariah sees a flying scroll containing curses for lawbreakers."
  },
  {
    "q": "Where in Psalms is the 176-verse poem praising God's Word?",
    "opts": [
      "Psalm 119",
      "Psalm 23",
      "Psalm 150",
      "Psalm 100"
    ],
    "answer": 0,
    "ref": "Psalm 119",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Psalm 119 consists of 22 strophes focusing on scripture."
  },
  {
    "q": "Which book is placed first among the twelve Minor Prophets?",
    "opts": [
      "Hosea",
      "Joel",
      "Amos",
      "Obadiah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Hosea heads the Book of the Twelve minor prophets in standard Hebrew/Christian layouts."
  },
  {
    "q": "Which book describes a locust plague representing the 'Day of the Lord'?",
    "opts": [
      "Joel",
      "Amos",
      "Obadiah",
      "Jonah"
    ],
    "answer": 0,
    "ref": "Joel 1",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Joel opens with devastating locusts laying waste to Israel."
  },
  {
    "q": "Which book is named after the priest who returned to restore devotion?",
    "opts": [
      "Ezra",
      "Nehemiah",
      "Haggai",
      "Malachi"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Ezra returned to focus Israel's hearts on Torah study."
  },
  {
    "q": "Which book contains a dialogue regarding why God uses evil nations?",
    "opts": [
      "Habakkuk",
      "Zephaniah",
      "Haggai",
      "Malachi"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Habakkuk asks why God would use Babylon to judge Israel."
  },
  {
    "q": "Which epistle tells believers to 'count it all joy' during trials?",
    "opts": [
      "James",
      "1 Peter",
      "2 Peter",
      "Jude"
    ],
    "answer": 0,
    "ref": "James 1:2",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "James begins with instructions on growing through trials."
  },
  {
    "q": "Which book details the inheritance territory allocation of the 12 tribes?",
    "opts": [
      "Joshua",
      "Numbers",
      "Deuteronomy",
      "Judges"
    ],
    "answer": 0,
    "ref": "Joshua 13-21",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Joshua details the geographic allotment of the Promised Land."
  },
  {
    "q": "Which book describes the dedication of the temple built by Solomon?",
    "opts": [
      "1 Kings",
      "1 Chronicles",
      "2 Chronicles",
      "Exodus"
    ],
    "answer": 0,
    "ref": "1 Kings 8",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Solomon offers a lengthy dedicatory prayer in 1 Kings Chapter 8."
  },
  {
    "q": "Which prophet was told to buy and hide a loincloth in the rock?",
    "opts": [
      "Jeremiah",
      "Ezekiel",
      "Isaiah",
      "Daniel"
    ],
    "answer": 0,
    "ref": "Jeremiah 13:1-4",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Jeremiah hid a jar of loincloth by the Euphrates to show Israel's rot."
  },
  {
    "q": "Which minor prophet wrote a short book of judgment on Nineveh after Jonah?",
    "opts": [
      "Nahum",
      "Zephaniah",
      "Habakkuk",
      "Malachi"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Nahum details the final catastrophic fall of Assyria's capital Nineveh."
  },
  {
    "q": "Which book is placed between Joel and Obadiah?",
    "opts": [
      "Amos",
      "Hosea",
      "Jonah",
      "Micah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "Bible Books",
    "diff": "Medium",
    "explain": "Amos is situated directly between Joel and Obadiah."
  },
  {
    "q": "Which epistle warns against false teachers, quoting apocrypha?",
    "opts": [
      "Jude",
      "1 Peter",
      "2 Peter",
      "2 John"
    ],
    "answer": 0,
    "ref": "Jude 9, 14",
    "cat": "Bible Books",
    "diff": "Hard",
    "explain": "Jude cites references to Enoch and the dispute over Moses' body."
  },
  {
    "q": "Which book contains a vision of a new heaven and new earth at the end?",
    "opts": [
      "Revelation",
      "Acts",
      "Romans",
      "1 Thessalonians"
    ],
    "answer": 0,
    "ref": "Revelation 21",
    "cat": "Bible Books",
    "diff": "Easy",
    "explain": "Revelation chapters 21 and 22 detail the ultimate restored creation."
  },
  {
    "q": "Who was the eldest son of Jacob?",
    "opts": [
      "Reuben",
      "Simeon",
      "Judah",
      "Joseph"
    ],
    "answer": 0,
    "ref": "Genesis 29:32",
    "cat": "People",
    "diff": "Easy",
    "explain": "Leah bore Reuben as Jacob's firstborn son."
  },
  {
    "q": "Who was Isaac's father-in-law?",
    "opts": [
      "Bethuel",
      "Laban",
      "Abimelech",
      "Terah"
    ],
    "answer": 0,
    "ref": "Genesis 24:15",
    "cat": "People",
    "diff": "Hard",
    "explain": "Bethuel fathered Rebekah, who was Isaac's wife."
  },
  {
    "q": "Who was Moses' Midianite father-in-law?",
    "opts": [
      "Jethro (Reuel)",
      "Hobab",
      "Balaam",
      "Balak"
    ],
    "answer": 0,
    "ref": "Exodus 3:1",
    "cat": "People",
    "diff": "Medium",
    "explain": "Jethro, priest of Midian, was Moses' father-in-law."
  },
  {
    "q": "Which beast did Benaiah slay inside a pit on a snowy day?",
    "opts": [
      "A lion",
      "A bear",
      "A giant leopard",
      "A wild boar"
    ],
    "answer": 0,
    "ref": "1 Chronicles 11:22",
    "cat": "People",
    "diff": "Hard",
    "explain": "Benaiah went down and killed a lion in a pit on a snowy day."
  },
  {
    "q": "Who was the mother of Solomon?",
    "opts": [
      "Bathsheba",
      "Abigail",
      "Michal",
      "Maakah"
    ],
    "answer": 0,
    "ref": "2 Samuel 12:24",
    "cat": "People",
    "diff": "Easy",
    "explain": "David comforted his wife Bathsheba, and she fathered Solomon."
  },
  {
    "q": "Which king of Tyre supplied timber to Solomon's Temple construction?",
    "opts": [
      "Hiram",
      "Abimelech",
      "Sennacherib",
      "Cyrus"
    ],
    "answer": 0,
    "ref": "1 Kings 5:1",
    "cat": "People",
    "diff": "Medium",
    "explain": "King Hiram of Tyre loved David and supplied cedar and pine to Solomon."
  },
  {
    "q": "Who tested King Solomon with riddles and hard questions?",
    "opts": [
      "The Queen of Sheba",
      "The Pharaoh of Egypt",
      "The King of Tyre",
      "The Midianites"
    ],
    "answer": 0,
    "ref": "1 Kings 10:1",
    "cat": "People",
    "diff": "Easy",
    "explain": "The Queen of Sheba visited Solomon after hearing of his divine wisdom."
  },
  {
    "q": "Who was the king of Judah whose life was extended by fifteen years?",
    "opts": [
      "Hezekiah",
      "Uzziah",
      "Josiah",
      "Manasseh"
    ],
    "answer": 0,
    "ref": "2 Kings 20",
    "cat": "People",
    "diff": "Medium",
    "explain": "Hezekiah prayed, wept, and God granted him an additional 15 years."
  },
  {
    "q": "Which false prophet wore iron horns before Ahab?",
    "opts": [
      "Zedekiah son of Kenaanah",
      "Micaiah",
      "Hananiah",
      "Balaam"
    ],
    "answer": 0,
    "ref": "1 Kings 22:11",
    "cat": "People",
    "diff": "Hard",
    "explain": "Zedekiah made iron horns representing victory over Syria."
  },
  {
    "q": "Which relative of Barnabas compiled a New Testament Gospel?",
    "opts": [
      "Mark",
      "Luke",
      "Matthew",
      "John"
    ],
    "answer": 0,
    "ref": "Colossians 4:10",
    "cat": "People",
    "diff": "Hard",
    "explain": "Mark, the cousin of Barnabas, was the writer of Mark's Gospel."
  },
  {
    "q": "What runaway slave did Paul convert and send home to Colossae?",
    "opts": [
      "Onesimus",
      "Tychicus",
      "Epaphras",
      "Demas"
    ],
    "answer": 0,
    "ref": "Philemon 1",
    "cat": "People",
    "diff": "Medium",
    "explain": "Paul sends Onesimus back to Philemon, calling him 'my child born in bonds'."
  },
  {
    "q": "What woman made clothing for widows and was resurrected by Peter?",
    "opts": [
      "Dorcas (Tabitha)",
      "Lydia",
      "Priscilla",
      "Phoebe"
    ],
    "answer": 0,
    "ref": "Acts 9:36",
    "cat": "People",
    "diff": "Medium",
    "explain": "Tabitha (translated Dorcas) was full of charity work in Joppa."
  },
  {
    "q": "Who succeeded Felix as governor of Judea during Paul's trial?",
    "opts": [
      "Festus (Porcius Festus)",
      "Gallio",
      "Agrippa",
      "Pilate"
    ],
    "answer": 0,
    "ref": "Acts 24:27",
    "cat": "People",
    "diff": "Hard",
    "explain": "Festus was appointed to replace Felix as regional governor."
  },
  {
    "q": "Who was Herodias' daughter who danced before Herod Antipas?",
    "opts": [
      "Salome (from historical history)",
      "Mariamne",
      "Bernice",
      "Drusilla"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "People",
    "diff": "Hard",
    "explain": "The daughter of Herodias is identified as Salome in ancient accounts."
  },
  {
    "q": "Which high priest did Paul describe as a 'whitewashed wall'?",
    "opts": [
      "Ananias",
      "Caiaphas",
      "Annas",
      "Jonathan"
    ],
    "answer": 0,
    "ref": "Acts 23:2-3",
    "cat": "People",
    "diff": "Hard",
    "explain": "Paul rebuked Ananias before realizing he was the high priest."
  },
  {
    "q": "What sorcerer did Paul strike blind in Paphos?",
    "opts": [
      "Elymas (Bar-Jesus)",
      "Simon Magus",
      "Alexander the coppersmith",
      "Hymenaeus"
    ],
    "answer": 0,
    "ref": "Acts 13:8",
    "cat": "People",
    "diff": "Hard",
    "explain": "Elymas the sorcerer was struck blind for trying to turn a proconsul away."
  },
  {
    "q": "Which group of believers selected Matthias to join their ranks?",
    "opts": [
      "The Eleven Apostles",
      "The Sanhedrin",
      "The Seventy Disciples",
      "The Antioch Council"
    ],
    "answer": 0,
    "ref": "Acts 1:26",
    "cat": "People",
    "diff": "Easy",
    "explain": "Matthias was chosen by checking cast lots to join the Eleven."
  },
  {
    "q": "Who was the female judge of Israel who sat under a palm tree?",
    "opts": [
      "Deborah",
      "Jael",
      "Miriam",
      "Esther"
    ],
    "answer": 0,
    "ref": "Judges 4:4-5",
    "cat": "People",
    "diff": "Medium",
    "explain": "Deborah adjudicated disputes on her seat under the Palm of Deborah."
  },
  {
    "q": "Who was Jonathan's crippled son whom David treated with kindness?",
    "opts": [
      "Mephibosheth",
      "Merab",
      "Ishbosheth",
      "Abner"
    ],
    "answer": 0,
    "ref": "2 Samuel 9",
    "cat": "People",
    "diff": "Medium",
    "explain": "David gave Mephibosheth Saul's lands and fed him at his royal table."
  },
  {
    "q": "Which Roman emperor was ruling when Paul was executed traditionally?",
    "opts": [
      "Nero",
      "Caligula",
      "Claudius",
      "Tiberius"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "People",
    "diff": "Hard",
    "explain": "Nero launched the first major Roman persecution against Christians."
  },
  {
    "q": "Who was the father of Abraham?",
    "opts": [
      "Terah",
      "Nahor",
      "Haran",
      "Lot"
    ],
    "answer": 0,
    "ref": "Genesis 11:26",
    "cat": "People",
    "diff": "Easy",
    "explain": "Terah fathered Abram, Nahor, and Haran in Ur of Chaldeans."
  },
  {
    "q": "Who was the father of King Saul?",
    "opts": [
      "Kish",
      "Abner",
      "Ner",
      "Gish"
    ],
    "answer": 0,
    "ref": "1 Samuel 9:1",
    "cat": "People",
    "diff": "Medium",
    "explain": "Kish, a wealthy man from Benjamin, was Saul's father."
  },
  {
    "q": "Who refused to curse Israel despite Balak's persistent bribe offers?",
    "opts": [
      "Balaam",
      "Bala",
      "Balak",
      "Phinehas"
    ],
    "answer": 0,
    "ref": "Numbers 22-24",
    "cat": "People",
    "diff": "Easy",
    "explain": "Balaam declared he could only speak the words God put in his mouth."
  },
  {
    "q": "Who was the wicked husband of Queen Jezebel?",
    "opts": [
      "Ahab",
      "Jehoram",
      "Jehu",
      "Jeroboam"
    ],
    "answer": 0,
    "ref": "1 Kings 16:30-31",
    "cat": "People",
    "diff": "Easy",
    "explain": "Ahab, son of Omri, married Jezebel and promoted Baal worship."
  },
  {
    "q": "Who was Mordecai's cousin whom he raised?",
    "opts": [
      "Esther (Hadassah)",
      "Ruth",
      "Jehoaddan",
      "Vashti"
    ],
    "answer": 0,
    "ref": "Esther 2:7",
    "cat": "People",
    "diff": "Easy",
    "explain": "Mordecai brought up Hadassah, that is, Esther, his uncle's daughter."
  },
  {
    "q": "Who was the father of John the Baptist?",
    "opts": [
      "Zechariah",
      "Joseph",
      "Ananias",
      "Simeon"
    ],
    "answer": 0,
    "ref": "Luke 1:5",
    "cat": "People",
    "diff": "Easy",
    "explain": "Zechariah was a priest belonging to the division of Abijah."
  },
  {
    "q": "Who was the first person called by Jesus to follow Him?",
    "opts": [
      "Andrew",
      "Simon Peter",
      "John",
      "James"
    ],
    "answer": 0,
    "ref": "John 1:40",
    "cat": "People",
    "diff": "Medium",
    "explain": "Andrew, Simon Peter's brother, was first to go find Peter."
  },
  {
    "q": "Who was the wife of Aquila and missionary co-worker of Paul?",
    "opts": [
      "Priscilla",
      "Lydia",
      "Phoebe",
      "Damaris"
    ],
    "answer": 0,
    "ref": "Acts 18:2",
    "cat": "People",
    "diff": "Easy",
    "explain": "Priscilla and Aquila worked together as tentmakers and teachers."
  },
  {
    "q": "Whom did Jesus describe as 'an Israelite indeed, in whom is no guile'?",
    "opts": [
      "Nathanael",
      "Andrew",
      "Thomas",
      "Philip"
    ],
    "answer": 0,
    "ref": "John 1:47",
    "cat": "People",
    "diff": "Medium",
    "explain": "Jesus saw Nathanael approaching and identified his sincere character."
  },
  {
    "q": "What woman hid the Hebrew spies in Jericho?",
    "opts": [
      "Rahab",
      "Delilah",
      "Deborah",
      "Athaliah"
    ],
    "answer": 0,
    "ref": "Joshua 2:1",
    "cat": "People",
    "diff": "Easy",
    "explain": "Rahab the innkeeper sheltered the spies on her flat roof."
  },
  {
    "q": "Who was the father of King Josiah?",
    "opts": [
      "Amon",
      "Manasseh",
      "Hezekiah",
      "Ahaz"
    ],
    "answer": 0,
    "ref": "2 Kings 21:26",
    "cat": "People",
    "diff": "Medium",
    "explain": "Amon reigned two years before Josiah succeeded him."
  },
  {
    "q": "Who was Timothy's mother?",
    "opts": [
      "Eunice",
      "Lois",
      "Priscilla",
      "Lydia"
    ],
    "answer": 0,
    "ref": "2 Timothy 1:5",
    "cat": "People",
    "diff": "Hard",
    "explain": "Timothy was raised in faith by mother Eunice and grandmother Lois."
  },
  {
    "q": "Who was Lazarus' sister who sat at Jesus' feet?",
    "opts": [
      "Mary",
      "Martha",
      "Lydia",
      "Salome"
    ],
    "answer": 0,
    "ref": "Luke 10:39",
    "cat": "People",
    "diff": "Easy",
    "explain": "Mary of Bethany sat listening, leaving the work to Martha."
  },
  {
    "q": "Which angry prophet sat under a plant east of Nineveh?",
    "opts": [
      "Jonah",
      "Elijah",
      "Elisha",
      "Jeremiah"
    ],
    "answer": 0,
    "ref": "Jonah 4",
    "cat": "People",
    "diff": "Easy",
    "explain": "Jonah wanted to see what would happen to the repented city."
  },
  {
    "q": "Which Persian ruler favored governor Nehemiah?",
    "opts": [
      "Artaxerxes I",
      "Cyrus",
      "Darius I",
      "Xerxes"
    ],
    "answer": 0,
    "ref": "Nehemiah 2:1",
    "cat": "People",
    "diff": "Medium",
    "explain": "Artaxerxes noticed Nehemiah's sadness and granted him building permission."
  },
  {
    "q": "What was the name of the aged prophetess in the temple?",
    "opts": [
      "Anna",
      "Elizabeth",
      "Mary",
      "Abigail"
    ],
    "answer": 0,
    "ref": "Luke 2:36",
    "cat": "People",
    "diff": "Medium",
    "explain": "Anna, daughter of Phanuel, thanked God on seeing child Jesus."
  },
  {
    "q": "Who was the high priest who trained Samuel?",
    "opts": [
      "Eli",
      "Phinehas",
      "Abiatar",
      "Zadok"
    ],
    "answer": 0,
    "ref": "1 Samuel 1",
    "cat": "People",
    "diff": "Easy",
    "explain": "Eli raised Samuel in the tabernacle structure of Shiloh."
  },
  {
    "q": "What son of David got his flowing locks caught in an oak tree?",
    "opts": [
      "Absalom",
      "Adonijah",
      "Amnon",
      "Solomon"
    ],
    "answer": 0,
    "ref": "2 Samuel 18:9",
    "cat": "People",
    "diff": "Easy",
    "explain": "Absalom's mule rode under a heavy oak, leaving him suspended."
  },
  {
    "q": "Who was the father-in-law of Jacob's wife Rachel?",
    "opts": [
      "Isaac",
      "Laban",
      "Abraham",
      "Bethuel"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "People",
    "diff": "Medium",
    "explain": "Jacob's father was Isaac, which makes Isaac Rachel's father-in-law."
  },
  {
    "q": "Who was Jacob's second-youngest son?",
    "opts": [
      "Joseph",
      "Benjamin",
      "Dan",
      "Judah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "People",
    "diff": "Medium",
    "explain": "Joseph was Jacob's eleventh son; Benjamin was the twelfth."
  },
  {
    "q": "Who was the Roman centurion in Caesarea who summoned Peter?",
    "opts": [
      "Cornelius",
      "Longinus",
      "Julius",
      "Publius"
    ],
    "answer": 0,
    "ref": "Acts 10",
    "cat": "People",
    "diff": "Easy",
    "explain": "Cornelius was told by an angel to send men to fetch Peter."
  },
  {
    "q": "Who was the governor of Judah who led the wall-rebuilding?",
    "opts": [
      "Nehemiah",
      "Zerubbabel",
      "Ezra",
      "Sanballat"
    ],
    "answer": 0,
    "ref": "Nehemiah 1",
    "cat": "People",
    "diff": "Easy",
    "explain": "Nehemiah served as Persian royal cupbearer and governor."
  },
  {
    "q": "Which son of Josiah was taken captive to Egypt?",
    "opts": [
      "Jehoahaz (Shallum)",
      "Jehoiakim",
      "Zedekiah",
      "Jeconiah"
    ],
    "answer": 0,
    "ref": "2 Kings 23:34",
    "cat": "People",
    "diff": "Hard",
    "explain": "Pharaoh Neco took Jehoahaz to Egypt, where he died."
  },
  {
    "q": "Which high priest stood beside Zerubbabel when returning?",
    "opts": [
      "Jeshua (Joshua)",
      "Ezra",
      "Zadok",
      "Hilkiah"
    ],
    "answer": 0,
    "ref": "Ezra 3:2",
    "cat": "People",
    "diff": "Hard",
    "explain": "Jeshua son of Jozadak led the rebuilding of the altar."
  },
  {
    "q": "Which friend of Daniel was cast with Hananiah into the furnace?",
    "opts": [
      "Azariah (Abednego)",
      "Meshach",
      "Shadrach",
      "Belteshazzar"
    ],
    "answer": 0,
    "ref": "Daniel 1:7",
    "cat": "People",
    "diff": "Medium",
    "explain": "Azariah was given the Babylonian name Abednego."
  },
  {
    "q": "Who was Ishmael's mother?",
    "opts": [
      "Hagar",
      "Sarah",
      "Keturah",
      "Milcah"
    ],
    "answer": 0,
    "ref": "Genesis 16",
    "cat": "People",
    "diff": "Easy",
    "explain": "Hagar, Sarah's Egyptian maidservant, was the mother of Ishmael."
  },
  {
    "q": "Who was the prophetess who told Barak that a woman would slay Sisera?",
    "opts": [
      "Deborah",
      "Jael",
      "Miriam",
      "Huldah"
    ],
    "answer": 0,
    "ref": "Judges 4:9",
    "cat": "People",
    "diff": "Medium",
    "explain": "Deborah prophesied that Sisera would fall to a woman (Jael)."
  },
  {
    "q": "Who was Adam and Eve's third named son?",
    "opts": [
      "Seth",
      "Cain",
      "Abel",
      "Enoch"
    ],
    "answer": 0,
    "ref": "Genesis 4:25",
    "cat": "People",
    "diff": "Easy",
    "explain": "Eve bore Seth to replace Abel, whom Cain killed."
  },
  {
    "q": "Which of Noah's sons mocked his nakedness?",
    "opts": [
      "Ham",
      "Shem",
      "Japheth",
      "Canaan"
    ],
    "answer": 0,
    "ref": "Genesis 9:22",
    "cat": "People",
    "diff": "Easy",
    "explain": "Ham, father of Canaan, saw his father's nakedness and publicized it."
  },
  {
    "q": "Which apostle was surnamed Thaddaeus in some gospels?",
    "opts": [
      "Jude",
      "Simon Zealot",
      "Bartholomew",
      "Thomas"
    ],
    "answer": 0,
    "ref": "Matthew 10:3",
    "cat": "People",
    "diff": "Hard",
    "explain": "Lebbaeus, whose surname was Thaddaeus (identified as Jude/Judas of James)."
  },
  {
    "q": "What was the name of the garden where Adam and Eve were placed?",
    "opts": [
      "Eden",
      "Gethsemane",
      "Sinai",
      "Zion"
    ],
    "answer": 0,
    "ref": "Genesis 2:8",
    "cat": "Events",
    "diff": "Easy",
    "explain": "God planted a garden eastward in Eden and put man there."
  },
  {
    "q": "What physical event prompted Jacob's family to seek shelter in Egypt?",
    "opts": [
      "A severe famine",
      "An invading army",
      "A catastrophic earthquake",
      "A disease plague"
    ],
    "answer": 0,
    "ref": "Genesis 41:57",
    "cat": "Events",
    "diff": "Easy",
    "explain": "The famine was severe over all the earth, forcing Jacob to buy grain in Egypt."
  },
  {
    "q": "What visual token did God give to confirm He would never flood the earth again?",
    "opts": [
      "A rainbow",
      "A burning pillar",
      "A falling star",
      "Cloud water"
    ],
    "answer": 0,
    "ref": "Genesis 9:13",
    "cat": "Events",
    "diff": "Easy",
    "explain": "God placed His bow in the cloud as a sign of the covenant."
  },
  {
    "q": "What miracle parted the waters so the Israelites could escape Pharaoh?",
    "opts": [
      "The parting of the Red Sea",
      "Turning water to blood",
      "Dividing Jordan",
      "A local heatwave"
    ],
    "answer": 0,
    "ref": "Exodus 14",
    "cat": "Events",
    "diff": "Easy",
    "explain": "A strong east wind blew all night, dividing the sea into walls of dry ground."
  },
  {
    "q": "What city collapsed after the Israelites marched around it for seven days?",
    "opts": [
      "Jericho",
      "Ai",
      "Hazor",
      "Gibeon"
    ],
    "answer": 0,
    "ref": "Joshua 6",
    "cat": "Events",
    "diff": "Easy",
    "explain": "On the seventh day, the priests blew horns and the city walls fell down flat."
  },
  {
    "q": "What did Aaron fashion out of jewelry when Moses went up Mount Sinai?",
    "opts": [
      "A golden calf",
      "A bronze serpent",
      "The Ark of the Covenant",
      "A miniature Temple"
    ],
    "answer": 0,
    "ref": "Exodus 32",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Aaron took the gold from the people and made an idol in the shape of a calf."
  },
  {
    "q": "What happened to Daniel when he disobeyed the king's prayer decree?",
    "opts": [
      "Thrown into the lions' den",
      "Thrown into the fiery furnace",
      "Banished to Egypt",
      "Exiled on Patmos"
    ],
    "answer": 0,
    "ref": "Daniel 6",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Daniel was thrown into the lions' den, but God shut the lions' mouths."
  },
  {
    "q": "What miracle did Jesus perform on the Sea of Galilee during a severe storm?",
    "opts": [
      "He calmed the wind and waves",
      "He walked on land",
      "He turned salt to fresh",
      "He called down fog"
    ],
    "answer": 0,
    "ref": "Mark 4:39",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus got up, rebuked the wind, and said, 'Peace, be still!'"
  },
  {
    "q": "Why was Zechariah, father of John local-wise, struck mute?",
    "opts": [
      "He doubted Gabriel's birth prophecy",
      "He lost his memory",
      "He broke a vow",
      "He ate poisoned honey"
    ],
    "answer": 0,
    "ref": "Luke 1:20",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Gabriel stated Zechariah would be silent because he did not believe his words."
  },
  {
    "q": "What event freed Paul and Silas from their chains at midnight?",
    "opts": [
      "A sudden violent earthquake",
      "An undercover soldier rescue",
      "The warden repenting in secret",
      "A flash of lightning"
    ],
    "answer": 0,
    "ref": "Acts 16:26",
    "cat": "Events",
    "diff": "Easy",
    "explain": "A great earthquake shook the prison foundations, opening the doors."
  },
  {
    "q": "What servanthood act did Jesus perform on His disciples before the Passover meal?",
    "opts": [
      "He washed their feet",
      "He anointed their heads with oil",
      "He bought them sandals",
      "He cut their hair"
    ],
    "answer": 0,
    "ref": "John 13:5",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus poured water into a basin and began to wash His disciples' feet."
  },
  {
    "q": "What dramatic phenomenon attended the descent of the Holy Spirit at Pentecost?",
    "opts": [
      "Speaking in other tongues",
      "A localized thunderbolt",
      "The parting of the Jordan",
      "The sun turning black"
    ],
    "answer": 0,
    "ref": "Acts 2:4",
    "cat": "Events",
    "diff": "Easy",
    "explain": "They were filled with the Holy Spirit and began speaking in other languages."
  },
  {
    "q": "What did Jacob see in his dream when resting on a stone at Bethel?",
    "opts": [
      "A ladder reaching to heaven",
      "A sheet of unclean animals",
      "A scroll flying in the sky",
      "A tree reaching global bounds"
    ],
    "answer": 0,
    "ref": "Genesis 28",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jacob saw a ladder set on earth, with its top touching heaven, and angels moving on it."
  },
  {
    "q": "What became of Lot's wife when she looked back at Sodom?",
    "opts": [
      "She turned into a pillar of salt",
      "She sank into molten ash",
      "She vanished instantly",
      "She was converted to stone"
    ],
    "answer": 0,
    "ref": "Genesis 19:26",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Lot's wife looked back from behind him and became a pillar of salt."
  },
  {
    "q": "What disease plagued Miriam for criticizing Moses' marriage choice?",
    "opts": [
      "Leprosy",
      "Blindness",
      "Fever",
      "Paralysis"
    ],
    "answer": 0,
    "ref": "Numbers 12:10",
    "cat": "Events",
    "diff": "Medium",
    "explain": "When the cloud retreated from the tent, Miriam was white as snow with leprosy."
  },
  {
    "q": "How did God feed Elijah when he was hiding by the brook Cherith?",
    "opts": [
      "Ravens bringing bread and meat",
      "A widow sending jars of food",
      "An angel preparing wheat daily",
      "Manna dropping from trees"
    ],
    "answer": 0,
    "ref": "1 Kings 17:6",
    "cat": "Events",
    "diff": "Easy",
    "explain": "The ravens brought him bread and meat in the morning and evening."
  },
  {
    "q": "What did Elisha do to recover a lost borrowed axe head?",
    "opts": [
      "He made the iron float",
      "He dried the riverbed",
      "He sent a diver",
      "He called down lightning"
    ],
    "answer": 0,
    "ref": "2 Kings 6:6",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Elisha cut a stick, threw it into the water, and made the iron float."
  },
  {
    "q": "What provoked the split of Solomon's undivided kingdom?",
    "opts": [
      "Rehoboam's rejection of elder counsel",
      "An Egyptian military invasion",
      "A religious debate over sacrifices",
      "A famine in Jerusalem"
    ],
    "answer": 0,
    "ref": "1 Kings 12",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Rehoboam rejected the elders' advice, opting to increase Israel's labor burdens instead."
  },
  {
    "q": "What final plague prompted Pharaoh to let the Israelites exit Egypt?",
    "opts": [
      "Death of the firstborn",
      "Locust invasion",
      "Complete darkness",
      "Hail and fire"
    ],
    "answer": 0,
    "ref": "Exodus 11-12",
    "cat": "Events",
    "diff": "Easy",
    "explain": "The death of Egypt's firstborn prompted Pharaoh to demand Israel's immediate departure."
  },
  {
    "q": "What did Saul experience on his journey to Damascus in Acts?",
    "opts": [
      "A blinding light and Jesus speaking",
      "An encounter with three angels",
      "A sudden massive storm",
      "A vision of flying scrolls"
    ],
    "answer": 0,
    "ref": "Acts 9",
    "cat": "Events",
    "diff": "Easy",
    "explain": "A light shone from heaven, and Jesus spoke: 'Saul, Saul, why persecutest thou me?'"
  },
  {
    "q": "What did Moses do to make the bitter waters of Marah drinkable?",
    "opts": [
      "Threw a piece of wood into it",
      "Poured salt on the spring",
      "Struck the rock with his staff",
      "Offered incense"
    ],
    "answer": 0,
    "ref": "Exodus 15:25",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The Lord showed him a piece of wood, which he threw in, sweetening the water."
  },
  {
    "q": "Why did the earth open to swallow Korah, Dathan, and Abiram?",
    "opts": [
      "They rebelled against Moses' leadership",
      "They worshipped idols",
      "They stole temple offerings",
      "They fled the camp"
    ],
    "answer": 0,
    "ref": "Numbers 16",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The earth opened and swallowed them because of their leadership rebellion."
  },
  {
    "q": "What sign did Gideon request using a fleece of wool?",
    "opts": [
      "Wet and dry alternate fleece",
      "Fleece catching fire",
      "Vanish of fleece",
      "Fleece turning purple"
    ],
    "answer": 0,
    "ref": "Judges 6:36-40",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Gideon asked for dew to be on the fleece first, then on the ground only."
  },
  {
    "q": "In how many days was the wall of Jerusalem rebuilt under Nehemiah?",
    "opts": [
      "52 days",
      "40 days",
      "7 days",
      "120 days"
    ],
    "answer": 0,
    "ref": "Nehemiah 6:15",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The wall was completed on the twenty-fifth of Elul, in fifty-two days."
  },
  {
    "q": "At what public gathering did Jesus perform His first recorded miracle?",
    "opts": [
      "A wedding at Cana",
      "A funeral in Nain",
      "The temple Passover",
      "A public synagogue reading"
    ],
    "answer": 0,
    "ref": "John 2:1-11",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus turned water to wine at a wedding feast in Cana of Galilee."
  },
  {
    "q": "How many days had Lazarus been dead when Jesus raised him?",
    "opts": [
      "Four days",
      "Three days",
      "Two days",
      "Seven days"
    ],
    "answer": 0,
    "ref": "John 11:17",
    "cat": "Events",
    "diff": "Easy",
    "explain": "When Jesus arrived, Lazarus had already been in the tomb four days."
  },
  {
    "q": "What did the disciples witness when Jesus' face shone like the sun on a mountain?",
    "opts": [
      "The Transfiguration",
      "The Ascension",
      "The Resurrection",
      "The Crucifixion"
    ],
    "answer": 0,
    "ref": "Matthew 17:2",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus was transfigured, appearing alongside Moses and Elijah."
  },
  {
    "q": "What happened to Elymas the sorcerer when he opposed Paul's preaching?",
    "opts": [
      "Struck blind for a season",
      "He was struck mute",
      "The earth swallowed him",
      "He was exiled from Paphos"
    ],
    "answer": 0,
    "ref": "Acts 13:11",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Paul declared a mist and darkness would fall on him, striking him blind."
  },
  {
    "q": "What attended Peter's miraculous jail-release in Acts 12?",
    "opts": [
      "An angel awoke him and chains fell off",
      "An earthquake opened prison gates",
      "The guards slept by design",
      "The locks broke from lightning"
    ],
    "answer": 0,
    "ref": "Acts 12:7",
    "cat": "Events",
    "diff": "Easy",
    "explain": "An angel illuminated the cell, struck Peter, woke him, and his chains fell off."
  },
  {
    "q": "What occurred to the Philistine Dagon statue placed next to the Ark?",
    "opts": [
      "It fell face down in pieces",
      "It vanished in fire",
      "It was swallowed by earth",
      "It was covered in dust"
    ],
    "answer": 0,
    "ref": "1 Samuel 5:3-4",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The statue fell face down twice, losing its head and hands on the second fall."
  },
  {
    "q": "What did King David do when bringing the Ark of the Covenant to Jerusalem?",
    "opts": [
      "He danced with all his might",
      "He walked in silence",
      "He rode a golden chariot",
      "He built a brick wall"
    ],
    "answer": 0,
    "ref": "2 Samuel 6:14",
    "cat": "Events",
    "diff": "Easy",
    "explain": "David danced before the Lord wearing a priestly linen ephod."
  },
  {
    "q": "What did King Solomon propose doing to solve the split-mother baby dispute?",
    "opts": [
      "Divide the baby in half",
      "Let priests vote",
      "Cast temple lots",
      "Foster him in royal halls"
    ],
    "answer": 0,
    "ref": "1 Kings 3",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Solomon ordered a sword to cut the baby, prompting the real mother to beg for its life."
  },
  {
    "q": "In what manner did the wicked queen Jezebel meet her end?",
    "opts": [
      "Thrown from a window",
      "Executed on the altar",
      "Killed in battle",
      "Poisoned at a banquet"
    ],
    "answer": 0,
    "ref": "2 Kings 9:33",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Jehu ordered her thrown down, and horses trampled her body."
  },
  {
    "q": "What happened to King Saul when wounded on Mount Gilboa?",
    "opts": [
      "He fell on his own sword",
      "He was killed by David",
      "An angel rescued him",
      "He was captured by Syria"
    ],
    "answer": 0,
    "ref": "1 Samuel 31:4",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Saul fell on his sword to avoid execution by the Philistines."
  },
  {
    "q": "By what method did the prophet Elijah depart this earth?",
    "opts": [
      "Whirlwind with chariot of fire",
      "Resurrection from a tomb",
      "He died of old age",
      "He ascended during prayer"
    ],
    "answer": 0,
    "ref": "2 Kings 2:11",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Elijah went up in a whirlwind as a fiery chariot separated him from Elisha."
  },
  {
    "q": "What did Moses witness that burned but was not consumed?",
    "opts": [
      "A burning bush",
      "A shining cloud",
      "A pillar of fire",
      "A local mountain"
    ],
    "answer": 0,
    "ref": "Exodus 3:2",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Moses saw that the bush was burning with fire, but it was not destroyed."
  },
  {
    "q": "What guided the magi to Bethlehem to locate the baby Jesus?",
    "opts": [
      "A star in the east",
      "A burning pillar",
      "A sheet of light",
      "An angelic guide"
    ],
    "answer": 0,
    "ref": "Matthew 2:2",
    "cat": "Events",
    "diff": "Easy",
    "explain": "They declared they saw His star in the east and came to worship."
  },
  {
    "q": "What was the first plague God sent upon Egypt?",
    "opts": [
      "Turning water to blood",
      "Lice infestation",
      "Boils on flesh",
      "Locust invasion"
    ],
    "answer": 0,
    "ref": "Exodus 7:20",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Moses struck the Nile water with his staff, turning it to blood."
  },
  {
    "q": "What did the Israelites collect from the ground every morning in the desert?",
    "opts": [
      "Manna",
      "Figs",
      "Wheat",
      "Barley"
    ],
    "answer": 0,
    "ref": "Exodus 16",
    "cat": "Events",
    "diff": "Easy",
    "explain": "They gathered a fine flake-like substance called manna every morning."
  },
  {
    "q": "What attended Jesus' baptism besides the Holy Spirit's descent?",
    "opts": [
      "A voice from heaven speaking",
      "The Jordan dividing",
      "The sun turning black",
      "A sudden massive storm"
    ],
    "answer": 0,
    "ref": "Matthew 3:17",
    "cat": "Events",
    "diff": "Easy",
    "explain": "A voice came from heaven saying, 'This is my beloved Son, in whom I am well pleased.'"
  },
  {
    "q": "What happened to the Temple curtain when Jesus died on the cross?",
    "opts": [
      "Torn in two from top to bottom",
      "It caught fire",
      "It turned red as blood",
      "It collapsed flat"
    ],
    "answer": 0,
    "ref": "Matthew 27:51",
    "cat": "Events",
    "diff": "Easy",
    "explain": "The veil of the temple was torn in two, signifying access to God."
  },
  {
    "q": "What occurred 40 days after Jesus' resurrection on Mount of Olives?",
    "opts": [
      "The Ascension",
      "The Transfiguration",
      "The Sermon on the Mount",
      "The Passover Feast"
    ],
    "answer": 0,
    "ref": "Acts 1:9",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Jesus was taken up, and a cloud received Him out of their sight."
  },
  {
    "q": "What did God do to stop the construction of the Tower of Babel?",
    "opts": [
      "Confused their language",
      "Sent fire from heaven",
      "Caused a great flood",
      "Exiled the builders"
    ],
    "answer": 0,
    "ref": "Genesis 11:7-8",
    "cat": "Events",
    "diff": "Easy",
    "explain": "God confused their language so they could not understand one another and dispersed them."
  },
  {
    "q": "What vessels did Belshazzar use at his feast when the writing appeared?",
    "opts": [
      "Temple gold vessels of Jerusalem",
      "Clay pots of Babylon",
      "Bronze cups of Syria",
      "Egyptian stone jars"
    ],
    "answer": 0,
    "ref": "Daniel 5:2",
    "cat": "Events",
    "diff": "Medium",
    "explain": "Belshazzar called for the gold temple vessels his father took from Jerusalem."
  },
  {
    "q": "How did Samson die in the Philistine temple of Dagon?",
    "opts": [
      "He pulled down the pillars",
      "He fell on his sword",
      "He was executed with a spear",
      "He died of hunger"
    ],
    "answer": 0,
    "ref": "Judges 16:30",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Samson pushed against the central support pillars, destroying the temple."
  },
  {
    "q": "How did Jacob obtain his elder brother's birthright?",
    "opts": [
      "He bought it for lentil stew",
      "He won a physical fight",
      "His father chose him",
      "He won a card game"
    ],
    "answer": 0,
    "ref": "Genesis 25:33",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Esau sold his birthright to Jacob for bread and lentil stew."
  },
  {
    "q": "What did Elisha do to heal the poisoned prophetic stew?",
    "opts": [
      "Threw flour into the pot",
      "Struck the pot with his staff",
      "Poured Jordan water in",
      "Added olive oil"
    ],
    "answer": 0,
    "ref": "2 Kings 4:41",
    "cat": "Events",
    "diff": "Hard",
    "explain": "Elisha put flour in the pot, and the stew was no longer lethal."
  },
  {
    "q": "What happened when the priests carrying the Ark stepped into Jordan?",
    "opts": [
      "The waters stopped and piled up",
      "A bridge appeared",
      "A violent whirlpool formed",
      "The river dried completely"
    ],
    "answer": 0,
    "ref": "Joshua 3:15-16",
    "cat": "Events",
    "diff": "Medium",
    "explain": "The river stopped flowing downstream, backing up in a heap."
  },
  {
    "q": "What did Roman soldiers do with Jesus' seamless tunic at the cross?",
    "opts": [
      "They cast lots for it",
      "They cut it to pieces",
      "They returned it to Mary",
      "They burned it"
    ],
    "answer": 0,
    "ref": "John 19:24",
    "cat": "Events",
    "diff": "Easy",
    "explain": "Soldiers decided not to tear it, but check by lot whose it would be."
  },
  {
    "q": "What happened to the Egyptian army when chasing Israel through the sea?",
    "opts": [
      "The waters collapsed on them",
      "They got lost in fog",
      "An earthquake swallowed them",
      "A plague struck them"
    ],
    "answer": 0,
    "ref": "Exodus 14:27-28",
    "cat": "Events",
    "diff": "Easy",
    "explain": "The parted water returned to its normal depth, covering Pharaoh's chariots."
  },
  {
    "q": "What does 'Selah' mean traditionally in the Psalms?",
    "opts": [
      "A meditative pause",
      "Sing in high pitch",
      "Repeat the verse",
      "Play the harp loud"
    ],
    "answer": 0,
    "ref": "Psalms",
    "cat": "General",
    "diff": "Medium",
    "explain": "Selah is widely interpreted as a musical or meditative instruction to halt."
  },
  {
    "q": "What is the longest book in the Old Testament?",
    "opts": [
      "Psalms",
      "Genesis",
      "Isaiah",
      "Jeremiah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Psalms has 150 individual sections, making it the longest book."
  },
  {
    "q": "How many books are in the standard New Testament?",
    "opts": [
      "27",
      "39",
      "66",
      "12"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Christian New Testament consists of exactly twenty-seven books."
  },
  {
    "q": "What language was the New Testament penned in?",
    "opts": [
      "Greek (Koine)",
      "Hebrew",
      "Latin",
      "Aramaic"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The New Testament was composed in popular Koine Greek."
  },
  {
    "q": "What was the dominant primary language of the Old Testament?",
    "opts": [
      "Hebrew",
      "Greek",
      "Latin",
      "Aramaic"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Hebrew Bible was composed in classical Hebrew, with small patches of Aramaic."
  },
  {
    "q": "Which book has only one chapter and 25 verses in the New Testament?",
    "opts": [
      "Jude",
      "Philemon",
      "2 John",
      "3 John"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "Jude consists of 1 chapter with 25 verses total."
  },
  {
    "q": "What does the liturgical word 'Hallelujah' mean literally?",
    "opts": [
      "Praise the Lord",
      "Save us now",
      "Holy is God",
      "Amen indeed"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Hallelujah is a Hebrew exhortation meaning 'Praise Jah' (Yahweh)."
  },
  {
    "q": "What does the wilderness food word 'Manna' mean literally?",
    "opts": [
      "What is it?",
      "Bread from heaven",
      "Sweet dew",
      "White grain"
    ],
    "answer": 0,
    "ref": "Exodus 16:15",
    "cat": "General",
    "diff": "Medium",
    "explain": "Israel called it 'Manna' (Man Hu) which translates literally to 'What is it?'"
  },
  {
    "q": "How many verses are in the longest chapter of the Bible (Psalm 119)?",
    "opts": [
      "176 verses",
      "150 verses",
      "100 verses",
      "200 verses"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Psalm 119 has exactly 176 unique poetic verses praise-wise."
  },
  {
    "q": "What does the theme noun 'Beatitudes' designate?",
    "opts": [
      "The blessings pronounced in Matthew 5",
      "The letters of the Apostle Paul",
      "The historical records of Judges",
      "The Mosaic food regulations"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Beatitudes comes from Latin, meaning supreme happiness or blessing."
  },
  {
    "q": "What is the absolute final word in the Book of Revelation?",
    "opts": [
      "Amen",
      "Hallelujah",
      "Ascension",
      "King"
    ],
    "answer": 0,
    "ref": "Revelation 22:21",
    "cat": "General",
    "diff": "Easy",
    "explain": "Revelation concludes with: 'The grace of Lord Jesus with you all. Amen.'"
  },
  {
    "q": "What standard Greek translation of the Hebrew Bible did early Christians use?",
    "opts": [
      "The Septuagint",
      "The Vulgate",
      "The Tyndale",
      "The Geneva"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Hard",
    "explain": "The Septuagint (LXX) was the common Greek text of the Old Testament."
  },
  {
    "q": "What is the shortest verse in the English Bible?",
    "opts": [
      "Jesus wept.",
      "Rejoice always.",
      "Pray without ceasing.",
      "God is love."
    ],
    "answer": 0,
    "ref": "John 11:35",
    "cat": "General",
    "diff": "Easy",
    "explain": "John 11:35 has only two words: 'Jesus wept.'"
  },
  {
    "q": "Who is recorded as the oldest man in the Bible?",
    "opts": [
      "Methuselah",
      "Jared",
      "Adam",
      "Noah"
    ],
    "answer": 0,
    "ref": "Genesis 5:27",
    "cat": "General",
    "diff": "Easy",
    "explain": "Methuselah lived for a total of 969 years before dying."
  },
  {
    "q": "What does 'Deuteronomy' translate to in Greek?",
    "opts": [
      "Second Law",
      "Beginning",
      "Departure",
      "Priesthood"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Deuteronomy is derived from Greek words meaning 'Second Law'."
  },
  {
    "q": "How many chapters does the shortest book in the Bible have?",
    "opts": [
      "One chapter",
      "Two chapters",
      "Three chapters",
      "Five chapters"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Several books (Obadiah, Philemon, 2 John, 3 John, Jude) have only one chapter."
  },
  {
    "q": "What instrument was David famous for playing?",
    "opts": [
      "Harp (lyre)",
      "Flute",
      "Trumpet",
      "Cymbal"
    ],
    "answer": 0,
    "ref": "1 Samuel 16",
    "cat": "General",
    "diff": "Easy",
    "explain": "David was highly skilled at playing the lyre or ancient harp."
  },
  {
    "q": "What does the prophetic title 'Emmanuel' translate to?",
    "opts": [
      "God with us",
      "The Lord saves",
      "Holy King",
      "Peace over earth"
    ],
    "answer": 0,
    "ref": "Matthew 1:23",
    "cat": "General",
    "diff": "Easy",
    "explain": "Emmanuel is Hebrew for 'God is with us'."
  },
  {
    "q": "How many books compose the Pentateuch (Torah)?",
    "opts": [
      "5",
      "3",
      "12",
      "39"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Pentateuch consists of Genesis, Exodus, Leviticus, Numbers, and Deuteronomy."
  },
  {
    "q": "What is the longest single chapter in the Bible?",
    "opts": [
      "Psalm 119",
      "Psalm 150",
      "Isaiah 53",
      "Matthew 1"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Psalm 119 has 176 verses, making it the longest chapter."
  },
  {
    "q": "What is the golden rule spoken by Jesus in Luke 6?",
    "opts": [
      "Do to others as you would have them do to you",
      "Love your neighbor as yourself",
      "An eye for an eye",
      "Judge not lest ye be judged"
    ],
    "answer": 0,
    "ref": "Luke 6:31",
    "cat": "General",
    "diff": "Easy",
    "explain": "Luke 6:31 states: 'And as you wish that others would do to you, do so to them.'"
  },
  {
    "q": "What is the first printed book globally (Gutenberg Press)?",
    "opts": [
      "The Bible (Latin Vulgate)",
      "The Canterbury Tales",
      "The Divine Comedy",
      "Odyssey"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The print press first struck copies of the Gutenberg Latin Bible."
  },
  {
    "q": "What does 'Pentecost' translate to literally in Greek?",
    "opts": [
      "Fiftieth",
      "Holy Spirit",
      "Fifty days",
      "Festival of harvest"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Pentecost is derived from Greek, meaning 'fiftieth day' (after Passover)."
  },
  {
    "q": "What represents the standard correct order of the four Gospels?",
    "opts": [
      "Matthew, Mark, Luke, John",
      "Mark, Matthew, Luke, John",
      "John, Luke, Mark, Matthew",
      "Luke, Mark, Matthew, John"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The canonical order is Matthew, Mark, Luke, and John."
  },
  {
    "q": "What first animal did Noah release to locate dry land?",
    "opts": [
      "A raven",
      "A dove",
      "A sparrow",
      "An eagle"
    ],
    "answer": 0,
    "ref": "Genesis 8:7",
    "cat": "General",
    "diff": "Easy",
    "explain": "Noah first released a raven, which flew around until waters dried."
  },
  {
    "q": "What does the Saxon/English word 'Gospel' translate as?",
    "opts": [
      "Good news",
      "God's word",
      "Holy scroll",
      "Kingdom rules"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Gospel comes from Old English 'godspell', translating from Greek 'euangelion' ('good news')."
  },
  {
    "q": "Who is traditionally named publisher of the first 5 biblical books?",
    "opts": [
      "Moses",
      "Abraham",
      "Samuel",
      "David"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Moses has been historically recognized as author of the Pentateuch."
  },
  {
    "q": "How many recognized tribes of Israel exist?",
    "opts": [
      "12",
      "10",
      "13",
      "7"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Israel was made of twelve tribes based on Jacob's sons and sons of Joseph."
  },
  {
    "q": "Where was the home garden of humanity according to Genesis?",
    "opts": [
      "Eden",
      "Nile Valley",
      "Ur",
      "Gethsemane"
    ],
    "answer": 0,
    "ref": "Genesis 2",
    "cat": "General",
    "diff": "Easy",
    "explain": "God prepared a garden in Eden as the initial human habitat."
  },
  {
    "q": "What represents the two core historical divisions of the Bible?",
    "opts": [
      "Old and New Testaments",
      "Torah and Gospels",
      "Law and Prophets",
      "Gospels and Epistles"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The Christian Bible is divided into Old and New covenant testaments."
  },
  {
    "q": "What represented the final prophetic book of the Old Testament canon?",
    "opts": [
      "Malachi",
      "Daniel",
      "Micah",
      "Hosea"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Malachi concludes the narrative Old Testament books."
  },
  {
    "q": "For how many days did Jesus fast in the wilderness?",
    "opts": [
      "40 days",
      "30 days",
      "7 days",
      "10 days"
    ],
    "answer": 0,
    "ref": "Matthew 4:2",
    "cat": "General",
    "diff": "Easy",
    "explain": "Jesus fasted for forty days and forty nights before being tempted."
  },
  {
    "q": "Which of the following is NOT listed as a fruit of the Spirit in Galatians?",
    "opts": [
      "Sacrifices",
      "Love",
      "Joy",
      "Patience"
    ],
    "answer": 0,
    "ref": "Galatians 5:22-23",
    "cat": "General",
    "diff": "Easy",
    "explain": "Galatians lists 9 fruits of the Spirit; sacrifices is not one of them."
  },
  {
    "q": "What is identified as root of all kinds of evil in 1 Timothy?",
    "opts": [
      "The love of money",
      "Pride",
      "Ignorance",
      "Laziness"
    ],
    "answer": 0,
    "ref": "1 Timothy 6:10",
    "cat": "General",
    "diff": "Easy",
    "explain": "Paul notes that the love of money (greed) is the root of all evil."
  },
  {
    "q": "Where did Moses receive the stone law tablets?",
    "opts": [
      "Mount Sinai",
      "Mount Nebo",
      "Mount Ararat",
      "Mount Hermon"
    ],
    "answer": 0,
    "ref": "Exodus 19-20",
    "cat": "General",
    "diff": "Easy",
    "explain": "The ten commandments were delivered on Mount Sinai in Arabia."
  },
  {
    "q": "Who is identified as the first human in Genesis?",
    "opts": [
      "Adam",
      "Eve",
      "Cain",
      "Seth"
    ],
    "answer": 0,
    "ref": "Genesis 2",
    "cat": "General",
    "diff": "Easy",
    "explain": "Adam was formed from the clay of the ground by God."
  },
  {
    "q": "What does the Greek word 'Apocalypse' translate to?",
    "opts": [
      "Unveiling or Revelation",
      "End of the World",
      "Great destruction",
      "Voice of fire"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Apocalypse translates literally to an unveiling or dramatic revelation."
  },
  {
    "q": "What feast remembers the escape of Israel from Egyptian slavery?",
    "opts": [
      "Passover",
      "Pentecost",
      "Tabernacles",
      "Purim"
    ],
    "answer": 0,
    "ref": "Exodus 12",
    "cat": "General",
    "diff": "Easy",
    "explain": "Passover is the annual celebration marking the angelic deliverance of Israel."
  },
  {
    "q": "How many books comprise the traditional Bible?",
    "opts": [
      "66",
      "39",
      "27",
      "70"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The standard Protestant Bible contains exactly 66 books."
  },
  {
    "q": "In what chapter is the shortest psalm (Psalm 117)?",
    "opts": [
      "Psalm 117",
      "Psalm 23",
      "Psalm 1",
      "Psalm 150"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Psalm 117 has only 2 verses, making it the shortest Psalm."
  },
  {
    "q": "What is the beginning of wisdom according to Proverbs?",
    "opts": [
      "Fear of the Lord",
      "Extensive studies",
      "Listening to friends",
      "Self-confidence"
    ],
    "answer": 0,
    "ref": "Proverbs 9:10",
    "cat": "General",
    "diff": "Easy",
    "explain": "The awe-filled fear of Yavneh is the initiation of true wisdom."
  },
  {
    "q": "What is the golden city described at the very end of Revelation?",
    "opts": [
      "New Jerusalem",
      "Babylon",
      "Rome",
      "Zion"
    ],
    "answer": 0,
    "ref": "Revelation 21",
    "cat": "General",
    "diff": "Easy",
    "explain": "The holy city, New Jerusalem, is pictured with golden roads."
  },
  {
    "q": "How many historical record books are in the New Testament?",
    "opts": [
      "1 book (Acts)",
      "4 books",
      "12 books",
      "None"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "Acts of the Apostles serves as the single historical narrative of the New Testament."
  },
  {
    "q": "What does the title 'Christ' mean in Greek?",
    "opts": [
      "Anointed One",
      "Savior",
      "Teacher",
      "Lord"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Christ is derived from the Greek 'Christos', meaning Anointed One."
  },
  {
    "q": "What does the name 'Abraham' translate as?",
    "opts": [
      "Father of many nations",
      "Exalted prince",
      "Beloved son",
      "Leader of armies"
    ],
    "answer": 0,
    "ref": "Genesis 17:5",
    "cat": "General",
    "diff": "Easy",
    "explain": "Abraham represents fatherhood over a great multitude / nations."
  },
  {
    "q": "Who represent the three patriarchs of Israel?",
    "opts": [
      "Abraham, Isaac, and Jacob",
      "Noah, Daniel, and Job",
      "Moses, Aaron, and Joshua",
      "David, Solomon, and Josiah"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The covenant was repeatedly established through Abraham, Isaac, and Jacob."
  },
  {
    "q": "What is the Word of God compared to path-wise in Psalm 119?",
    "opts": [
      "A lamp to feet and light to path",
      "A sword and shield",
      "A mountain stream",
      "A heavy wall"
    ],
    "answer": 0,
    "ref": "Psalm 119:105",
    "cat": "General",
    "diff": "Easy",
    "explain": "Thy word is a lamp unto my feet, and a light unto my path."
  },
  {
    "q": "What does word 'Bible' translate from in its Greek origin (biblia)?",
    "opts": [
      "Books or scrolls",
      "Holy covenants",
      "Truths of heaven",
      "Voice of God"
    ],
    "answer": 0,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "Biblia means books, originating from Biblos (papyrus/scroll place)."
  },
  {
    "q": "Which minor prophet is noted for his short single-chapter vision against Edom?",
    "opts": [
      "Obadiah",
      "Habakkuk",
      "Zephaniah",
      "Haggai"
    ],
    "answer": 0,
    "ref": "Obadiah 1",
    "cat": "General",
    "diff": "Hard",
    "explain": "Obadiah contains 21 verses warning Edom of their hostile deeds."
  },
  {
    "q": "What is the name of the valley where David fought Goliath?",
    "opts": [
      "Valley of Elah",
      "Valley of Jezreel",
      "Valley of Kidron",
      "Valley of Hinnom"
    ],
    "answer": 0,
    "ref": "1 Samuel 17:2",
    "cat": "General",
    "diff": "Medium",
    "explain": "Saul and the men of Israel gathered and encamped in the Valley of Elah."
  },
  {
    "q": "Which book of the Bible contains the shortest verse 'Jesus wept'?",
    "opts": [
      "John",
      "Luke",
      "Matthew",
      "Mark"
    ],
    "answer": 0,
    "ref": "John 11:35",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John 11:35, containing only two words in English ('Jesus wept'), is famous for being the shortest verse in the Bible."
  },
  {
    "q": "What did John the Baptist eat while in the wilderness?",
    "opts": [
      "Wild honey and locusts",
      "Bread and fish",
      "Manna and quail",
      "Figs and grapes"
    ],
    "answer": 0,
    "ref": "Matthew 3:4",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "John the Baptist wore clothing of camel's hair and his food was locusts and wild honey."
  },
  {
    "q": "Which apostle was a tax collector before being called by Jesus?",
    "opts": [
      "Peter",
      "Andrew",
      "Matthew",
      "Thomas"
    ],
    "answer": 2,
    "ref": "Matthew 9:9",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Matthew (also called Levi) was sitting at the tax collector's booth when Jesus called him to be an apostle."
  },
  {
    "q": "Where was Jesus born?",
    "opts": [
      "Nazareth",
      "Jerusalem",
      "Bethlehem",
      "Capernaum"
    ],
    "answer": 2,
    "ref": "Matthew 2:1",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus was born in Bethlehem of Judea, in fulfillment of Micah's prophecy."
  },
  {
    "q": "What was the name of the garden where Jesus prayed before His arrest?",
    "opts": [
      "Garden of Eden",
      "Garden of Gethsemane",
      "Garden of Carmel",
      "Garden of Sharon"
    ],
    "answer": 1,
    "ref": "Matthew 26:36",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus went with His disciples to a place called Gethsemane on the Mount of Olives to pray in agony."
  },
  {
    "q": "Which king asked for wisdom instead of long life or wealth?",
    "opts": [
      "Saul",
      "David",
      "Solomon",
      "Hezekiah"
    ],
    "answer": 2,
    "ref": "1 Kings 3:9",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Solomon pleased God by asking for an understanding heart to discern between good and evil instead of riches or honor."
  },
  {
    "q": "Who was Moses' sister?",
    "opts": [
      "Miriam",
      "Ruth",
      "Esther",
      "Sarah"
    ],
    "answer": 0,
    "ref": "Numbers 26:59",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Miriam was the older sister of Aaron and Moses, who led the women in celebration after crossing the Red Sea."
  },
  {
    "q": "Which of the twelve tribes of Israel was appointed to care for the Tabernacle and serve as priests?",
    "opts": [
      "Judah",
      "Levi",
      "Benjamin",
      "Reuben"
    ],
    "answer": 1,
    "ref": "Numbers 3:5-10",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "The Levites were selected by God to perform service at the Tabernacle and assist the priests."
  },
  {
    "q": "How many books are there in the standard Protestant Old Testament?",
    "opts": [
      "27",
      "39",
      "46",
      "66"
    ],
    "answer": 1,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Medium",
    "explain": "There are 39 books in the Old Testament and 27 in the New Testament, totaling 66 books in the Protestant Bible."
  },
  {
    "q": "On what day of creation did God create the sun, moon, and stars?",
    "opts": [
      "First day",
      "Second day",
      "Third day",
      "Fourth day"
    ],
    "answer": 3,
    "ref": "Genesis 1:14-19",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "God made the two great lights and stars on the fourth day to separate day from night and mark seasons, days, and years."
  },
  {
    "q": "What instrument did David play to soothe King Saul's troubled spirit?",
    "opts": [
      "Harp",
      "Trumpet",
      "Flute",
      "Cymbals"
    ],
    "answer": 0,
    "ref": "1 Samuel 16:23",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Whenever the troubling spirit came upon Saul, David would take his harp and play, and Saul would feel refreshed and well."
  },
  {
    "q": "Who was thrown into a den of lions for praying to his God?",
    "opts": [
      "Shadrach",
      "Meshach",
      "Daniel",
      "Abednego"
    ],
    "answer": 2,
    "ref": "Daniel 6",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Daniel was thrown into the lions' den under King Darius's decree, but an angel shut the lions' mouths."
  },
  {
    "q": "In what language was most of the New Testament originally written?",
    "opts": [
      "Hebrew",
      "Latin",
      "Greek",
      "Aramaic"
    ],
    "answer": 2,
    "ref": "General Knowledge",
    "cat": "General",
    "diff": "Easy",
    "explain": "The New Testament was written in Koine Greek, which was the common language of the Mediterranean world at the time."
  },
  {
    "q": "Who was the first Christian martyr recorded in the book of Acts?",
    "opts": [
      "Stephen",
      "James",
      "Peter",
      "Paul"
    ],
    "answer": 0,
    "ref": "Acts 7:54-60",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Stephen, a deacon full of faith and power, was stoned to death for his witness to Christ."
  },
  {
    "q": "Which book of the Bible is known for its collection of wise sayings and instructions for living?",
    "opts": [
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "Song of Solomon"
    ],
    "answer": 1,
    "ref": "Proverbs 1",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Proverbs is a collection of moral and religious instruction, mostly written by King Solomon, to teach wisdom and discipline."
  },
  {
    "q": "Who was the first high priest of Israel?",
    "opts": [
      "Moses",
      "Aaron",
      "Eleazar",
      "Samuel"
    ],
    "answer": 1,
    "ref": "Exodus 28:1",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Aaron, Moses' brother, was designated by God to serve as the first High Priest of the nation of Israel."
  },
  {
    "q": "Where was Paul (then Saul) traveling when he saw a bright light and heard the voice of Jesus?",
    "opts": [
      "Jerusalem",
      "Rome",
      "Damascus",
      "Athens"
    ],
    "answer": 2,
    "ref": "Acts 9:3",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "As Saul neared Damascus on his journey, a light from heaven flashed around him, leading to his conversion."
  },
  {
    "q": "Who was the first king of Israel?",
    "opts": [
      "David",
      "Solomon",
      "Saul",
      "Jeroboam"
    ],
    "answer": 2,
    "ref": "1 Samuel 10:1",
    "cat": "Old Testament",
    "diff": "Easy",
    "explain": "Saul, son of Kish, of the tribe of Benjamin, was anointed by Samuel as the first king of Israel."
  },
  {
    "q": "What was the first miracle performed by Jesus recorded in the Gospel of John?",
    "opts": [
      "Healed a blind man",
      "Walked on water",
      "Turned water into wine",
      "Raised Lazarus from the dead"
    ],
    "answer": 2,
    "ref": "John 2:1-11",
    "cat": "New Testament",
    "diff": "Easy",
    "explain": "Jesus turned water into high-quality wine at a wedding feast in Cana of Galilee, revealing His glory."
  },
  {
    "q": "Which prophet confronted King David about his sin with Bathsheba?",
    "opts": [
      "Nathan",
      "Samuel",
      "Elijah",
      "Elisha"
    ],
    "answer": 0,
    "ref": "2 Samuel 12",
    "cat": "Old Testament",
    "diff": "Medium",
    "explain": "Nathan the prophet used a parable of a rich man stealing a poor man's lamb to reveal David's transgression."
  }
];
