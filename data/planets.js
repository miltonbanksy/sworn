const settlement_location = [
    {min: 1, max: 40, location: () => "Planetside"},
    {min: 41, max: 75, location: () => "Orbital"},
    {min: 76, max: 100, location: () => "Deep Space"}
];

const settlement_authority = [
    {min: 1, max: 15, authority: () => "None / lawless"},
    {min: 16, max: 30, authority: () => "Ineffectual"},
    {min: 31, max: 45, authority: () => "Tolerant"},
    {min: 46, max: 55, authority: () => "Fair"},
    {min: 56, max: 70, authority: () => "Unyielding"},
    {min: 71, max: 85, authority: () => "Corrupt"},
    {min: 86, max: 100, authority: () => "Oppressive"}
];

const settlement_projects = [
    {min: 1, max: 5, project: () => "Agriculture"},
    {min: 6, max: 7, project: () => "Archeology"},
    {min: 8, max: 9, project: () => "Automation"},
    {min: 10, max: 11, project: () => "Black Market"},
    {min: 12, max: 13, project: () => "Command"},
    {min: 14, max: 17, project: () => "Defense"},
    {min: 18, max: 22, project: () => "Energy"},
    {min: 23, max: 25, project: () => "Engineering"},
    {min: 26, max: 27, project: () => "Entertainment"},
    {min: 28, max: 29, project: () => "Environmentalism"},
    {min: 30, max: 31, project: () => "Evacuation"},
    {min: 32, max: 33, project: () => "Expansion"},
    {min: 34, max: 37, project: () => "Exploration"},
    {min: 38, max: 39, project: () => "Festival"},
    {min: 40, max: 41, project: () => "History"},
    {min: 42, max: 43, project: () => "Hunting"},
    {min: 44, max: 46, project: () => "Manufacturing"},
    {min: 47, max: 49, project: () => "Medical"},
    {min: 50, max: 51, project: () => "Migration"},
    {min: 52, max: 57, project: () => "Mining"},
    {min: 58, max: 59, project: () => "Pacifism"},
    {min: 60, max: 62, project: () => "Raiding"},
    {min: 63, max: 65, project: () => "Research"},
    {min: 66, max: 69, project: () => "Salvage"},
    {min: 70, max: 72, project: () => "Secrecy"},
    {min: 73, max: 75, project: () => "Shipbuilding"},
    {min: 76, max: 78, project: () => "Spirituality"},
    {min: 79, max: 84, project: () => "Subsistence"},
    {min: 85, max: 86, project: () => "Surveillance"},
    {min: 87, max: 88, project: () => "Terraforming"},
    {min: 89, max: 92, project: () => "Trade"},
    {min: 93, max: 95, project: () => "Warfare"},
    {min: 96, max: 100, project: () => getActionAndTheme()}
];

const settlement_first_look = [
  { "min": 1, "max": 4, "first_look": () => "Beautiful architecture" },
  { "min": 5, "max": 8, "first_look": () => "Built from natural materials" },
  { "min": 9, "max": 14, "first_look": () => "Built from scrap metal" },
  { "min": 15, "max": 20, "first_look": () => "Built within repurposed ship" },
  { "min": 21, "max": 25, "first_look": () => "Built within terrain or asteroid" },
  { "min": 26, "max": 29, "first_look": () => "Elevated or multi-level construction" },
  { "min": 30, "max": 34, "first_look": () => "Hidden or subsurface location" },
  { "min": 35, "max": 37, "first_look": () => "High-tech construction" },
  { "min": 38, "max": 43, "first_look": () => "Industrial architecture" },
  { "min": 44, "max": 48, "first_look": () => "Intimidating defenses" },
  { "min": 49, "max": 51, "first_look": () => "Moving or transforming" },
  { "min": 52, "max": 56, "first_look": () => "Obvious social stratification" },
  { "min": 57, "max": 61, "first_look": () => "Precarious location" },
  { "min": 62, "max": 65, "first_look": () => "Prominent emblems or signage" },
  { "min": 66, "max": 71, "first_look": () => "Rustic architecture" },
  { "min": 72, "max": 76, "first_look": () => "Significant structural damage" },
  { "min": 77, "max": 80, "first_look": () => "Sprawling or dispersed structures" },
  { "min": 81, "max": 83, "first_look": () => "Temporary or seasonal location" },
  { "min": 84, "max": 87, "first_look": () => "Toxic or polluted habitat" },
  { "min": 88, "max": 90, "first_look": () => "Within or near a Precursor Vault" },
  { "min": 91, "max": 100, "first_look": () => getDescriptorAndFocus() }
];

const settlement_trouble = [
  { "min": 1, "max": 3, "trouble": () => "Battle for leadership" },
  { "min": 4, "max": 6, "trouble": () => "Betrayal from within" },
  { "min": 7, "max": 8, "trouble": () => "Caught in the crossfire" },
  { "min": 9, "max": 11, "trouble": () => "Changing environment" },
  { "min": 12, "max": 13, "trouble": () => "Clash of cultures" },
  { "min": 14, "max": 17, "trouble": () => "Dangerous discovery" },
  { "min": 18, "max": 21, "trouble": () => "Depleted supplies" },
  { "min": 22, "max": 24, "trouble": () => "Deprived of a resource" },
  { "min": 25, "max": 28, "trouble": () => "Failing technology" },
  { "min": 29, "max": 32, "trouble": () => "Feuding factions" },
  { "min": 33, "max": 34, "trouble": () => "Ghostly visitations" },
  { "min": 35, "max": 38, "trouble": () => "Hazardous environment" },
  { "min": 39, "max": 42, "trouble": () => "Hostile lifeforms" },
  { "min": 43, "max": 45, "trouble": () => "Impassable route" },
  { "min": 46, "max": 48, "trouble": () => "Impending attack" },
  { "min": 49, "max": 51, "trouble": () => "Impending natural disaster" },
  { "min": 52, "max": 53, "trouble": () => "Invasive organisms" },
  { "min": 54, "max": 55, "trouble": () => "Mounting debt" },
  { "min": 56, "max": 57, "trouble": () => "Mysterious deaths" },
  { "min": 58, "max": 60, "trouble": () => "Overdue delivery" },
  { "min": 61, "max": 62, "trouble": () => "Plagued by sickness" },
  { "min": 63, "max": 65, "trouble": () => "Preyed upon by raiders" },
  { "min": 66, "max": 67, "trouble": () => "Revolt against leadership" },
  { "min": 68, "max": 69, "trouble": () => "Sabotaged technology" },
  { "min": 70, "max": 71, "trouble": () => "Shunned by others" },
  { "min": 72, "max": 74, "trouble": () => "Social strife" },
  { "min": 75, "max": 76, "trouble": () => "Someone is ill or injured" },
  { "min": 77, "max": 78, "trouble": () => "Someone is missing" },
  { "min": 79, "max": 80, "trouble": () => "Stolen technology or object" },
  { "min": 81, "max": 83, "trouble": () => "Strange phenomenon" },
  { "min": 84, "max": 86, "trouble": () => "Toxic waste or pollution" },
  { "min": 87, "max": 88, "trouble": () => "Volatile energy source" },
  { "min": 89, "max": 90, "trouble": () => "Vulnerable lifeforms" },
  { "min": 91, "max": 100, "trouble": () => getActionAndTheme() }
];


const primary_stars = [
    {min: 1, max: 15, description: "Smoldering red star"},
    {min: 16, max: 30, description: "Glowing orange star"},
    {min: 31, max: 45, description: "Burning yellow star"},
    {min: 46, max: 50, description: "Blazing blue star"},
    {min: 51, max: 60, description: "Young star incubating in a molecular cloud"},
    {min: 61, max: 70, description: "White dwarf shining with spectral light"},
    {min: 71, max: 75, description: "Corrupted star radiating with unnatural light"},
    {min: 76, max: 80, description: "Neutron star surrounded by intense magnetic fields"},
    {min: 81, max: 85, description: "Two stars in close orbit connected by fiery tendrils of energy"},
    {min: 86, max: 90, description: "Black hole allows nothing to escape - not even light"},
    {min: 91, max: 98, description: "Hypergiant star generating turbulent solar winds"},
    {min: 99, max: 99, description: "Artificial star constructed by a long dead civilization"},
    {min: 100, max: 100, description: "Unstable star showing signs of impending supernova"}
];

const planetary_class = [
    {
        min: 1, max: 15,
        pClass: "Desert World",
        pDescription: "A pitiless planet of searing heat, blowing sand, and sunbaked rock.",
        pAtmos: [
            {min: 1, max: 10, aDescription: "None / Thin"},
            {min: 11, max: 25, aDescription: "Toxic"},
            {min: 26, max: 40, aDescription: "Corrosive"},
            {min: 41, max: 70, aDescription: "Marginal"},
            {min: 71, max: 95, aDescription: "Breathable"},
            {min: 96, max: 100, aDescription: "Ideal"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 50, sDescription: "None"},
            {min: 51, max: 60, sDescription: "Orbital settlement"},
            {min: 61, max: 80, sDescription: "Planetside settlement"},
            {min: 81, max: 92, sDescription: "Multiple settlements"},
            {min: 93, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_outlands: [
            {min: 1, max: 75, sDescription: "None"},
            {min: 76, max: 83, sDescription: "Orbital settlement"},
            {min: 84, max: 95, sDescription: "Planetside settlement"},
            {min: 96, max: 98, sDescription: "Multiple settlements"},
            {min: 99, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_expanse: [
            {min: 1, max: 90, sDescription: "None"},
            {min: 91, max: 96, sDescription: "Orbital settlement"},
            {min: 97, max: 100, sDescription: "Planetside settlement"},
        ],
        observed_from_space: [
            {min: 1, max: 11, "observed": () => "Dry seabeds"},
            {min: 12, max: 22, "observed": () => "Expansive dune seas"},
            {min: 23, max: 33, "observed": () => "Massive canyons"},
            {min: 34, max: 44, "observed": () => "Perpetual daylight"},
            {min: 45, max: 55, "observed": () => "Rugged mountains"},
            {min: 56, max: 66, "observed": () => "Sprawling salt flats"},
            {min: 67, max: 77, "observed": () => "Vast plateaus"},
            {min: 78, max: 88, "observed": () => "Vibrant terrain colors"},
            {min: 89, max: 98, "observed": () => getDescriptorAndFocus()},
            {min: 99, max: 100, "observed": () => "Precursor Vault (orbital)"}
        ],
        planetside_features: [
            {min: 1, max: 7, feature: () => "Cavernous sinkholes"},
            {min: 8, max: 14, feature: () => "Engulfing sandstorms"},
            {min: 15, max: 21, feature: () => "Fleeting rainstorms and flash floods"},
            {min: 22, max: 28, feature: () => "Flooded grottos"},
            {min: 29, max: 35, feature: () => "Petrified forests"},
            {min: 36, max: 42, feature: () => "Rampaging whirlwinds"},
            {min: 43, max: 49, feature: () => "Scorched glass plains"},
            {min: 50, max: 56, feature: () => "Severe temperature fluctuations"},
            {min: 57, max: 63, feature: () => "Sunbaked bones of titanic creatures"},
            {min: 64, max: 70, feature: () => "Timeworn cliffside caves"},
            {min: 71, max: 77, feature: () => "Towering rock formations"},
            {min: 78, max: 84, feature: () => "Violent electrical storms"},
            {min: 85, max: 91, feature: () => "Windborne metallic sand"},
            {min: 92, max: 98, feature: () => getDescriptorAndFocus()},
            {min: 99, max: 100, feature: () => "Precursor Vault (planetside)"}
        ],
        life: [
            {min: 1, max: 20, life: "None"},
            {min: 21, max: 40, life: "Extinct"},
            {min: 41, max: 70, life: "Scarce"},
            {min: 71, max: 90, life: "Diverse"},
            {min: 91, max: 97, life: "Bountiful"},
            {min: 98, max: 100, life: "Overrun"}
        ]
    },
    {
        min: 16, max: 30,
        pClass: "Furnace World",
        pDescription: "A planet with relentless volcanic activity, wreathed in fire and ash.",
        pAtmos: [
            {min: 1, max: 10, aDescription: "None / Thin"},
            {min: 11, max: 50, aDescription: "Toxic"},
            {min: 51, max: 65, aDescription: "Corrosive"},
            {min: 66, max: 90, aDescription: "Marginal"},
            {min: 91, max: 100, aDescription: "Breathable"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 60, sDescription: "None"},
            {min: 61, max: 75, sDescription: "Orbital settlement"},
            {min: 76, max: 87, sDescription: "Planetside settlement"},
            {min: 88, max: 96, sDescription: "Multiple settlements"},
            {min: 97, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_outlands: [
            {min: 1, max: 85, sDescription: "None"},
            {min: 86, max: 92, sDescription: "Orbital settlement"},
            {min: 93, max: 97, sDescription: "Planetside settlement"},
            {min: 98, max: 99, sDescription: "Multiple settlements"},
            {min: 100, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_expanse: [
            {min: 1, max: 95, sDescription: "None"},
            {min: 96, max: 98, sDescription: "Orbital settlement"},
            {min: 99, max: 100, sDescription: "Planetside settlement"},
        ],
        observed_from_space: [
            {min: 1, max: 11, "observed": () => "Fiery world-spanning chasms"},
            {min: 12, max: 22, "observed": () => "Glowing rivers of lava"},
            {min: 23, max: 33, "observed": () => "Lightning-wracked ash clouds"},
            {min: 34, max: 44, "observed": () => "Magma seas"},
            {min: 45, max: 55, "observed": () => "Massive supervolcano"},
            {min: 56, max: 66, "observed": () => "Once verdant terrain"},
            {min: 67, max: 77, "observed": () => "Towering mountain ranges"},
            {min: 78, max: 88, "observed": () => "World-spanning fissures"},
            {min: 89, max: 98, "observed": () => getDescriptorAndFocus()},
            {min: 99, max: 100, "observed": () => "Precursor Vault (orbital)"}
        ],
        planetside_features: [
            {min: 1, max: 7, feature: () => "Blinding ash storms"},
            {min: 8, max: 14, feature: () => "Catastrophic earthquakes"},
            {min: 15, max: 21, feature: () => "Colorful geothermal springs"},
            {min: 22, max: 28, feature: () => "Intricate volcanic rock formations"},
            {min: 29, max: 35, feature: () => "Lava tube tunnel networks"},
            {min: 36, max: 42, feature: () => "Masses of scorched bones"},
            {min: 43, max: 49, feature: () => "Plains of volcanic glass"},
            {min: 50, max: 56, feature: () => "Pools of liquid metal"},
            {min: 57, max: 63, feature: () => "Rocky islands adrift on magma"},
            {min: 64, max: 70, feature: () => "Rolling clouds of superheated gas"},
            {min: 71, max: 77, feature: () => "Scalding geysers"},
            {min: 78, max: 84, feature: () => "Silica or metal storms"},
            {min: 85, max: 91, feature: () => "Steaming mudflats"},
            {min: 92, max: 98, feature: () => getDescriptorAndFocus()},
            {min: 99, max: 100, feature: () => "Precursor Vault (planetside)"}
        ],
        life: [
            {min: 1, max: 35, life: "None"},
            {min: 36, max: 60, life: "Extinct"},
            {min: 61, max: 85, life: "Scarce"},
            {min: 86, max: 95, life: "Diverse"},
            {min: 96, max: 98, life: "Bountiful"},
            {min: 99, max: 100, life: "Overrun"}
        ]
    },
    {
        min: 31, max: 35,
        pClass: "Grave World",
        pDescription: "A once-thriving world—now a grim monument to a fallen civilization.",
        pAtmos: [
            {min: 1, max: 10, aDescription: "None / Thin"},
            {min: 11, max: 45, aDescription: "Toxic"},
            {min: 46, max: 70, aDescription: "Corrosive"},
            {min: 71, max: 90, aDescription: "Marginal"},
            {min: 91, max: 100, aDescription: "Breathable"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 80, sDescription: "None"},
            {min: 81, max: 90, sDescription: "Orbital settlement"},
            {min: 91, max: 95, sDescription: "Planetside settlement"},
            {min: 96, max: 98, sDescription: "Multiple settlements"},
            {min: 99, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_outlands: [
            {min: 1, max: 90, sDescription: "None"},
            {min: 91, max: 97, sDescription: "Orbital settlement"},
            {min: 98, max: 100, sDescription: "Planetside settlement"}
        ],
        pSettlements_expanse: [
            {min: 1, max: 95, sDescription: "None"},
            {min: 96, max: 98, sDescription: "Orbital settlement"},
            {min: 99, max: 100, sDescription: "Planetside settlement"},
        ],
        observed_from_space: [
            {min: 1, max: 11, "observed": () => "Broken moon"},
            {min: 12, max: 22, "observed": () => "Cratered surface"},
            {min: 23, max: 33, "observed": () => "Dry seabeds"},
            {min: 34, max: 44, "observed": () => "Irradiated atmosphere"},
            {min: 45, max: 55, "observed": () => "Orbiting ship graveyard"},
            {min: 56, max: 66, "observed": () => "Perpetual overcast"},
            {min: 67, max: 77, "observed": () => "Sky-breaching ruins"},
            {min: 78, max: 88, "observed": () => "Vast wastelands"},
            {min: 89, max: 98, "observed": () => getDescriptorAndFocus()},
            {min: 99, max: 100, "observed": () => "Precursor Vault (orbital)"}
        ],
        planetside_features: [
            {min: 1, max: 7, feature: () => "Acid pools"},
            {min: 8, max: 14, feature: () => "Ash dunes"},
            {min: 15, max: 21, feature: () => "Corrosive rains"},
            {min: 22, max: 28, feature: () => "Dead forests"},
            {min: 29, max: 35, feature: () => "Fetid mudflats"},
            {min: 36, max: 42, feature: () => "Mass graves"},
            {min: 43, max: 49, feature: () => "Moldering bones"},
            {min: 50, max: 56, feature: () => "Noxious fog"},
            {min: 57, max: 63, feature: () => "Radioactive hotspots"},
            {min: 64, max: 70, feature: () => "Ravaged cities"},
            {min: 71, max: 77, feature: () => "Scarred battlefields"},
            {min: 78, max: 84, feature: () => "Ship graveyards"},
            {min: 85, max: 91, feature: () => "Whispers of the dead"},
            {min: 92, max: 98, feature: () => getDescriptorAndFocus()},
            {min: 99, max: 100, feature: () => "Precursor Vault (planetside)"}
        ],
        life: [
            {min: 1, max: 25, life: "None"},
            {min: 26, max: 75, life: "Extinct"},
            {min: 76, max: 95, life: "Scarce"},
            {min: 96, max: 100, life: "Diverse"}
        ]
    },
    {
        min: 36, max: 50,
        pClass: "Ice World",
        pDescription: "A rugged, frozen world—locked in an unending winter.",
        pAtmos: [
            {min: 1, max: 15, aDescription: "None / Thin"},
            {min: 16, max: 35, aDescription: "Toxic"},
            {min: 36, max: 40, aDescription: "Corrosive"},
            {min: 41, max: 70, aDescription: "Marginal"},
            {min: 71, max: 95, aDescription: "Breathable"},
            {min: 96, max: 100, aDescription: "Ideal"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 50, sDescription: "None"},
            {min: 51, max: 60, sDescription: "Orbital settlement"},
            {min: 61, max: 80, sDescription: "Planetside settlement"},
            {min: 81, max: 92, sDescription: "Multiple settlements"},
            {min: 93, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_outlands: [
            {min: 1, max: 75, sDescription: "None"},
            {min: 76, max: 83, sDescription: "Orbital settlement"},
            {min: 84, max: 95, sDescription: "Planetside settlement"},
            {min: 96, max: 98, sDescription: "Multiple settlements"},
            {min: 99, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_expanse: [
            {min: 1, max: 90, sDescription: "None"},
            {min: 91, max: 96, sDescription: "Orbital settlement"},
            {min: 97, max: 100, sDescription: "Planetside settlement"},
        ],
        observed_from_space: [
            {min: 1, max: 11, "observed": () => "Feeble sunlight"},
            {min: 12, max: 22, "observed": () => "Frozen oceans"},
            {min: 23, max: 33, "observed": () => "Rocky glacial islands"},
            {min: 34, max: 44, "observed": () => "Snowbound mountains"},
            {min: 45, max: 55, "observed": () => "Sky-breaching geysers"},
            {min: 56, max: 66, "observed": () => "Supersized ice volcano"},
            {min: 67, max: 77, "observed": () => "Vibrantly colored ice"},
            {min: 78, max: 88, "observed": () => "World-spanning ice canyon"},
            {min: 89, max: 98, "observed": () => getDescriptorAndFocus()},
            {min: 99, max: 100, "observed": () => "Precursor Vault (orbital)"}
        ],
        planetside_features: [
            {min: 1, max: 7, feature: () => "Abyssal ice fissures"},
            {min: 8, max: 14, feature: () => "Blinding snow storms"},
            {min: 15, max: 21, feature: () => "Clusters of ice spikes"},
            {min: 22, max: 28, feature: () => "Colossal ice caves"},
            {min: 29, max: 35, feature: () => "Glistening ice spires"},
            {min: 36, max: 42, feature: () => "Massive snow drifts"},
            {min: 43, max: 49, feature: () => "Preserved carcasses"},
            {min: 50, max: 56, feature: () => "Rocky islands amid icy wastes"},
            {min: 57, max: 63, feature: () => "Shattered plains of pack ice"},
            {min: 64, max: 70, feature: () => "Steaming hot springs"},
            {min: 71, max: 77, feature: () => "Subsurface liquid oceans"},
            {min: 78, max: 84, feature: () => "Vibrant auroras"},
            {min: 85, max: 91, feature: () => "Wind-carved ice formations"},
            {min: 92, max: 98, feature: () => getDescriptorAndFocus()},
            {min: 99, max: 100, feature: () => "Precursor Vault (planetside)"}
        ],
        life: [
            {min: 1, max: 20, life: "None"},
            {min: 21, max: 40, life: "Extinct"},
            {min: 41, max: 70, life: "Scarce"},
            {min: 71, max: 90, life: "Diverse"},
            {min: 91, max: 97, life: "Bountiful"},
            {min: 98, max: 100, life: "Overrun"}
        ]
    },
    {
        min: 51, max: 65,
        pClass: "Jovian World",
        pDescription: "A massive planet with vast layers of dense gases surrounding a rocky core.",
        pAtmos: [
            {min: 1, max: 50, aDescription: "Toxic"},
            {min: 51, max: 65, aDescription: "Corrosive"},
            {min: 66, max: 85, aDescription: "Marginal"},
            {min: 86, max: 100, aDescription: "Breathable"}
        ],
        pSettlements_terminus: [
            {min: 1, max: 50, sDescription: "None"},
            {min: 51, max: 70, sDescription: "Orbital settlement"},
            {min: 71, max: 85, sDescription: "Planetside settlement"},
            {min: 86, max: 95, sDescription: "Multiple settlements"},
            {min: 96, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_outlands: [
            {min: 1, max: 75, sDescription: "None"},
            {min: 76, max: 87, sDescription: "Orbital settlement"},
            {min: 88, max: 95, sDescription: "Planetside settlement"},
            {min: 96, max: 98, sDescription: "Multiple settlements"},
            {min: 99, max: 100, sDescription: "Settlements in conflict"},
        ],
        pSettlements_expanse: [
            {min: 1, max: 90, sDescription: "None"},
            {min: 91, max: 96, sDescription: "Orbital settlement"},
            {min: 97, max: 100, sDescription: "Planetside settlement"},
        ],
        observed_from_space: [
            {min: 1, max: 11, "observed": () => "Complex ring system"},
            {min: 12, max: 22, "observed": () => "Intense gravity well"},
            {min: 23, max: 33, "observed": () => "Numerous moons"},
            {min: 34, max: 44, "observed": () => "Perpetual superstorm"},
            {min: 45, max: 55, "observed": () => "Powerful magnetic field"},
            {min: 56, max: 66, "observed": () => "Severe electrical storms"},
            {min: 67, max: 77, "observed": () => "Superheated atmosphere"},
            {min: 78, max: 88, "observed": () => "Unusual atmospheric colors"},
            {min: 89, max: 98, "observed": () => getDescriptorAndFocus()},
            {min: 99, max: 100, "observed": () => "Precursor Vault (orbital)"}
        ],
        planetside_features: [
            {min: 1, max: 7, feature: () => "Clouds of metal particles"},
            {min: 8, max: 14, feature: () => "Crystalline rains"},
            {min: 15, max: 21, feature: () => "Floating glaciers"},
            {min: 22, max: 28, feature: () => "Floating islands"},
            {min: 29, max: 35, feature: () => "Layers of suspended liquid"},
            {min: 36, max: 42, feature: () => "Pockets of explosive gasses"},
            {min: 43, max: 49, feature: () => "Powerful vortexes"},
            {min: 50, max: 56, feature: () => "Radiation fields"},
            {min: 57, max: 63, feature: () => "Storm-swept rocky debris"},
            {min: 64, max: 70, feature: () => "Torrential rain"},
            {min: 71, max: 77, feature: () => "Towering thunderheads"},
            {min: 78, max: 84, feature: () => "Violent turbulence"},
            {min: 85, max: 91, feature: () => "Zones of localized atmosphere"},
            {min: 92, max: 98, feature: () => getDescriptorAndFocus()},
            {min: 99, max: 100, feature: () => "Precursor Vault (planetside)"}
        ],
        life: [
            {min: 1, max: 50, life: "None"},
            {min: 51, max: 55, life: "Extinct"},
            {min: 56, max: 75, life: "Scarce"},
            {min: 76, max: 90, life: "Diverse"},
            {min: 91, max: 97, life: "Bountiful"},
            {min: 98, max: 100, life: "Overrun"}
        ]
    }
];