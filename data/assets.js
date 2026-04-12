const character_assets = [
    {min: 1, max: 5, background: "Battlefield Medic", Assets: "Healer, Veteran"},
    {min: 6, max: 10, background: "Delegate", Assets: "Bannersworn, Diplomat"},
    {min: 11, max: 15, background: "Exobiologist", Assets: "Lore Hunter, Naturalist"},
    {min: 16, max: 20, background: "Far Trader", Assets: "Navigator, Trader"},
    {min: 21, max: 25, background: "Fugutive Hunter", Assets: "Armored, Bounty Hunter"},
    {min: 26, max: 30, background: "Hacker", Assets: "Infiltrator, Tech"},
    {min: 31, max: 35, background: "Pilot", Assets: "Ace, Navigator"},
    {min: 36, max: 40, background: "Scout", Assets: "Explorer, Voidborn"},
    {min: 41, max: 45, background: "Monster Hunter", Assets: "Gunner, Slayer"},
    {min: 46, max: 50, background: "Occultist", Assets: "Outcast, Shade"},
    {min: 51, max: 55, background: "Operative", Assets: "Infiltrator, Blademaster"},
    {min: 56, max: 60, background: "Outlaw", Assets: "Fugitive, Gunslinnger"},
    {min: 61, max: 65, background: "Investigator", Assets: "Brawler, Sleuth"},
    {min: 66, max: 70, background: "Prophet", Assets: "Devotant, Seer"},
    {min: 71, max: 75, background: "Psionicist", Assets: "Kinetic, Vestige"},
    {min: 76, max: 80, background: "Smuggler", Assets: "Courier, Scoundrel"},
    {min: 81, max: 85, background: "Spiritualist", Assets: "Haunted, Empath"},
    {min: 86, max: 90, background: "Engineer", Assets: "Gearhead, Tech"},
    {min: 91, max: 95, background: "Soldier", Assets: "Augmented, Mercenary"},
    {min: 96, max: 100, background: "Tomb Raider", Assets: "Scavenger, Scoundrel"}
];

const array_modules = [
    { 
        name: "Engine Upgrade",
        level1: "🟢 Your vehicle carries up to 3 cargo. When you gain +supply, you may convert it to +cargo. When you make a move +supply, you may add +cargo. When you Sacrifice Resources, you may instead suffer -cargo for any portion of the cost.",
        level2: "🔴 When you Enter the Fray, choose one (before rolling).<br>✴ Maneuver: Add +1 and take +1 momentum on a strong hit. <br>✴ Boost: Take +2 momentum on a hit.",
        level3: "🔴 When you make a desperate move to pursue a foe, escape a threat, or get in range, you may push your engines to their limit. If you do (decide after rolling), reroll any dice and count a weak hit as a strong hit. Then, Withstand Damage (-2).",
        other: "Tracks: N/A"
    },
    { 
        name: "Expanded Hold",
        level1: "🟢 Your vehicle’s finely-tuned engines speed your travels. When you Undertake an Expedition (+edge) and score a strong hit, take +1 momentum; on a strong hit with a 6 on your action die, take +2 momentum instead of +1.",
        level2: "🔴 When you score a miss or weak hit as you make a move to barter or negotiate, and you have at least 1 cargo, you may sweeten the pot. If you do, reroll all dice and add +cargo. Then, suffer -1 cargo.",
        level3: "🔴 When you make a move to outrun a threat and have at least 1 cargo, you may first lighten your load by dropping cargo. If you do, suffer -cargo by the amount dropped, add +that amount, and take +2 momentum on a hit.",
        other: "Cargo: [3] [2] [1] [0]"
    },
    { 
        name: "Heavy Cannons",
        level1: "🟢 When you aim your cannons and use them to Strike, choose one.<br>✴ Strafe: Add +1 and take +1 momentum on a hit.<br>✴ Focus fire: Mark progress on a hit, but Lose Momentum (-1).",
        level2: "🔴 Once per fight, when you Clash by committing to an all-or-nothing exchange of fire, add +1, count a weak hit as a strong hit, and mark progress on a hit. On a miss, you must suffer a dire outcome.",
        level3: "🔴 When you Compel, Enter the Fray, or Gain Ground by bringing your cannons to bear and sending a promise of violence to your foe over communication channels, add +1 an take +1 momentum on a hit. On a strong hit with a match, take another +1 momentum.",
        other: "Tracks: N/A"
    },
    { 
        name: "Grappler",
        level1: "🟢 Your grappler can disrupt systems and snare machines and vehicles with a magnetic tether. When you take a minute or so to ready the grappler, roll +integrity or +wits. On a strong hit, the grappler is charged and may be fired. On a weak hit, charging requires extra time or focus; Lose Momentum (-1). On a miss, charging fails and you must Withstand Damage (-2). If you make a move to attack a foe or overcome an obstacle by firing the grappler, take an automatic strong hit.",
        level2: "🔴 If you score a strong hit when readying the grappler, you may Sacrifice Resources (-1) to overcharge the module. When you fire an overcharged grappler, take +2 momentum; if in a fight, also mark progress.",
        level3: "🔴 When you Take Decisive Action by firing the grappler, you may reroll one challenge die.",
        other: "Tracks: N/A"
    },
    { 
        name: "Internal Refit",
        level1: "🟢 You have customized the cabins, common spaces, and environment of the vehicle to your needs. When you Undertake an Expedition (dangerous or greater), reroll any dice for the first leg of your journey. On a hit, you and your allies may envision how you make yourself at home; if you do, take +2 momentum or +1 spirit.",
        level2: "🔴 Your vehicle is stocked with reserves. When you Sacrifice Resources and your supply is reduced to 0, first roll +integrity instead of marking unprepared. On a strong hit, take +1 supply. Otherwise, mark unprepared.",
        level3: "🔴 When you Enter the Fray to oppose an invader within your vehicle, reroll any dice. On a strong hit, take +momentum equal to integrity. On a strong hit with a match, also mark progress.",
        other: "Tracks: N/A"
    },
    { 
        name: "Medbay",
        level1: "🟢 When you use your medbay to Heal yourself or another patient, you may reroll your action die if its value is less than your vehicle’s integrity.",
        level2: "🔴 When you or an ally mark the permanently harmed impact and are brought to the medbay without delay (less than an hour or so), you have a shot at making things right. If you Heal and score a strong hit, clear the impact (in addition to the other benefits of the move). Then, envision the scar that now serves as a reminder of the incident.",
        level3: "🔴 When you Face Danger by performing a risky medical procedure, or if you Gather Information through an autopsy or medical examination, reroll any dice and take +1 momentum on a hit.",
        other: "Tracks: N/A"
    },
    { 
        name: "Missile Array",
        level1: "🟢 Your missile array is armed with 5 ammo. When you Strike or Clash with a missile attack, suffer -1 ammo and mark progress on a hit. If you Resupply in a place where your missiles can be replenished, you may exchange any earned +supply for +ammo.",
        level2: "🔴 When you have at least 1 ammo and Gain Ground by locking a missile on target, add +1 and take +1 momentum on a hit.",
        level3: "🔴 When you have at least 3 ammo and Take Decisive Action by unleashing all of your missiles, roll an action die before making the progress roll. If your action die is equal to or less than ammo, you may reroll any challenge dice. Then, set ammo to 0.",
        other: "Ammo: [5] [4] [3] [2] [1] [0]"
    },
    { 
        name: "Overseer",
        level1: "🟢 Your AI module keeps watch over the vehicle’s systems and sensor data. When you Secure an Advantage or Gain Ground by talking through a situation with the overseer, you may roll +integrity. If you do, take +1 momentum on a hit.",
        level2: "🔴 When you Withstand Damage and roll on the miss table, the overseer will do what it can to help. Roll twice on the table and choose either result.",
        level3: "🔴 The overseer can pilot the vehicle independently. When you Face Danger by handing over control to the AI in an emergency, or to summon the vehicle remotely within a hazardous situation, you may roll +integrity. If you do, take +1 momentum on a hit.",
        other: "Tracks: N/A"
    },
    { 
        name: "Reinforced Hull",
        level1: "🟢 Your vehicle is clad in iron. When you Withstand Damage, add +1. On a strong hit, take +1 momentum.",
        level2: "🔴 Your reinforced hull is given a fierce and distinctive color or design. When you arrive at a place where your reputation is a factor, take +1 momentum. When you Enter the Fray against a foe who knows your reputation, take +momentum equal to your vehicle’s integrity on a strong hit.",
        level3: "🔴 When you React Under Fire by letting your reinforced hull take the hit, add +1 and take +1 momentum on a hit. On a strong hit with a match, take another +1 momentum as you surge through the chaos and put yourself in perfect position. On a miss, Pay the Price by marking this module as broken.",
        other: "Tracks: N/A"
    },
    { 
        name: "Research Lab",
        level1: "🟢 When you use your lab to Secure an Advantage or Gather Information through careful analysis or experimentation, add +1 and take +1 momentum on a hit.",
        level2: "🔴 When you Face Danger to isolate or secure a hazardous specimen, reroll any dice.",
        level3: "🔴 When you Swear an Iron Vow to undertake a long-term research project (extreme or greater), reroll any dice. When you obtain crucial samples, equipment, or data, mark progress on the quest and take +2 momentum. When you devote extended time to the project in your lab, Face Danger and add +1. On a hit, mark progress. On a strong hit with a match, mark progress twice. When you Fulfill Your Vow and score a hit, also mark one box on your discoveries legacy track.",
        other: "Tracks: N/A"
    },
    { 
        name: "Sensor Array",
        level1: "🟢 Your advanced sensors scan the paths ahead to help spot dangers. When you Undertake an Expedition (+wits), you may reroll one challenge die.",
        level2: "🔴 When you Secure an Advantage or Gather Information by scanning your vehicle’s surroundings or analyzing a nearby object, choose one and take +1 momentum on a hit.<br>✴ Manual scan: Add +1<br>✴ Automated scan: Instead of rolling the action die, make it the value of your vehicle’s integrity.",
        level3: "🔴 When you Enter the Fray against an ambush, or Face Danger to detect a hidden threat, you may roll +integrity. If you do, reroll any dice and take +1 momentum on a hit.",
        other: "Tracks: N/A"
    },
    { 
        name: "Shields",
        level1: "🟢 When you raise your shields, roll +your vehicle’s integrity or +wits. On a strong hit, set your shields to 4. On a weak hit, make them 3. On a miss, make them 2 but Lose Momentum (-1). Then, if you Withstand Damage, ignore damage up to the value of your shields and suffer -1 shields. Raised shields last for a few minutes. If reduced to 0, they cannot be raised again for an hour or so.",
        level2: "🔴 You may React Under Fire by letting your shields take the blow. If you do, roll +shields and take +2 momentum on a hit.",
        level3: "🔴 When you Enter the Fray and score a strong hit, you may raise your shields to 3 without rolling. If you do, take +1 momentum.",
        other: "Shields: [4] [3] [2] [1] [0]"
    },
    { 
        name: "Stealth Tech",
        level1: "🟢 Your vehicle is rigged for silent running. When you make a move against a specific foe or threat to avoid detection, add +1. If you Enter the Fray by ambushing an unaware foe, add +1 and mark progress on a strong hit.",
        level2: "🔴 When you travel stealthily as you Undertake an Expedition (+shadow), you may reroll your action die.",
        level3: "🔴 When you are poised to Strike from hiding, you may roll +shadow. If you do, choose one (before rolling).<br>✴ Strike true: Reroll any dice.<br>✴ Strike hard: Mark progress on a hit. On a strong hit with a match, you also remain totally undetected; take +2 momentum and add +1 on your next Strike.",
        other: "Tracks: N/A"
    },
    { 
        name: "Vehicle Bay",
        level1: "🟢 You may purchase or upgrade a support vehicle for 1 less experience. When you Repair a battered support vehicle, spend 1 repair point (instead of 2).",
        level2: "🔴 When a support vehicle is destroyed, and you are able to retrieve its wreckage, you may Ask the Oracle using the yes/no table if something can be salvaged from the mess. Make it 50/50. On a yes, spend 1 experience to restore the support vehicle asset with all previously marked abilities. Until you Repair and bring it back to full working order, the vehicle is battered with 0 integrity.",
        level3: "🔴 When you make a move to launch from or land on your command vehicle in a perilous situation or environment, reroll any dice and take +1 momentum on a hit.",
        other: "Tracks: N/A"
    },
    { 
        name: "Workshop",
        level1: "🟢 When you Repair in the field, add +1.",
        level2: "🔴 When you make a move in your workshop to craft, modify, deactivate, or disassemble a device or machine, you may reroll your action die if its value is less than your vehicle’s integrity.",
        level3: "🔴 When you Swear an Iron Vow to undertake a long-term engineering project (extreme or greater), reroll any dice. When you obtain a crucial part or resource, mark progress on the quest and take +2 momentum. When you devote extended time to the project in your workshop, Face Danger and add +1. On a hit, mark progress. On a strong hit with a match, mark progress twice. When you Fulfill Your Vow and score a hit, mark one extra box on your quests legacy track.",
        other: "Tracks: N/A"
    }
];

const support_vehicles = [
    { 
        name: "Exosuit",
        level1: "🟢 Your lumbering rig houses one pilot, is sealed against hostile environments, and is armed with fixed or held weapons. When you make a forceful, damaging, or resistant move, you may (after rolling) replace the value of your action die with the rig’s integrity; if you do, Lose Momentum (-1).",
        level2: "🔴 Your exosuit is equipped with thrusters. You can maneuver in zero-g, make thrust-assisted leaps, and drop to a surface from altitude. When you burn fuel to overcome a critical obstacle (decide after rolling), you may reroll any dice. If you do, Sacrifice Resources (-1).",
        level3: "🔴 When you Withstand Damage, you may reroll one challenge die",
        other: "Integrity: [6] [5] [4] [3] [2] [1] [0], Battered: []"
    }
];

const character_paths = ["Ace", "Archer", "Armored", "Artist", "Augmented", "Bannersworn", "Blademaster", "Bounty Hunter", "Brawler", "Courier", "Demolitionist", "Devotant", "Diplomat", "Empath", "Explorer", "Fated", "Firebrand", "Fugutive", "Gearhead", "Gunner", "Gunslinger", "Haunted", "Healer", "Infiltrator", "Kinetic (Psi)", "Leader", "Looper", "Lore Hunter", "Loyalist", "Mercenary", "Naturalist", "Navigator", "Outcast", "Scavenger", "Scoundrel", "Seer", "Shade", "Slayer", "Sleuth", "Sniper", "Tech", "Trader", "Vestige", "Veteran", "Voidborn", "Weapon Master"];

const character_backstory_prompts = [
    "Abandoned", 
    "Guided by a vision or prophecy",
    "Haunted by past actions or failures",
    "Running from a past action",
    "Sole survivor",
    "Escaped",
    "Amnesia",
    "Rejected a duty or destiny",
    "Banished",
    "Denined a birthright",
    "Alone for as long as you can remember",
    "Sent away on an extended duty",
    "Taken or lured away",
    "Ambition outgrew origins",
    "Wanderlust carried you far away"
];

const starship_histories = [
  "Acquired in trade for a precious family heirloom",
  "Built out of repurposed scrap",
  "Claimed as spoils of war",
  "Discovered as a derelict, and patched back together",
  "Earned in exchange for a promise or vow",
  "Found abandoned in perfect condition",
  "Granted by an organization or community",
  "Inherited from a relative or mentor",
  "Purchased at a suspiciously cheap price",
  "Stolen from a notorious crime boss or criminal organization",
  "Taken while fleeing an attack or disaster",
  "Won in a bet"
];

const starship_characteristics = [
  "Engine room is scorched with old burn marks",
  "Exterior is marred by rust and grime",
  "Faint, phantom music sometimes echoes through the corridors",
  "Gravity generator is notoriously fickle",
  "Hull is fused with organic growths",
  "Hull rattles and groans in atmospheric flight",
  "Interior spaces are crowded with exposed cables and conduits",
  "Looks defenseless, but exterior panels open to reveal weapons",
  "Navigation logs contain coordinates to locations that do not—or should not—exist",
  "Old bloodstain in the airlock reappears even when painted over",
  "Once a beautiful ship, now scarred by a devastating battle",
  "Patched hull covers a recent catastrophic breach",
  "Placards and control labels are in an uncommon language",
  "Removable plate decks provide access to hidden storage",
  "Segmented landing gear unfold like gangly spider legs",
  "Ship is powered by an ancient precursor device",
  "Someone marked the hull with graffiti during a recent layover",
  "Strange symbols are scrawled on the deck and bulkheads in the main corridor",
  "Things tend to go missing for no logical reason",
  "Timers and clocks are always just a bit off"
];

const starship_names = [
  "Arclight",
  "Invictus",
  "Rubicon",
  "Argent Arrow",
  "Iron Cairn",
  "Sareea's Tribute",
  "Artemis",
  "Karena's Reverie",
  "Second Chance",
  "Astral Explorer",
  "Kraken",
  "Shard of the Sun",
  "Atlas",
  "Kuno's Hammer",
  "Shattered Siege",
  "Aurora",
  "Lightline",
  "Shattered Star",
  "Avari's Wake",
  "Lodestar",
  "Silver Talon",
  "Banshee's Cry",
  "Long Haul",
  "Smoldering Flame",
  "Beowulf",
  "Lost Fortune",
  "Sovereign Skies",
  "Bloody Jaw",
  "Luminous Sorrow",
  "Sparrowhawk",
  "Broken Sword",
  "Manta",
  "Stardust",
  "Buccaneer",
  "Mercy",
  "Starfall",
  "Cerelis Nine",
  "Mutara",
  "Stellar Hawk",
  "Clarion Call",
  "Nebula Prowler",
  "Stormswept",
  "Dawn's Herald",
  "Newton's Folly",
  "Sundered Aegis",
  "Dead Reckoning",
  "Nightfall",
  "Sundown",
  "Drift Runner",
  "Nomad",
  "Sureshot",
  "Eclipse",
  "Obsidian Trident",
  "Terminus Clipper",
  "Elara Five",
  "Onslaught",
  "Terrapin",
  "Enchantress",
  "Orca",
  "Timber Wolf",
  "Endurance",
  "Outward Bound",
  "Tip of the Spear",
  "Excalibur",
  "Phantom",
  "Titan",
  "Eye of the Void",
  "Photon",
  "Tormentor",
  "Fall of Icarus",
  "Poltergeist",
  "Trithia Six",
  "Fallen Light",
  "Profit Margin",
  "Ultraviolet",
  "False Hope",
  "Raven's Call",
  "Valora's Comet",
  "Firebreak",
  "Raya's Promise",
  "Vengeance",
  "First Light",
  "Reaper",
  "Venture",
  "Forge Flier",
  "Reforged Hope",
  "Vigilant",
  "Fortune's Favor",
  "Relentless",
  "Voidtreader",
  "Freya's Wrath",
  "Royal Signet",
  "Vulture",
  "Ghost",
  "Guiding Star",
  "Hand of Fate",
  "Herald of Doom",
  "Implacable",
  "Implicit",
  "Inferno"
];