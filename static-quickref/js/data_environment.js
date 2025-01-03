data_environment_obscurance = [
    {
        title: "Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "Leicht verschleiert",
        description: "Disadvantage on Perception in dim light, patchy fog, moderate foliage | Nachteil auf Wahrnehmung in dämmrigem Licht, ungleichmäßigem Nebel, mäßiges Blattwerk",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#LightlyObscured'>Lightly Obscured</a>",
        bullets: [
            "You have Disadvantage on Wisdom (Perception) checks to see something in a Lightly Obscured space."
        ],
        bullets_de: [
            "Du hast einen Nachteil auf Weisheit(Wahrnehmung)-Proben um etwas in einem leicht verschleierten Bereich zu erkennen."
        ]
    },
    {
        title: "Heavily obscured",
        icon: "lightning-tear",
        subtitle: "Komplett verschleiert",
        description: "Effectively blinded in darkness | Im Prinzip Blind in Dunkelheit",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#HeavilyObscured'>Heavily Obscured</a>",
        bullets: [
            "You have the Blinded condition while trying to see something in a Heavily Obscured space."
        ],
        bullets_de: [
            "Du bist vom Zustand Blind betroffen um etwas in einem komplett verschleierten Bereich erkennen zu wollen."
        ]
    }
]

data_environment_light = [
    {
        title: "Bright light",
        icon: "star-pupil",
        subtitle: "Helles Licht",
        description: "Bright Light is normal illumination. | Helles Licht ist normale Beleuchtung.",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#BrightLight'>Bright Light</a>",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ],
        bullets_de: [
			"Auch bewölkte Tage bieten helles Licht, genau wie Fackeln, Laternen, Feuer und andere Lichtquellen in einem bestimmten Radius."
        ]
    },
    {
        title: "Dim light",
        icon: "semi-closed-eye",
        subtitle: "Dämmriges Licht",
        description: "An area with Dim Light is Lightly Obscured. | Ein Bereich mit dämmrigem Licht ist leicht verschleiert.",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DimLight'>Dim Light</a>",
        bullets: [
            "Dim Light, also called shadows, creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A full moon might bathe the land in Dim Light."
        ],
        bullets_de: [
            "Dämmriges Licht - oder auch 'im Schatten' genannt - erzeugt einen <b>leicht verschleierten</b> Bereich.",
            "Ein Bereich mit dämmrigem Licht ist für gewöhnlich der Grenzbereich einer Quelle hellen Lichts, wie einer Fackel, die von Dunkelheit umgeben ist.",
            "Das schwache Licht von Dämmerung und Sonnenaufgang ist dämmriges Licht. Ein Vollmond kann das Land ebenfalls in dämmrigem Licht baden."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Dunkelheit",
        description: "Darkness creates a heavily obscured area | Dunkelheit erzeigt einen komplett verschleierten Bereich",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Darkness'>Darkness</a>",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ],
        bullets_de: [
            "Erzeugt einen <b>komplett verschleierten</b> Bereich.",
            "Charaktere treffen nachts draußen auf Dunkelheit (auch in den meisten mondhellen Nächten), in einem unbeleuchteten Verlies, einem unterirdischen Gewölbe oder einem Bereich magischer Dunkelheit."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "one-eyed",
        subtitle: "Blindsicht",
        description: "Perceive your surroundings without relying on sight, within a certain radius | Nimm deine Umgebung in einem bestimmten Radius war, ohne dich auf dein Augenlicht zu verlassen",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#senseBlindsightsense'>Blindsight</a>",
        bullets: [
            "Within that range, you can see anything that isn’t behind Total Cover even if you have the Blinded condition or are in Darkness. ",
            "Moreover, in that range, you can see something that has the Invisible condition."
        ],
        bullets_de: [
            "Innerhalb dieser Reichweite kannst du alles sehen, was sich nicht hinter einer vollständigen Deckung befindet, selbst wenn du Blind bist oder dich in Dunkelheit befindest.",
            "Außerdem kannst du in diesem Bereich etwas sehen, das den Zustand <i>Unsichtbar</i> hat."
        ]
    },
    {
        title: "Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Dunkelsicht",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius | Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Darkvision'>Darkvision</a>",
        bullets: [
            "If you have Darkvision, you can see in Dim Light within a specified range as if it were Bright Light and in Darkness within that range as if it were Dim Light.",
            "You discern colors in that Darkness only as shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ],
        bullets_de: [
            "Innerhalb eines bestimmten Bereichs kann eine Kreatur mit Dunkelsicht <b>in Dunkelheit sehen, als sei es dämmriges Licht</b>, was bedeutet, dass Bereiche in Dunkelheit für die Kreatur wie dämmriges Licht behandelt werden.",
			"Allerdings kann die Kreatur in der Dunkelheit keine Farben differenzieren und sieht statt dessen Schattierungen von Grau.",
            "Viele Kreaturen in den Welten von D&D haben Dunkelsicht, insbesondere die, die im Unterreich leben."
        ]
    },
    {
        title: "Tremorsense",
        icon: "quake-stomp",
        subtitle: "Erschütterungssinn",
        description: "Pinpoint the location of creatures on a shared surface | Bestimme die Position von Kreaturen auf einer gemeinsamen Oberfläche",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Tremorsense'>Tremorsense</a>",
        bullets: [
            "You can pinpoint the location of creatures and moving objects within a specific range, provided that the creature with Tremorsense and anything it is detecting are both in contact with the same surface (such as the ground, a wall, or a ceiling) or the same liquid.",
            "Tremorsense can’t detect creatures or objects in the air, and it doesn’t count as a form of sight."
        ],
        bullets_de: [
            "Du kannst den Standort von Kreaturen und sich bewegenden Objekten innerhalb eines bestimmten Bereichs bestimmen, vorausgesetzt, alle sind in Kontakt mit derselben Oberfläche (wie dem Boden, einer Wand oder einer Decke) oder derselben Flüssigkeit.",
            "Erschütterungssinn kann keine Kreaturen oder Objekte in der Luft entdecken und zählt nicht als eine Form des Sehens."
        ]
    },
    {
        title: "Truesight",
        icon: "eye-shield",
        subtitle: "Wahrer Blick",
        description: "Your vision is enhanced within a specified range | Deine Sicht wird innerhalb eines bestimmten Bereichs erheblich verbessert",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#senseTruesightsense'>Truesight</a>",
        bullets: [
            "You can see in normal and magical Darkness.",
            "You see creatures and objects that have the Invisible condition.",
            "Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.",
            "You discern the true form of any creature or object you see that has been transformed by magic.",
            "You see into the Ethereal Plane."
        ],
        bullets_de: [
            "Du kannst in normaler und magischer Dunkelheit sehen.",
            "Du siehst Kreaturen und Objekte, die den Zustand Unsichtbar haben.",
            "Visuelle Illusionen offenbaren sich dir, und du hast automatisch Erfolg bei Rettungswürfen gegen Illusionen.",
            "Du siehst die wahre Form von Kreaturen oder Gegenständen, die durch Magie verwandelt wurden.",
            "Du kannst in die Ätherebene sehen."
        ]
    }
]

data_environment_cover = [
    {
        title: "Half cover",
        icon: "broken-shield",
        subtitle: "Teildeckung",
        description: "A target has half cover if an obstacle blocks at least half of its body | Ein Ziel hat Teildeckung wenn ein Hindernis mindestens die Hälfte seines Körpers verdeckt",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Cover'>Cover</a>",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ],
        bullets_de: [
            "Das Hindernis kann zB eine niedrige Mauer, ein großes Möbelstück, ein schmaler Baumstamm oder eine Kreatur (unabhängig ob sie freundlich oder feindlich ist) sein.",
			"Ein Ziel mit Teildeckung erhält einen <b>+2 Bonus auf die Rüstungsklasse und Proben auf Geschicklichkeit</b>.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "Dreivierteldeckung",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle | Ein Ziel hat Dreivierteldeckung wenn ein Hindernis ungefähr drei Viertel seines Körpers verdeckt",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Cover'>Cover</a>",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ],
        bullets_de: [
            "Das Hindernis kann zB ein Fallgatter, ein Pfeilschlitz oder ein dicker Baumstamm sein.",
			"Ein Ziel mit Dreivierteldeckung erhält einen <b>+5 Bonus auf die Rüstungsklasse und Proben auf Geschicklichkeit</b>.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
        ]
    },
    {
        title: "Full cover",
        icon: "shield",
        subtitle: "Volle Deckung",
        description: "A target has total cover if it is completely concealed by an obstacle | Ein Ziel hat Volle Deckung wenn es durch ein Hindernis vollständig verdeckt wird",
        reference: "Free Rules: <a href='https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#Cover'>Cover</a>",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ],
        bullets_de: [
            "Ein Ziel hinter voller Deckung <b>kann nicht direkt als Ziel für einen Angriff oder Zauberspruch gewählt werden</b>, wobei manche Zauber ein solches Ziel innerhalb eines Effektbereichs treffen können.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
        ]
    }
]
