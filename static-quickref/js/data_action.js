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
            "Wenn du diese Aktion ausführst, kannst du einen Angriffswurf mit einer Waffe oder einem unbewaffneten Schlag ausführen.",
            "Du kannst eine Waffe entweder ausrüsten oder ablegen, wenn du im Rahmen dieser Aktion einen Angriff ausführst.",
			"Bestimmte Eigenschaften, wie z.B. die <i>Extra Attack</i> Eigenschaft des Kämpfers, erlauben es dir, mehr als einen Angriff mit dieser Aktion durchzuführen. Jeder dieser Angriffe ist ein separater Wurf und kann auf verschiedene Kreaturen abzielen. Du kannst einen Teil oder deine gesamte Bewegung nutzen, um dich zwischen diesen Angriffen zu bewegen.",
            "Falls du bei dieser Aktion mit einer leichten Waffe angreifst, kannst du später im selben Zug einen zusätzlichen Angriff als Bonusaktion mit einer anderen leichten Waffe ausführen.",
            "Immer wenn du bei dieser Aktion den unbewaffneten Schlag einsetzt, kannst du wählen, ob du mit dem Zeil <i>ringst</i> oder das Ziel <i>stößt</i>.",
            "Einige Zustände verschaffen dir einen Vorteil beim Angriff: Angriffe gegen Ziele mit dem Zustand „geblendet“, „gelähmt“, „versteinert“, „gefesselt“, „betäubt“ oder „bewusstlos“; Angriffe gegen Ziele mit dem Zustand „liegend“ im Umkreis von 5 Fuß um dich; Angriffe, während du den Zustand „unsichtbar“ hast.",
            "Einige Zustände führen zu einem Nachteil beim Angriff: Angriffe gegen Ziele mit dem Zustand „Unsichtbar“; Angriffe gegen Ziele mit dem Zustand „Liegend“ aus einer Entfernung von mehr als 5 Fuß; Angriffe, während du den Zustand „Geblendet“, „Verängstigt“, „Vergiftet“, „Liegend“ oder „Gefesselt“ hast." 
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
            "Für den Rest der Runde erhältst du eine zusätzliche Bewegung in Höhe deiner „Geschwindigkeit“."
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
			"Du verlierst diese Vorteile, wenn du „kampfunfähig“ wirst oder wenn deine Geschwindigkeit auf 0 fällt."
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
            "You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn.",
            "You can try to stabilize a creature with 0 Hit Points or remove the <i>Unconscious</i> condition of a create with 1 or more Hit Points, which requires a successful DC 10 Wisdom (Medicine) check."
        ],
        bullets_de: [
            "Ein Verbündeter erhält einen Vorteil bei der nächsten Fähigkeits-Check, die mit der Fertigkeit oder dem Werkzeug ausgeführt wird, bei der du hilfst.",
            "Du lenkst einen Feind im Umkreis von 5 Fuß von dir kurzzeitig ab und dadurch erhält einer deiner Verbündeten einen Vorteil auf den nächsten Angriffswurf gegen diesen Feind. Dieser Vorteil verfällt zu Beginn deines nächsten Zuges.",
			"Du kannst versuchen, eine Kreatur mit 0 Trefferpunkten zu stabilisieren oder den Zustand „Bewusstlosigkeit“ einer Kreatur mit 1 oder mehr Trefferpunkten zu beseitigen, was einen erfolgreichen DC 10 Weisheit (Medizin) Check erfordert."
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
            "Muss aktualisiert werden!"
        ]
    },
    {
        title: "Influence",
        icon: "charm",
        subtitle: "Beeinflussen",
        description: "You urge a monster to do something. | Du drängst ein Monster dazu, etwas zu tun.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#InfluenceAction'>Influence in Free Rules</a>",
        bullets: [
            "Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature’s attitude.",
            "Make a <i>Deception</i> check to deceive a monster that understands you.",
            "Make a <i>Intimidation</i> check to intimidate a monster.",
            "Make a <i>Performance</i> check to amuse a monster.",
            "Make a <i>Persuasion</i> check to persuade a monster that understands you.",
            "Make an <i>Animal Handling</i> check to gently coax a Beast or Monstrosity."
        ],
        bullets_de: [
            "Muss aktualisiert werden!"
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Zauberwirken",
        description: "Cast a spell, use a magic item, or use a magical feature. | Wirke einen Zauberspruch, benutze einen magischen Gegenstand oder eine magische Eigenschaft.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#MagicAction'>Magic in Free Rules</a>",
        bullets: [
            "You cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.",
            "If you cast a spell that has a casting time of 1 minute or longer, you must take the Magic action on each turn of that casting, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don’t expend a spell slot.",
            "On a turn, you can expend only one spell slot to cast a spell. This rule means you can’t, for example, cast a spell with a spell slot using the Magic action and another one using a Bonus Action on the same turn.",
            "Some spells and other effects require Concentration to remain active, as specified in their descriptions. If the effect’s creator loses Concentration, the effect ends. You loose Concentration the moment you start casting a spell or activate another effect that requires Concentration or if you take damage and fail a DC 10 or half the damage taken (whichever ist higher) or you have the <i>Incapacitated</i> condition or you die."
        ],
        bullets_de: [
            "Muss aktualisiert werden!"
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
            "Muss aktualisiert werden!"
        ]
    },
    {
        title: "Study",
        icon: "book-aura",
        subtitle: "Untersuchen",
        description: "Study your memory, a book, a clue, or another source of knowledge | Rufe dir etwas in Erinnerung oder untersuche ein Buch, einen Hinweis oder eine anderen Wissensquelle.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#StudyAction'>Study in Free Rules</a>",
        bullets: [
            "You make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.",
            "Make an <i>Arcana</i> check to study spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities).",
            "Make a <i>History</i> check to study historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids).",
            "Make an <i>Investigation</i> check to study traps, ciphers, riddles, and gadgetry.",
            "Make a <i>Nature</i> check to studay terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants).",
            "Make a <i>Religion</i> check to study deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead)."
        ],
        bullets_de: [
            "Muss aktualisiert werden!"
        ]
    },
    {
        title: "Utilize",
        icon: "snatch",
        subtitle: "Gegenstand verwenden",
        description: "Use a nonmagical object. | Einen nichtmagischen Gegenstand verwenden.",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UtilizeAction'>Utilize in Free Rules</a>",
        bullets: [
            "You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action.",
            "Shields require the Utilize action to Don or Doff."
        ],
        bullets_de: [
            "Normalerweise interagierst du mit einem Gegenstand, während du etwas anderes tust, z.B. wenn du ein Schwert als Teil der Aktion Angriff ziehst. Wenn ein Gegenstand eine Aktion erfordert, um ihn zu benutzen, führst du diese Aktion aus.",
            "Um ein Schild anzulegen oder abzulegen ist diese Aktion erforderlich."
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
