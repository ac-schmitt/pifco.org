data_movement = [
    {
        title: "Move",
        icon: "run",
        subtitle: "Bewegen",
        description: "Movement cost: 1:1 your speed | Bewegungskosten: 1:1 deine Geschwindigkeit",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/playing-the-game#MovementandPosition'>Movement and Position</a>",
        bullets: [
            "On your turn, you can move a distance equal to your Speed or less. Or you can decide not to move.",
            "Your movement can include climbing, crawling, jumping, swimming or even flying.",
            "These different modes of movement can be combined with your regular movement, or they can constitute your entire move.",
            "You can break up your move, using some of its movement before and after any action, Bonus Action, or Reaction you take on the same turn.",
            "TODO: move",
            "You can move through a nonhostile creature's space.",
            "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Another creature's space is difficult terrain for you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
        ],
        bullets_de: [
            "Wenn du mehr als eine Bewegungsrate hast, so wie deine herkömmliche und eine Flugbewegungsrate, kannst du während deiner Bewegung zwischen ihnen hin und her wechseln. Wann immer du wechselst, zieh die Gesamtdistanz, die du dich bisher bewegt hast, von der aktiven Bewegungsrate ab",
			"Du kannst dich durch den Bereich einer nicht-feindlichen Kreatur bewegen",
			"Du kannst dich nur dann durch den Bereich einer feindlichen Kreatur bewegen, wenn sie mindestens zwei Größenkategorien größer oder kleiner als du ist",
			"Der Bereich einer anderen Kreatur ist für dich <i>Schwieriges Gelände</i>",
            "Du kannst deinen Zug nicht willentlich im Bereich einer Kreatur beenden, egal ob sie Freund oder Feind ist."
        ]
    },
    {
        title: "Climbing",
        icon: "crags",
        subtitle: "Klettern",
        description: "Movement cost: +1 extra ft each ft | Bewegungskosten: +1 extra ft Bewegung pro 1 ft Strecke",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Climbing'>Climbing</a>",
        bullets: [
            "Climbing a slippery surface or one with few handholds might require a successful DC 15 Strength (Athletics) check."
        ],
        bullets_de: [
            "Kann eine Probe auf Stärke (Athletik) mit SG 15 beinhalten, wenn die Strecke schwierig zu klettern ist"
        ]
    },
    {
        title: "Crawling",
        icon: "crawl",
        subtitle: "Kriechen",
        description: "Movement cost: +1 extra ft each ft. | Bewegungskosten: +1 extra ft. Bewegung pro 1 ft Strecke",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Crawling'>Crawling</a>",
        bullets: [

        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Hochsprung",
        description: "Movement cost: 1ft per 1ft jumped | Bewegungskosten: 1ft Bewegung pro 1ft Höhe",        
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HighJump'>HighJump</a>",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ],
        bullets_de: [
            "Du springst eine Distanz in die Höhe, die <b>(3 + deinen Stärkemodifikator)</b> in Fuß entspricht, wenn du dich direkt vor dem Sprung mindestens 10 Fuß bewegt hast.",
			"Ohne Anlauf springst du halb so hoch",
            "Während dem Sprung kannst du deine Arme um die Hälfte deiner Körpergröße ausstrecken",
            "Unter Umständen erlaubt dein DM eine Probe auf Stärke (Athletik) um höher zu springen, als es normalerweise möglich wäre."
        ]
    },
    {
        title: "Long jump",
        icon: "wingfoot",
        subtitle: "Weitsprung",
        description: "Movement cost: 1ft per 1ft jumped | Bewegungskosten: 1ft Bewegung pro 1ft Weite",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#LongJump'>LongJump</a>",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ],
        bullets_de: [
            "Du springst eine Distanz weit, die deinem <b>(Stärkewert)</b> in Fuß entspricht, wenn du dich direkt vor dem Sprung mindestens 10 Fuß bewegt hast.",
			"Ohne Anlauf springst du halb so weit",
			"Kann eine Probe auf Stärke (Athletik) gegen SG 10 beinhalten, um ein niederes Hindernis (nicht höher als ein Viertel der Sprungdistanz) zu überspringen. Du triffst das Hindernis bei einer fehlgeschlagenen Probe.",
            "Kann eine Probe auf Geschicklichkeit (Akrobatik) gegen SG 10 beinhalten, um in schwierigem Gelände auf den Füßen zu landen. Du erhältst den Zustand <i>Liegend</i> bei einer fehlgeschlagenen Probe.",
        ]
    },
    {
        title: "Swimming",
        icon: "at-sea",
        subtitle: "Schwimmen",
        description: "Movement cost: +1 extra ft each ft. | Bewegungskosten: +1 extra ft. Bewegung pro 1 ft Strecke",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Swimming'>Swimming</a>",
        bullets: [
            "Moving any distance in rough water might require a successful DC 15 Strength (Athletics) check."
        ],
        bullets_de: [
            "Kann eine Probe auf Stärke (Athletik) gegen SG 15 beinhalten, wenn die Strecke schwierig zu schwimmen ist"
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Schwieriges Gelände",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/playing-the-game#DifficultTerrain'>Difficult Terrain</a>",
        description: "Every foot of movement in Difficult Terrain costs 1 extra foot | Bewegungskosten: +1 extra ft Bewegung pro 1 ft Strecke",
        bullets: [

        ]
    },
    {
        title: "Dropping prone",
        icon: "falling",
        subtitle: "Fallen",
        description: "Movement cost: 0ft (free) | Bewegungskosten: 0ft (kostenlos)",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/playing-the-game#DroppingProne'>Dropping Prone</a>",
        bullets: [
            "On your turn, you can give yourself the <i>Prone</i> condition without using an action or any of your Speed, but you can’t do so if your Speed is 0."
        ],
        bullets_de: [
            "Wenn du am Zug bist, kannst du dich in den Zustand <i>Liegend</i> versetzen, ohne eine Aktion oder deine Bewegung zu benutzen, aber du kannst dies nicht tun, wenn deine Geschwindigkeit 0 ist"
        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Aufstehen",
        description: "Movement cost: half of your speed | Bewegungskosten: Hälfte deiner vollen Bewegungsrate",
        reference: "Free Rules: Restricted Movement of the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ProneCondition'>Prone Condition</a>",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ],
        bullets_de: [
            "Wenn deine Geschwindigkeit 0 ist, oder du nicht mehr genügend Bewegungsrate übrig hast, kannst du nicht aufstehen"
        ]
    },
    {
        title: "Drag or Carry",
        icon: "grab",
        subtitle: "Ziehen oder Tragen",
        description: "Movement cost: +1 extra ft each ft. | Bewegungskosten: +1 extra ft. Bewegung pro 1 ft Strecke",
        reference: "Free Rules: Movable of the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#GrappledCondition'>Grappled Condition</a>",
        bullets: [
            "If you drag or carry a create a tiny creature or a create two sizes smaller than you, you don't have to pay extra movement cost.",
        ],
        bullets_de: [
            "Wenn du eine Kreatur im Haltegriff hast, die zwei oder mehr Größenkategorien kleiner als du ist, musst du keine Extra-Bewegungskosten aufbringen.",
        ]
    }
]
