data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Angriff",
        description: "Perform a melee or ranged attack with your weapon | Vollführe einen Nah- oder Fernkampfangriff mit deiner Waffe",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ],
        bullets_de: [
            "Bestimmte Merkmale, wie zum Beispiel der <i>Zusätzliche Angriff</i> des Kämpfers, erlauben mehr als einen Angriff mit dieser Aktion auszuführen. Jeder dieser Angriffe ist ein eigener Angriffswurf und kann sich gegen eine andere Kreatur richten. Du kannst dich zwischen den Angriffen bewegen.",
			"Wenn du mit einer leichten Nahkampfwaffe angreifst, kannst du eine Bonusaktion verwenden, um mit einer zweiten leichten Nahkampfwaffe in deiner anderen Hand anzugreifen (siehe die Bonusaktion <i>Angriff mit Zweitwaffe</i>).",
            "Du kannst einen deiner Nahkampfangriffe durch die <i>Ringen</i>- oder <i>Stoßen</i>-Aktion ersetzen.",
            "Manche Zustände gewähren Vorteil auf einen Angriff: Angriffe gegen blinde, gelähmte, versteinerte, festgesetzte, betäubte oder bewusstlose Ziele; Nahkampfangriffe gegen liegende Ziele; Angriffe durch unsichtbare oder versteckte Angreifer.",
            "Manche Zustände gewähren Nachteil auf einen Angriff: Angriffe gegen unsichtbare oder versteckte Ziele; Fernkampfangriffe gegen liegende Ziele; Angriffe durch blinde, verängstigte, vergiftete oder festgesetzte Angreifer." 
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Ringen",
        description: "Attempt to grab a creature or wrestle with it | Versuche eine Kreatur zu packen oder ringe mit ihr",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ],
        bullets_de: [
            "Du kannst die <i>Angriff</i>-Aktion für einen speziellen Nahkampfangriff verwenden, das Ringen. Wenn du in der Lage bist mehrere Angriffe mit der <i>Angriff</i>-Aktion zu machen, ersetzt dieser Angriff einen davon.",
            "Das Ziel, mit dem du ringst, darf nicht mehr als eine Größenkategorie größer als du sein und muss sich innerhalb deiner Reichweite befinden.",
			"Mit mindestens einer freien Hand versuchst du das Ziel mit einer Ringen-Probe zu packen. Du wirfst dazu eine Probe auf Stärke (Athletik), die von deinem Ziel mit einer Probe auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) - dein Ziel hat die Wahl - gekontert wird.",
			"Wenn du erfolgreich bist, erhält dein Ziel den <i>Gepackt</i> Zustand (seine Geschwindigkeit ist 0)."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Stoßen",
        description: "Shove a creature, either to knock it prone or push it away from you | Stoße eine Kreatur, entweder um sie zu Boden zu werfen oder von dir fort zu schieben",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ],
        bullets_de: [
            "Du kannst die <i>Angriff</i>-Aktion für einen speziellen Nahkampfangriff verwenden, das Stoßen. Wenn du in der Lage bist mehrere Angriffe mit der <i>Angriff</i>-Aktion zu machen, ersetzt dieser Angriff einen davon.",
            "Das Ziel, das du stößt, darf nicht mehr als eine Größenkategorie größer als du sein und muss sich innerhalb deiner Reichweite befinden.",
            "Du wirfst dazu eine Probe auf Stärke (Athletik), die von deinem Ziel mit einer Probe auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) - dein Ziel hat die Wahl - gekontert wird.",
			"Wenn du erfolgreich bist, erhält dein Ziel entweder den <i>Liegend</i> Zustand oder du schiebst es 5 Fuß von dir weg."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Zauberwirken",
        description: "Cast a spell with a casting time of 1 action | Wirke einen Zauberspruch mit einer Zauberzeit von 1 Aktion",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ],
        bullets_de: [
            "Du kannst mit deiner Aktion keinen Zauberspruch wirken, während du gleichzeitig einen anderen Zauberspruch mit deiner Bonusaktion wirkst, es sei denn, die Aktion wird für einen Zaubertrick verwendet.",
			"Das Ziel eines Zauberspruchs muss innerhalb der Reichweite des Zauberspruchs sein. Um zu zielen muss der Pfad zwischen dir und dem Ziel frei sein, d.h. das Ziel darf nicht hinter voller Deckung sein.",
			"Zaubersprüche mit Material-Komponenten verbrauchen das Material nicht, sofern dies nicht explizit angegeben ist. Wenn keine Kosten für das Material angegeben sind, kannst du annehmen, dass die Kosten vernachlässigbar sind und dass das Material in deiner Komponententasche verfügbar ist.",
            "Manche Zaubersprüche erfordern, dass du Konzentration aufrecht erhältst um ihre Magie aktiv zu halten. Wenn du die Konzentration verlierst, endet ein solcher Zauberspruch. Du verlierst die Konzentration, wenn du einen anderen Spruch wirkst, der ebenfalls Konzentration erfordert, oder wenn du kampfunfähig bist. Jedes Mal, wenn du Schaden nimmst, musst du eine Probe auf Konstitution werfen. Der Herausforderungsgrad entspricht 10 oder der Hälfte des Schadens, den du nimmst, je nachdem was höher ist.",
			"Zaubersprüche mit einer Zauberzeit von mehr als 1 Aktion müssen über mehrere Runden gezaubert werden, bis die Zauberzeit erreicht ist. Dazu wendest du in jeder Runde deine Aktion auf. Während dieser Zeit musst du Konzentration aufrecht erhalten. Schaffst du es nicht die Konzentration zu halten, bricht der Zauber ab, aber es wird kein Zauberplatz verbraucht."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Spurt",
        description: "Gain extra movement for the current turn | Erhalte zusätzliche Bewegung für den aktuellen Zug",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ],
        bullets_de: [
            "Die Erhöhung entspricht deiner Geschwindigkeit, nachdem alle Bonus angerechnet wurden."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Rückzug",
        description: "Prevent opportunity attacks | Verhindere Gelegenheitsangriffe",
        reference: "PHB, pg. 192.",
        bullets: [
            "Your movement doesn't provoke opportunity attacks for the rest of the turn."
        ],
        bullets_de: [
            "Deine Bewegung löst für den Rest deines Zuges keine Gelegenheitsangriffe aus."
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Ausweichen",
        description: "Focus entirely on avoiding attacks | Konzentriere dich darauf Angriffen auszuweichen",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ],
        bullets_de: [
            "Bis zum Start deines nächsten Zuges ist jeder Angriff gegen dich im Nachteil, wenn du den Angreifer sehen kannst. Außerdem machst du Geschicklichkeits-Rettungswürfe mit Vorteil.",
			"Du verlierst diese Vorteile, wenn du <i>kampfunfähig</i> wirst oder wenn deine Geschwindigkeit auf 0 fällt."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Entkommen",
        description: "Escape a grapple | Entkomme einem Haltegriff",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ],
        bullets_de: [
            "Um einem Haltegriff zu entkommen, musst du eine Probe auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen eine Probe auf Stärke (Athletik) der Kreatur, die dich gepackt hält, gewinnen.",
			"Anderen Umständen, die dich festhalten (zum Beispiel Handschellen) zu entkommen, kann eine Probe auf Geschicklichkeit oder Stärke erfordern, je nach Anforderung des Umstands."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Helfen",
        description: "Grant an ally advantage on an ability check or attack | Gewähre einem Verbündeten Vorteil auf eine Fähigkeitenprobe oder einen Angriff",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ],
        bullets_de: [
            "Das Ziel erhält Vorteil auf die nächste Fähigkeitenprobe, die es macht um die Aufgabe zu erfüllen, bei der du ihr hilfst.",
			"Alternativ erhält das Ziel Vorteil auf den nächsten Angriff gegen ein bestimmtes Ziel innerhalb von 5 Fuß neben dir.",
            "Der Vorteil ist einmalig bis zum Beginn deines nächsten Zuges nutzbar."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Gegenstand benutzen",
        description: "Interact with a second object or use special object abilities | Interagiere mit einem zweiten Objekt oder nutze besondere Merkmale eines Objektes",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ],
        bullets_de: [
            "Mit einem Objekt kannst du innerhalb deines Zuges kostenlos interagieren (zum Beispiel eine Waffe ziehen, oder eine Tür öffnen). Wenn du ein zweites mal mit einem Objekt interagieren möchtest, nutze diese Aktion.",
			"Wenn ein Objekt zur Benutzung den Einsatz deiner Aktion erfordert, nutze ebenfalls diese Aktion."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Schild nutzen",
        description: "Equip or unequip a shield | Lege einen Schild an oder ab",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ],
        bullets_de: [
            "Einen Schild an- oder abzulegen erfordert eine Aktion.",
			"Rüstung an- oder abzulegen dauert mehrere Minuten (1 min Leichte Rüstung, 5 min Mittelschwere Rüstung, 10 min Schwere Rüstung)",
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Verstecken",
        description: "Attempt to hide | Versuche dich zu verstecken",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ],
        bullets_de: [
            "Du kannst dich nicht vor einer Kreatur verstecken, die dich sehen kann. Du musst volle Deckung haben, in einem komplett verschleierten Bereich sein, unsichtbar sein oder anderweitig die Sicht des Feindes blockieren.",
            "Wirf eine Probe auf Geschicklichkeit (Heimlichkeit), wenn du versuchst dich zu verstecken und notiere das Ergebnis. Bis du entdeckt wirst, oder aufhörst dich zu verstecken wird dieses Ergebnis von Proben auf Weisheit (Wahrnehmung) von Kreaturen, die aktiv nach dir oder nach Zeichen deiner Anwesenheit suchen, gekontert.",
            "Eine Kreatur bemerkt dich auch ohne zu suchen, wenn das Ergebnis deiner Heimlichkeits-Probe kleiner oder gleich seiner passiven Wahrnehmung ist.",
			"Wenn du Geräusche machst (zum Beispiel eine Warnung rufen, oder eine Vase umstoßen), verrätst du deine Position und wirst entdeckt.",
			"Ob du aus deinem Versteck heraustreten und trotzdem noch für den Rest deines Zuges als versteckt gelten kannst, entscheidet der DM.",
            "Außerhalb des Kampfes kannst du außerdem Proben auf Geschicklichkeit (Heimlichkeit) ablegen um dich vor Feinden zu tarnen, an Wachen vorbei zu schleichen, entkommen ohne bemerkt zu werden oder an jemanden heran zu schleichen ohne gesehen oder gehört zu werden.",
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Suchen",
        description: "Devote your attention to finding something | Widme deine Aufmerksamkeit ganz der Suche nach etwas",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ],
        bullets_de: [
            "Abhängig davon wonach und wie du suchst, kann der DM eine Probe auf Weisheit (Wahrnehmung) oder auf Intelligenz (Nachforschen) verlangen."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Vorbereiten",
        description: "Choose a trigger and a response reaction | Wähle einen Auslöser und deine darauf folgende Reaktion",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ],
        bullets_de: [
            "Zunächst legst du fest, welcher wahrnehmbare Umstand der Auslöser deiner Reaktion ist.",
			"Dann wählst du eine Aktion, die du daraufhin ausführen wirst, oder ob du dich daraufhin bewegen möchtest.",
            "Wenn der Auslöser eintritt kannst du entweder sofort folgend deine Reaktion ausführen oder den Auslöser ignorieren.",
            "Wenn du einen Zauberspruch vorbereitest wirkst du ihn ganz normal, aber hältst seine Energie, die du mit deiner Reaktion entfesselst, wenn der Auslöser eintritt. Dazu muss ein Zauberspruch eine Zauberzeit von 1 Aktion haben. Die Energie zu halten erfordert Konzentration."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Nutze ein Merkmal",
        description: "",
        reference: "See class page for more information. | Siehe die Beschreibung des Merkmals",
        bullets: [
            "Use a racial or class feature that uses an action."
        ],
        bullets_de: [
            "Nutze ein Rassen- oder Klassenmerkmal, das eine Aktion verbraucht."
        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Erste Hilfe",
        description: "Stop a dying creature from needing to make death saving throws | Stabilisiere eine Kreatur und verhindere, dass sie stirbt",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ],
        bullets_de: [
            "Du kannst versuchen einer Kreatur mit 0 Trefferpunkten Erste Hilfe zu leisten, indem du einen Probe auf Weisheit (Medizin) gegen HG 10 ausführst. Bei einem Erfolg ist die Kreatur stabil, hat weiterhin 0 Trefferpunkte und ist <i>bewusstlos</i>, sie muss aber keine Todesrettungswürfe mehr machen.",
			"Eine stabile Kreatur, die nicht geheilt wird, kommt nach 1d4 Stunden zu Bewusstsein und erhält einen Trefferpunkt zurück"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Improvisiere",
        description: "Perform any action you can imagine | Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ],
        bullets_de: [
            "Wenn du eine Aktion beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    }
]
