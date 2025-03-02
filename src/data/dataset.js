const dataset = [
    {
        "city": "Paris",
        "country": "France",
        "clues": [
            "This city is home to a famous tower that sparkles every night.",
            "Known as the 'City of Love' and a hub for fashion and art."
        ],
        "fun_fact": [
            "The Eiffel Tower was supposed to be dismantled after 20 years but was saved because it was useful for radio transmissions!",
            "Paris has only one stop sign in the entire city—most intersections rely on priority-to-the-right rules."
        ],
        "trivia": [
            "This city is famous for its croissants and macarons. Bon appétit!",
            "Paris was originally a Roman city called Lutetia."
        ]
    },
    {
        "city": "Tokyo",
        "country": "Japan",
        "clues": [
            "This city has the busiest pedestrian crossing in the world.",
            "You can visit an entire district dedicated to anime, manga, and gaming."
        ],
        "fun_fact": [
            "Tokyo was originally a small fishing village called Edo before becoming the bustling capital it is today!",
            "More than 14 million people live in Tokyo, making it one of the most populous cities in the world."
        ],
        "trivia": [
            "The city has over 160,000 restaurants, more than any other city in the world.",
            "Tokyo’s subway system is so efficient that train delays of just a few minutes come with formal apologies."
        ]
    },
    {
        "city": "New York",
        "country": "USA",
        "clues": [
            "Home to a green statue gifted by France in the 1800s.",
            "Nicknamed 'The Big Apple' and known for its Broadway theaters."
        ],
        "fun_fact": [
            "The Statue of Liberty was originally a copper color before oxidizing to its iconic green patina.",
            "Times Square was once called Longacre Square before being renamed in 1904."
        ],
        "trivia": [
            "New York City has 468 subway stations, making it one of the most complex transit systems in the world.",
            "The Empire State Building has its own zip code: 10118."
        ]
    },
    {
        "city": "London",
        "country": "England",
        "clues": [
            "This city is known for its famous clock tower, now called the Elizabeth Tower.",
            "It is home to Buckingham Palace and the British monarchy."
        ],
        "fun_fact": [
            "Big Ben is the nickname for the Great Bell inside the Elizabeth Tower, not the clock or tower itself.",
            "London's famous red buses have been a symbol of the city since 1956."
        ],
        "trivia": [
            "London has a secret 'Mail Rail' that was used to transport post around the city underground until 2003.",
            "The London Eye was once the world’s largest observation wheel when it opened in 2000."
        ]
    },
    {
        "city": "Sydney",
        "country": "Australia",
        "clues": [
            "This city is home to a world-famous opera house with distinctive sails.",
            "It hosts one of the biggest New Year's Eve firework displays in the world."
        ],
        "fun_fact": [
            "The Sydney Opera House was designed to look like the sails of a ship.",
            "Sydney’s famous Bondi Beach is one of the world’s most iconic surfing spots."
        ],
        "trivia": [
            "Sydney was the site of the first European settlement in Australia in 1788.",
            "The Sydney Harbour Bridge was once painted every 7 years but now requires constant maintenance."
        ]
    },
    {
        "city": "Rome",
        "country": "Italy",
        "clues": [
            "This city is home to the ancient Colosseum and the Vatican City.",
            "Known for its iconic fountains and historical ruins."
        ],
        "fun_fact": [
            "Rome has more fountains than any other city in the world, with over 280!",
            "The Vatican City is the smallest country in the world by both population and area."
        ],
        "trivia": [
            "The Colosseum was used for gladiator contests and public spectacles like animal hunts.",
            "Rome was founded in 753 BC, according to legend by the twin brothers Romulus and Remus."
        ]
    },
    {
        "city": "Berlin",
        "country": "Germany",
        "clues": [
            "This city is known for its iconic wall that divided it during the Cold War.",
            "Home to the Brandenburg Gate, a symbol of Germany's reunification."
        ],
        "fun_fact": [
            "The Berlin Wall fell in 1989, and remnants of it can still be found around the city.",
            "The Brandenburg Gate was originally built as a symbol of peace, not division."
        ],
        "trivia": [
            "Berlin is famous for its currywurst, a sausage served with curry ketchup.",
            "The Berlin Zoo is one of the oldest zoos in the world, founded in 1844."
        ]
    },
    {
        "city": "Rio de Janeiro",
        "country": "Brazil",
        "clues": [
            "This city is famous for its giant Christ the Redeemer statue.",
            "Known for its vibrant Carnival celebrations with samba dancers."
        ],
        "fun_fact": [
            "The Christ the Redeemer statue is one of the New Seven Wonders of the World.",
            "Rio's Carnival attracts millions of visitors every year, making it one of the largest festivals in the world."
        ],
        "trivia": [
            "The Copacabana beach in Rio is one of the most famous beaches in the world.",
            "Rio was the capital of Brazil until 1960, when it was replaced by Brasília."
        ]
    },
    {
        "city": "Moscow",
        "country": "Russia",
        "clues": [
            "This city is home to the famous Red Square and the Kremlin.",
            "Known for its onion-domed churches and rich history."
        ],
        "fun_fact": [
            "The Moscow Metro is one of the busiest metro systems in the world and is known for its beautiful stations.",
            "The Kremlin has been the official residence of Russian leaders for centuries."
        ],
        "trivia": [
            "Moscow has over 1,000 churches, making it one of the most religious cities in the world.",
            "The city has a 'metro-2' system, which is a secret underground subway system used by the government."
        ]
    },
    {
        "city": "Cairo",
        "country": "Egypt",
        "clues": [
            "This city is home to the Great Pyramids and the Sphinx.",
            "It is known for its rich history dating back thousands of years."
        ],
        "fun_fact": [
            "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World and is the only one still standing.",
            "Cairo is home to one of the largest and most famous bazaars in the world, Khan El Khalili."
        ],
        "trivia": [
            "Cairo is known for its ancient Egyptian museums, including the Egyptian Museum, which houses thousands of artifacts.",
            "The Nile River, which runs through Cairo, is the longest river in the world."
        ]
    },
    {
        "city": "Cape Town",
        "country": "South Africa",
        "clues": [
            "This city is home to the iconic Table Mountain.",
            "Known for its stunning beaches and proximity to vineyards."
        ],
        "fun_fact": [
            "Table Mountain is one of the New Seven Wonders of Nature.",
            "Cape Town was originally known as the 'Cape of Good Hope.'"
        ],
        "trivia": [
            "Cape Town is often considered one of the most beautiful cities in the world due to its scenic views.",
            "The city has one of the richest biodiversity zones in the world, including many endemic species."
        ]
    },
    {
        "city": "Athens",
        "country": "Greece",
        "clues": [
            "This city is famous for its ancient Parthenon temple on top of a hill.",
            "Known as the cradle of Western civilization and philosophy."
        ],
        "fun_fact": [
            "The Parthenon was originally painted in bright colors, but over time, the paint has faded.",
            "Athens is the birthplace of democracy and many key philosophical ideas."
        ],
        "trivia": [
            "The Acropolis in Athens is one of the most visited archaeological sites in the world.",
            "The city of Athens is over 3,400 years old!"
        ]
    },
    {
        "city": "Bangkok",
        "country": "Thailand",
        "clues": [
            "This city is known for its ornate temples and vibrant street life.",
            "Famous for its floating markets and delicious street food."
        ],
        "fun_fact": [
            "The Grand Palace in Bangkok is a massive complex of buildings, including temples and royal residences.",
            "Bangkok's official name is one of the longest place names in the world, consisting of 163 characters!"
        ],
        "trivia": [
            "Bangkok is known for its street food, especially dishes like Pad Thai and Som Tum (spicy papaya salad).",
            "The Chao Phraya River runs through Bangkok and is central to the city's economy and transportation."
        ]
    },
    {
        "city": "Mexico City",
        "country": "Mexico",
        "clues": [
            "This city sits on the ruins of the ancient Aztec capital, Tenochtitlán.",
            "Known for its vibrant culture and rich history."
        ],
        "fun_fact": [
            "Mexico City was built on a lake, and the ruins of Tenochtitlán can still be seen in parts of the city.",
            "The city has the largest number of museums in the world, even more than Paris or New York."
        ],
        "trivia": [
            "Mexico City is one of the highest capitals in the world, sitting at over 7,300 feet above sea level.",
            "The city is home to the famous Frida Kahlo Museum, housed in the artist's former home."
        ]
    },
    {
        "city": "Dubai",
        "country": "United Arab Emirates",
        "clues": [
            "This city is known for its modern architecture and the world's tallest building.",
            "Famous for its luxury shopping malls and man-made islands."
        ],
        "fun_fact": [
            "The Burj Khalifa in Dubai is the tallest building in the world, standing at 828 meters.",
            "Dubai's Palm Jumeirah is an artificial archipelago created in the shape of a palm tree."
        ],
        "trivia": [
            "Dubai is home to the world’s largest indoor ski resort, Ski Dubai.",
            "The city has no natural rivers and relies on desalination for its water supply."
        ]
    },
    {
        "city": "Seoul",
        "country": "South Korea",
        "clues": [
            "This city is known for its high-tech culture and ancient palaces.",
            "Home to the world’s fastest internet speeds."
        ],
        "fun_fact": [
            "Seoul is one of the top tech hubs in the world, with major companies like Samsung and LG headquartered here.",
            "The city has a secret underground shopping street known as the 'Gwangjang Market.'"
        ],
        "trivia": [
            "Seoul is a 24-hour city, with most restaurants and stores open late into the night.",
            "The city has more than 1000 temples, many of which are over a thousand years old."
        ]
    }
]


export default dataset;
