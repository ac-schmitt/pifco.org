data_environment_obscurance = [
    {
        title: "Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "Leicht verschleiert",
        description: "Disadvantage on Perception in dim light, patchy fog, moderate foliage | Nachteil auf Wahrnehmung in dämmrigem Licht, ungleichmäßigem Nebel, mäßiges Blattwerk",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ],
        bullets_de: [
            "Kreaturen haben <b>Nachteil auf Weisheit (Wahrnehmung)</b>-Proben, die Sicht benötigen"
        ]
    },
    {
        title: "Heavily obscured",
        icon: "lightning-tear",
        subtitle: "Komplett verschleiert",
        description: "Effectively blind in darkness, opaque fog, dense foliage | Effektiv Blind in Dunkelheit, dichter Nebel, dichtes Blattwerk",
        reference: "PHB, pg. 183.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ],
        bullets_de: [
            "Eine Kreatur in einem komplett verschleierten Bereich ist effektiv vom Zustand <b>Blind</b> betroffen."
        ]
    }
]

data_environment_light = [
    {
        title: "Bright light",
        icon: "star-pupil",
        subtitle: "Helles Licht",
        description: "Bright light lets most creatures see normally | Helles Licht lässt die meisten Kreaturen normal sehen",
        reference: "PHB, pg. 183.",
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
        description: "Dim light, also called shadows | Dämmriges Licht, bzw. Schatten",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ],
        bullets_de: [
            "Erzeugt einen <b>leicht verschleierten</b> Bereich.",
            "Ein Bereich mit dämmrigem Licht ist für gewöhnlich der Grenzbereich einer Quelle hellen Lichts, wie einer Fackel, die von Dunkelheit umgeben ist.",
            "Das schwache Licht von Dämmerung und Sonnenaufgang ist dämmriges Licht. Ein besonders heller Vollmond kann das Land ebenfalls in dämmrigem Licht baden."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Dunkelheit",
        description: "Darkness creates a heavily obscured area | Dunkelheit erzeigt einen komplett verschleierten Bereich",
        reference: "PHB, pg. 183.",
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
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ],
        bullets_de: [
            "Kreaturen ohne Augen, wie zum Beispiel Schlicke, und Kreaturen mit Echolot oder verstärkten Sinnen, so wie Fledermäuse und echte Drachen, haben oft diesen Sinn."
        ]
    },
    {
        title: "Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Dunkelsicht",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius | Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ],
        bullets_de: [
            "Innerhalb eines bestimmten Bereichs kann eine Kreatur mit Dunkelsicht <b>in Dunkelheit sehen, als sei es dämmriges Licht</b>, was bedeutet, dass Bereiche in Dunkelheit für die Kreatur wie dämmriges Licht behandelt werden.",
			"Allerdings kann die Kreatur in der Dunkelheit keine Farben differenzieren und sieht statt dessen Schattierungen von Grau.",
            "Viele Kreaturen in den Welten von D&D haben Dunkelsicht, insbesondere die, die im Unterreich leben."
        ]
    },
    {
        title: "Truesight",
        icon: "eye-shield",
        subtitle: "Wahrer Blick",
        description: "A creature with truesight can see everything in its true form, independent of the environment | Eine Kreatur mit Wahrem Blick kann unabhängig von der Umgebung alles in seiner wahren Form sehen",
        reference: "PHB, pg. 184.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ],
        bullets_de: [
            "Eine Kreatur mit dem Wahren Blick kann bis zu einer bestimmten Reichweite, auch in normaler sowie magischer Dunkelheit sehen, unsichtbare Kreaturen und Objekte wahrnehmen, automatisch visuelle Illusionen entdecken und Proben gegen diese gewinnen, und nimmt die wahre Form eines Gestaltwandlers oder einer Kreatur, die durch Magie verwandelt wurde, wahr.",
			"Darüber hinaus kann die Kreatur in die Ätherebene sehen."
        ]
    }
]

data_environment_cover = [
    {
        title: "Half cover",
        icon: "broken-shield",
        subtitle: "Teildeckung",
        description: "A target has half cover if an obstacle blocks at least half of its body | Ein Ziel hat Teildeckung wenn ein Hindernis mindestens die Hälfte seines Körpers verdeckt",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
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
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
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
        reference: "PHB, pg. 196.",
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
