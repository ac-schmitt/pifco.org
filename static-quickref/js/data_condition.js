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
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#InvisibleCondition'>Invisible in Free Rules</a>",
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
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ParalyzedCondition'>Paralyzed in Free Rules</a>",
        bullets: [
            "You have the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#IncapacitatedCondition'>Incapacitated</a> condition.",
            "Your Speed is 0 and can’t increase.",
            "You automatically fail Strength and Dexterity saving throws.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you."
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i> und kannst dich weder bewegen noch sprechen.",
            "Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
			"Angriffswürfe gegen dich sind im Vorteil.",
            "Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "Versteinert",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone) | Du bist, zusammen mit allen nicht-magischen Objekten die du trägst oder mitführst, in eine feste, unbewegliche Substanz (meistens Stein) verwandelt worden",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#PetrifiedCondition'>Petrified in Free Rules</a>",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You have the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#IncapacitatedCondition'>Incapacitated</a> condition.",
            "Your Speed is 0 and can’t increase.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You have <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Immunity'>Immunity</a> to the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#PoisonedCondition'>Poisoned</a> condition."
        ],
        bullets_de: [
            "Dein Gewicht verzehnfacht sich und du hörst auf zu altern.",
            "Du bist <i>kampfunfähig</i> und kannst dich weder bewegen noch sprechen.",
            "Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "Angriffswürfe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "Du bist gegen jeden Schaden resistent",
            "Du bist immun gegen den Zustand <i>Vergiftet</i>"
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "Vergiftet",
        description: "You are poisoned | Du bist vergiftet",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#PoisonedCondition'>Poisoned in Free Rules</a>",
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
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ProneCondition'>Prone in Free Rules</a>",
        bullets: [
            "Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition.",
            "If your Speed is 0, you can’t right yourself.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ],
        bullets_de: [
            "Deine einzige Bewegungsmöglichkeit ist, zu kriechen oder die Hälfte deiner Geschwindigkeit (abrunden) aufzuwenden, um dich aufzurichten und damit den Zustand zu beenden.",
            "Wenn deine Geschwindigkeit 0 ist, kannst du dich nicht aufrichten.",
			"Du bist bei Angriffen im Nachteil.",
			"Angriffe gegen dich sind im Vorteil, wenn der Angreifer innerhalb von 5 Fuß von dir ist, anderenfalls sind sie im Nachteil."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "Festgesetzt",
        description: "You are restrained | Du bist festgesetzt",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#RestrainedCondition'>Restrained in Free Rules</a>",
        bullets: [
            "Your Speed is 0 and can’t increase.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on attack rolls.",
            "You have disadvantage on Dexterity saving throws."
        ],
        bullets_de: [
            "Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "Angriffe gegen dich sind im Vorteil.",
            "Du bist bei Angriffen im Nachteil.",
            "Du bist bei Rettungswürfen auf Geschicklichkeit im Nachteil."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "Betäubt",
        description: "You are stunned | Du bist betäubt",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#StunnedCondition'>Stunned in Free Rules</a>",
        bullets: [
            "You have the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#IncapacitatedCondition'>Incapacitated</a> condition.",
            "You automatically fail Strength and Dexterity saving throws.",
            "Attack rolls against you have advantage."
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i>.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
			"Angriffe gegen dich sind im Vorteil."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "Bewusstlos",
        description: "You are unconscious | Du bist bewusstlos",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UnconsciousCondition'>Unconscious in Free Rules</a>",
        bullets: [
            "You have the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#IncapacitatedCondition'>Incapacitated</a> and <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ProneCondition'>Prone</a> conditions.",
            "You drop whatever you’re holding. When this condition ends, you remain Prone.",
            "Your Speed is 0 and can’t increase.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You’re unaware of your surroundings."
        ],
        bullets_de: [
            "Du bist <i>kampfunfähig</i> und <i>liegend</i>.",
            "Du lässt fallen was du in Händen hältst und fällst hin. Wenn dieser Zustand ended, bleibst du <i>liegend</i>.",
            "Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "Angriffe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Du nimmst deine Umgebung nicht wahr."
        ]
    },
    {
        title: "Bloodied",
        icon: "dead-head",
        subtitle: "0 Trefferpunkte",
        description: "You half half of your Hit Points or fewer remaining | Du hast nur noch die Hälfte oder weniger deiner Trefferpunkte übrig",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/phb-2024/rules-glossary#Bloodied'>Bloodied in Free Rules</a>"
    },
    {
        title: "0 Hit Points",
        icon: "dead-head",
        subtitle: "0 Trefferpunkte",
        description: "You are reduced to 0 hit points and you either die outright or you fall <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UnconsciousCondition'>unconscious</a>. | Du bist bei 0 Trefferpunkten und du stirbst",
        reference: "<a href='https://www.dndbeyond.com/sources/dnd/free-rules/playing-the-game#Droppingto0HitPoints'>Dropping to 0 Hit Points in Free Rules</a>",
        bullets: [
            "You die if the remainder damage equals or exceeds your Hit Point maximum.",
            "If you don't die instantly, you have the <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UnconsciousCondition'>unconscious</a> condition",
            "Until you regain any Hit Points, and you now face making <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DeathSavingThrow'>Death Saving Throws</a> at the start of your turn.",
            "On your third success, you become <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Stable'>stable</a>.",
            "On your third failure, you die.",
            "You can also be stabilized by an ally taking the Help action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ],
        bullets_de: [
            "Du stirbst, wenn der verbleibende Schaden dein Trefferpunkte-Maximum erreicht oder überschreitet.",
            "Wenn du nicht sofort stirbst, bist du <i>bewusstlos</i>.",
            "Bis du mindestens 1 Trefferpunkt wiedererlangst, musst du zu Beginn deines Zuges Rettungswürfe für den Tod ablegen.",
            "Bei deinem dritten Erfolg wirst du stabil.",
            "Bei deinem dritten Fehlschlag stirbst du.",
            "Du kannst durch einen Verbündeten stabilisiert werden, der die Aktion „Hilfe“ ausführt und einen Wurf auf Weisheit (Medizin) mit DC 10 besteht.",
            "Sobald du stabil bist, erhältst du nach 1d4 Stunden 1 Trefferpunkt zurück."
        ]
    }
]
