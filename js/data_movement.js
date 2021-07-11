data_movement = [
    {
        title: "Move",
        icon: "run",
        subtitle: "Bewegen",
        description: "Movement cost: 5ft per 5ft moved | Bewegungskosten: 5ft Bewegung pro 5ft Strecke",
        reference: "PHB, pg. 190.",
        bullets: [
            "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
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
        title: "Climb",
        icon: "crags",
        subtitle: "Klettern",
        description: "Movement cost: 10ft per 5ft climbed | Bewegungskosten: 10ft Bewegung pro 5ft Strecke",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult"
        ],
        bullets_de: [
            "Kann eine Probe auf Stärke (Athletik) beinhalten, wenn die Strecke schwierig zu klettern ist"
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Schwimmen",
        description: "Movement cost: 10ft per 5ft swum | Bewegungskosten: 10ft Bewegung pro 5ft Strecke",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult"
        ],
        bullets_de: [
            "Kann eine Probe auf Stärke (Athletik) beinhalten, wenn die Strecke schwierig zu schwimmen ist"
        ]
    },
    {
        title: "Drop prone",
        icon: "falling",
        subtitle: "Fallen",
        description: "Movement cost: 0ft (free) | Bewegungskosten: 0ft (kostenlos)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "You can drop prone without using any of your speed",
            "To move while prone, you must crawl or use magic such as teleportation",
            "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)"
        ],
        bullets_de: [
            "Du kannst fallen oder dich absichtlich zu Boden werfen ohne deine Bewegungsrate aufzubrauchen",
			"Du erhältst den Zustand <i>Liegend</i> (Nahkampfangriffe gegen dich haben Vorteil, Fernkampfangriffe haben Nachteil, deine eigenen Angriffe haben Nachteil)",
			"Um sich liegend zu bewegen, musst du kriechen oder Magie (wie Teleportation) nutzen",
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Kriechen",
        description: "Movement cost: 10ft per 5ft crawled | Bewegungskosten: 10ft Bewegung pro 5ft Strecke",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Stand up",
        icon: "strong",
        subtitle: "Aufstehen",
        description: "Movement cost: half of your speed | Bewegungskosten: Hälfte deiner vollen Bewegungsrate",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "You can't stand up if you don't have enough movement left or if your speed is 0"
        ],
        bullets_de: [
            "Wenn deine Geschwindigkeit 0 ist, oder du nicht mehr genügend Bewegungsrate übrig hast, kannst du nicht aufstehen"
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Hochsprung",
        description: "Movement cost: 5ft per 5ft jumped | Bewegungskosten: 5ft Bewegung pro 5ft Strecke",        
        reference: "PHB, pg. 182.",
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
        description: "Movement cost: 5ft per 5ft jumped | Bewegungskosten: 5ft Bewegung pro 5ft Strecke",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ],
        bullets_de: [
            "Du springst eine Distanz weit, die deinem <b>(Stärkewert)</b> in Fuß entspricht, wenn du dich direkt vor dem Sprung mindestens 10 Fuß bewegt hast.",
			"Ohne Anlauf springst du halb so weit",
			"Kann eine Probe auf Stärke (Athletik) gegen HG 10 beinhalten, um ein niederes Hindernis (nicht höher als ein Viertel der Sprungdistanz) zu überspringen. Du triffst das Hindernis bei einer fehlgeschlagenen Probe.",
            "Kann eine Probe auf Geschicklichkeit (Akrobatik) gegen HG 10 beinhalten, um in schwierigem Gelände auf den Füßen zu landen. Du erhältst den Zustand <i>Liegend</i> bei einer fehlgeschlagenen Probe.",
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Improvisiere",
        description: "Perform any movement or stunt you can imagine | Führe jede Bewegung und jedes Kunststück aus, das du dir vorstellen kannst",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ],
        bullets_de: [
            "Wenn du eine Bewegung beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Schwieriges Gelände",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement | Bewegungskosten: Zusätzlich +5ft Bewegung pro 5ft Strecke",
        bullets: [
        ],
        bullets_de: [
			"Bewegung in schwierigem Gelände kostet zusätzlich 5ft Bewegung pro 5ft zurück gelegter Strecke",
			"Das gilt unabhängig von anderen Änderungen der Bewegungskosten",
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Ringend bewegen",
        description: "Drag or carry the grappled creature with you | Ziehe oder trage eine gepackte Kreatur mit dir",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ],
        bullets_de: [
            "Wenn du dich bewegst während du eine Kreatur im Haltegriff hast, ist deine Geschwindigkeit halbiert, es sei denn, die Kreatur ist zwei oder mehr Größenkategorien kleiner als du",
        ]
    }
]
