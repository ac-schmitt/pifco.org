data_condition = [
    {
        title: "Blinded",
        icon: "one-eyed",
        subtitle: "Blind",
        description: "You can't see | Du kannst nicht sehen",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#BlindedCondition'>Blinded in Free Rules</a>",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ],
        bullets_de: [
            "Du verlierst Fähigkeitenproben die Sicht benötigen automatisch.",
			"Du hast Nachteil auf Angriffswürfe.",
            "Angriffswürfe gegen dich haben Vorteil.",
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "Bezaubert",
        description: "You are charmed by another creature | Du bist von einer anderen Kreatur bezaubert",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#CharmedCondition'>Charmed in Free Rules</a>",
        bullets: [
            "You can’t attack the charmer or target the charmer with damaging abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ],
        bullets_de: [
            "Du kannst den Bezaubernden nicht angreifen oder als Ziel für verletztende Fähigkeiten oder magische Effekte wählen.",
			"Der Bezaubernde hat Vorteil auf Fähigkeitenproben in sozialer Interaktion mit dir."
        ]
    },
    {
        title: "Deafened",
        icon: "elf-ear",
        subtitle: "Taub",
        description: "You can't hear | Du kannst nicht hören",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DeafenedCondition'>Deafened in Free Rules</a>",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ],
        bullets_de: [
            "Du verlierst Fähigkeitenproben die Hören benötigen automatisch.",
        ]
    },
    {
        title: "Exhaustion",
        icon: "crawl",
        subtitle: "Erschöpfung",
        description: "Exhaustion is measured in six levels | Erschöpfung wird in sechs Stufen unterschieden",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ExhaustionCondition'>Exhaustion in Free Rules</a>",
        bullets: [
            "This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.",
            "When you make a <i>D20 Test<i>, the roll is reduced by 2 times your Exhaustion level.",
            "Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.",
            "Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends."
        ],
        bullets_de: [
            "Dieser Zustand ist kumulativ. Jedes Mal, wenn du ihn erhältst, gewinnst du 1 Erschöpfungsstufe. Du stirbst, wenn deine Erschöpfungsstufe 6 ist.",
            "Wenn du einen D20-Test machst, wird der Wurf um das 2-fache deiner Erschöpfungsstufe reduziert.",
            "Deine Geschwindigkeit wird um eine Anzahl von Fuß reduziert, die dem 5-fachen deiner Erschöpfungsstufe entspricht.",
            "Eine lange Rast entfernt 1 deiner Erschöpfungsstufen. Wenn deine Erschöpfungsstufe 0 erreicht, endet der Zustand."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "Verängstigt",
        description: "You are frightened | Du hast Angst",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#FrightenedCondition'>Frightened in Free Rules</a>",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ],
        bullets_de: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil, solange die Quelle deiner Angst für dich sichtbar ist.",
			"Du kannst dich nicht willentlich der Quelle deiner Angst nähern.",
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "Gepackt",
        description: "You are grappled | Du bist im Haltegriff",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#GrappledCondition'>Grappled in Free Rules</a>",
        bullets: [
            "Your <i>Speed</i> is 0 and can’t increase.",
            "You have <i>Disadvantage</i> on attack rolls against any target other than the grappler.",
            "The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.",
            "You can use your action to make a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple’s escape DC, ending the condition on itself on a success.",
            "The condition also ends if the grappler has the Incapacitated condition or if the distance between the Grappled target and the grappler exceeds the grapple’s range."
        ],
        bullets_de: [
            "Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
			"Du hast einen Nachteil bei Angriffswürfen gegen ein anderes Ziel als den Haltenden.",
            "Der Haltende kann dich ziehen oder tragen, aber jeder Fuß Bewegung kostet den Haltenden 1 zusätzlichen Fuß, es sei denn, du bist Winzig oder zwei oder mehr Größen kleiner als der Haltende.",
            "Du kannst eine Aktion nutzen, um einen Stärke- (Athletik) oder Geschicklichkeits- (Akrobatik) Check gegen den DC des Haltenden zu machen und bei einem Erfolg den Zustand zu beenden.", 
            "Der Zustand endet auch, wenn der Haltende den Zustand „Kampfunfähig“ hat oder wenn die Entfernung zwischen dir und dem Haltenden die Reichweite des Haltegriffs überschreitet."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "Kampfunfähig",
        description: "You are inactive. | Du bist außer Gefecht.",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#GrappledCondition'>Grappled in Free Rules</a>",
        bullets: [
            "You can’t take any action, Bonus Action, or Reaction.",
            "Your Concentration is broken.",
            "You can’t speak.",
            "If you’re Incapacitated when you roll Initiative, you have Disadvantage on the roll."
        ],
        bullets_de: [
            "Du kannst keine Aktion, Bonusaktion oder Reaktion ausführen.",
            "Deine Konzentration ist gebrochen.",
            "Du kannst nicht sprechen.",
            "Du hast Nachteil beim Würfeln der Initiative."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Unsichtbar",
        description: "You are concealed. | Du bist verborgen.",
        reference: "<a hre='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#InvisibleCondition'>Invisible in Free Rules</a>",
        bullets: [
            "If you’re Invisible when you roll Initiative, you have Advantage on the roll.",
            "You aren’t affected by any effect that requires its target to be seen unless the effect’s creator can somehow see you. Any equipment you are wearing or carrying is also concealed.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ],
        bullets_de: [
            "Du hast Vorteil beim Würfeln der Initiative.",
			"Du bist von keinem Effekt betroffen, der erfordert, dass sein Ziel gesehen wird, es sei denn, der Ersteller des Effekts kann dich irgendwie sehen. Jegliche Ausrüstung, die du trägst oder mit dir führst, ist ebenfalls verborgen.",
            "Du hast Vorteil auf Angriffswürfe.",
            "Angriffswürfe gegen dich sind im Nachteil.",
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "Gelähmt",
        description: "You can't do anything | Du kannst nichts tun",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i> und kannst dich weder bewegen noch sprechen.",
			"Angriffswürfe gegen dich sind im Vorteil.",
            "Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "Versteinert",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone) | Du bist, zusammen mit allen nicht-magischen Objekten die du trägst oder mitführst, in eine feste, unbewegliche Substanz (meistens Stein) verwandelt worden",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ],
        bullets_de: [
            "Dein Gewicht verzehnfacht sich und du hörst auf zu altern.",
			"Du bist <i>kampfunfähig</i>, kannst dich weder bewegen noch sprechen und nimmst deine Umgebung nicht mehr wahr.",
            "Angriffswürfe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "Du bist gegen jeden Schaden resistent",
            "Du bist immun gegen Gifte und Krankheit, allerdings ist ein Gift, von dem du bereits betroffen bist, nur ruhend und nicht neutralisiert."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "Vergiftet",
        description: "You are poisoned | Du bist vergiftet",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ],
        bullets_de: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil.",
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "Liegend",
        description: "You are prone | Du liegst",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ],
        bullets_de: [
            "Deine einzige Bewegungsoption ist <i>Kriechen</i>, wenn du nicht aufstehst.",
			"Du bist bei Angriffen im Nachteil.",
			"Angriffe gegen dich sind im Vorteil, wenn der Angreifer innerhalb von 5 Fuß von dir ist, anderenfalls sind sie im Nachteil."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "Festgesetzt",
        description: "You are restrained | Du bist festgesetzt",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ],
        bullets_de: [
            "Deine Geschwindigkeit ist 0 und du kannst nicht von Bonus auf deine Geschwindigkeit profitieren.",
            "Du bist bei Angriffen im Nachteil.",
            "Angriffe gegen dich sind im Vorteil.",
            "Du bist bei Rettungswürfen auf Geschicklichkeit im Nachteil."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "Betäubt",
        description: "You are stunned | Du bist betäubt",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i>, kannst dich nicht bewegen und nur stammelnd reden.",
			"Angriffe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "Bewusstlos",
        description: "You are unconscious | Du bist bewusstlos",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i>, kannst dich nicht bewegen und nimmst deine Umgebung nicht wahr.",
            "Du lässt fallen was du in Händen hältst und fällst hin.",
            "Angriffe gegen dich sind im Vorteil.",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "0 Trefferpunkte",
        description: "You have been dropped to zero hit points and are dying | Du bist bei 0 Trefferpunkten und du stirbst",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ],
        bullets_de: [
            "Du bist <i>bewusstlos</i>, es sei denn, du hast auf einmal soviel Schaden erhalten, dass du auf 0 Trefferpunkte fällst und der überschüssige Schaden noch einmal mindestens so hoch wie dein Trefferpunkte-Maximum ist. In diesem Fall stirbst du sofort.",
            "Diese Bewusstlosigkeit endet, wenn du mindestens einen Trefferpunkt erhältst.",
            "Wenn du deinen Zug mit 0 Trefferpunkten beginnst, musst du einen Todesrettungswurf machen. Würfle einen W20. Ein Ergebnis von mindestens 10 ist ein Erfolg, darunter ein Misserfolg. Bei deinem dritten Erfolg bist du stabil. Bei deinem dritten Misserfolg stirbst du.",
			"Eine gewürfelte 1 wird als zwei Misserfolge gewertet. Bei einer gewürfelten 20 erhältst du sofort einen Trefferpunkt.",
			"Wenn du Schaden erleidest während du 0 Trefferpunkte hast, erleidest du einen Misserfolg. Bei einem kritischen Treffer, erleidest zu zwei Misserfolge.",
			"Angriffe gegen dich sind im Vorteil (siehe <i>bewusstlos</i>).",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist (siehe <i>bewusstlos</i>).",
        ]
    }
]
