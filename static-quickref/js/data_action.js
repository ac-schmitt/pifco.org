data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Angriff",
        description: "Attack with a weapon or an Unarmed Strike. | Angriff mit einer Waffe oder einem unbewaffneten Schlag.",
        reference: '<a href="https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#AttackAction">Attack in Free Rules</a>',
        bullets: [
            "When you take the Attack action, you can make one attack roll with a weapon or an Unarmed Strike.",
            "You can either equip or unequip one weapon when you make an attack as part of this action.",
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You can use some or all of your movement to move between those attacks.",
            "When you take the <i>Attack</i> action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn with a different Light weapon.",
            "Whenever you use your <i>Unarmed Strike</i>, you can choose to <i>Grapple</i> or <i>Shove</i> your target.",
            "Some conditions give you advantage on the attack: attacks against targets with the blinded, paralyzed, petrified, restrained, stunned, or unconscious condition; attacks against targets with the prone condition within 5 ft. of you; attacks while you have the invisible condition.",
            "Some conditions give disadvantage on the attack: attacks against targets with the invisible condition; attacks against targets with the prone condition from more than 5 ft.; attacks while you have the blinded, frightened, poisoned, prone or restrained condition."
        ],
        bullets_de: [
            "Muss aktualisiert werden:",
            "Bestimmte Merkmale, wie zum Beispiel der <i>Zusätzliche Angriff</i> des Kämpfers, erlauben mehr als einen Angriff mit dieser Aktion auszuführen. Jeder dieser Angriffe ist ein eigener Angriffswurf und kann sich gegen eine andere Kreatur richten. Du kannst dich zwischen den Angriffen bewegen.",
			"Wenn du mit einer leichten Nahkampfwaffe angreifst, kannst du eine Bonusaktion verwenden, um mit einer zweiten leichten Nahkampfwaffe in deiner anderen Hand anzugreifen (siehe die Bonusaktion <i>Angriff mit Zweitwaffe</i>).",
            "Du kannst einen deiner Nahkampfangriffe durch die <i>Ringen</i>- oder <i>Stoßen</i>-Aktion ersetzen.",
            "Manche Zustände gewähren Vorteil auf einen Angriff: Angriffe gegen blinde, gelähmte, versteinerte, festgesetzte, betäubte oder bewusstlose Ziele; Nahkampfangriffe gegen liegende Ziele; Angriffe durch unsichtbare oder versteckte Angreifer.",
            "Manche Zustände gewähren Nachteil auf einen Angriff: Angriffe gegen unsichtbare oder versteckte Ziele; Fernkampfangriffe gegen liegende Ziele; Angriffe durch blinde, verängstigte, vergiftete oder festgesetzte Angreifer." 
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Spurt",
        description: "Gain extra movement for the current turn | Erhalte zusätzliche Bewegung für den aktuellen Zug",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DashAction'>Dash in Free Rules</a>",
        bullets: [
            "For the rest of the turn, give yourself extra movement equal to your <i>Speed</i>."
        ],
        bullets_de: [
            "Muss aktualisiert werden:",
            "Die Erhöhung entspricht deiner Geschwindigkeit, nachdem alle Bonus angerechnet wurden."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Rückzug",
        description: "Prevent opportunity attacks | Verhindere Gelegenheitsangriffe",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DisengageAction'>Disengage in Free Rules</a>",
        bullets: [
            "Your movement doesn't provoke <i>Opportunity Attack</i> for the rest of the turn."
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
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DodgeAction'>Dodge in Free Rules</a>",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has <i>Disadvantage</i> if you can see the attacker, and you make Dexterity saving throws with <i>Advantage</i>.",
            "You lose these benefits if you have the <i>Incapacitated</i> condition or if your <i>Speed</i> is 0."
        ],
        bullets_de: [
            "Bis zum Start deines nächsten Zuges ist jeder Angriff gegen dich im Nachteil, wenn du den Angreifer sehen kannst. Außerdem machst du Geschicklichkeits-Rettungswürfe mit Vorteil.",
			"Du verlierst diese Vorteile, wenn du <i>kampfunfähig</i> wirst oder wenn deine Geschwindigkeit auf 0 fällt."
        ]
    },
    {
        title: "TODO: Cast a spell",
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
        title: "TODO: Escape",
        icon: "manacles",
        subtitle: "Entkommen",
        description: "Escape a grapple | Entkomme einem Haltegriff",
        reference: "",
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
        description: "Help another creature’s ability check or attack roll, or administer first aid. | Gewähre einem Verbündeten Vorteil auf eine Fähigkeitenprobe oder einen Angriff oder leiste Erste Hilfe.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HelpAction'>Help in Free Rules</a>",
        bullets: [
            "An ally gains advantage on the next ability check they make with the skill or tool you assist with.",
            " You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn.",
            "You can try to stabilize a creature with 0 Hit Points or remove the <i>Unconscious</i> condition of a create with 1 or more Hit Points, which requires a successful DC 10 Wisdom (Medicine) check."
        ],
        bullets_de: [
            "Muss aktualisiert werden:",
            "Das Ziel erhält Vorteil auf die nächste Fähigkeitenprobe, die es macht um die Aufgabe zu erfüllen, bei der du ihr hilfst.",
			"Alternativ erhält das Ziel Vorteil auf den nächsten Angriff gegen ein bestimmtes Ziel innerhalb von 5 Fuß neben dir.",
            "Der Vorteil ist einmalig bis zum Beginn deines nächsten Zuges nutzbar."
        ]
    },
    {
        title: "Utilize",
        icon: "snatch",
        subtitle: "Gegenstand verwenden",
        description: "Use a nonmagical object. | Einen nichtmagischen Gegenstand verwenden.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UtilizeAction'>Utilize in Free Rules</a>",
        bullets: [
            "You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action."
        ],
        bullets_de: [
            "Normalerweise interagierst du mit einem Gegenstand, während du etwas anderes tust, z.B. wenn du ein Schwert als Teil der Aktion Angriff ziehst. Wenn ein Gegenstand eine Aktion erfordert, um ihn zu benutzen, führst du diese Aktion aus."
        ]
    },
    {
        title: "TODO: Use shield",
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
        description: "Try to conceal yourself. | Versuche dich zu verbergen.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HideAction'>Hide in Free Rules</a>",
        bullets: [
            "you must succeed on a DC 15 Dexterity (Stealth) check while you’re Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy’s line of sight; if you can see a creature, you can discern whether it can see you.",
            "On a successful check, you have the <i>Invisible</i> condition. The check’s total is the DC for a creature to find you with a Wisdom (Perception) check.",
            "The condition ends on you immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component."
        ],
        bullets_de: [
            "Muss aktualisiert werden:",
            "Du kannst dich nicht vor einer Kreatur verstecken, die dich sehen kann. Du musst volle Deckung haben, in einem komplett verschleierten Bereich sein, unsichtbar sein oder anderweitig die Sicht des Feindes blockieren.",
            "Wirf eine Probe auf Geschicklichkeit (Heimlichkeit), wenn du versuchst dich zu verstecken und notiere das Ergebnis. Bis du entdeckt wirst, oder aufhörst dich zu verstecken wird dieses Ergebnis von Proben auf Weisheit (Wahrnehmung) von Kreaturen, die aktiv nach dir oder nach Zeichen deiner Anwesenheit suchen, gekontert.",
            "Eine Kreatur bemerkt dich auch ohne zu suchen, wenn das Ergebnis deiner Heimlichkeits-Probe kleiner oder gleich seiner passiven Wahrnehmung ist.",
			"Wenn du Geräusche machst (zum Beispiel eine Warnung rufen, oder eine Vase umstoßen), verrätst du deine Position und wirst entdeckt.",
			"Ob du aus deinem Versteck heraustreten und trotzdem noch für den Rest deines Zuges als versteckt gelten kannst, entscheidet der DM.",
            "Außerhalb des Kampfes kannst du außerdem Proben auf Geschicklichkeit (Heimlichkeit) ablegen um dich vor Feinden zu tarnen, an Wachen vorbei zu schleichen, entkommen ohne bemerkt zu werden oder an jemanden heran zu schleichen ohne gesehen oder gehört zu werden.",
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Vorbereiten",
        description: "Choose a trigger and a response reaction | Wähle einen Auslöser und deine darauf folgende Reaktion",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ReadyAction'>Search in Free Rules</a>",
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
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Suchen",
        description: "Discern something that isn’t obvious. | Erkenne etwas, das nicht offensichtlich ist.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#SearchAction'>Search in Free Rules</a>",
        bullets: [
            "You make a Wisdom check to discern something that isn’t obvious.",
            "Make an <i>Insight</i> check to detect a creature's state of mind.",
            "Make a <i>Medicine</i> check to detect a creature's ailment or cause of death.",
            "Make a <i>Perception</i> check to detect a concealed creature or object.",
            "Make a <i>Survival</i> check to detect tracks or food."
        ],
        bullets_de: [
            "Muss aktualisiert werden:",
            "Abhängig davon wonach und wie du suchst, kann der DM eine Probe auf Weisheit (Wahrnehmung) oder auf Intelligenz (Nachforschen) verlangen."
        ]
    },
    {
        title: "TODO: Use class feature",
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
        title: "Improvise",
        icon: "juggler",
        subtitle: "Improvisiere",
        description: "Perform any action you can imagine | Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/playing-the-game#Actions'>Actions explanation in Free Rules</a>",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the Dungeon Master tells you whether that action is possible and what kind of D20 Test you need to make, if any."
        ],
        bullets_de: [
            "Wenn du eine Aktion beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    }
]
