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

const array_support_vehicles = [
    { 
        name: "Exosuit",
        level1: "🟢 Your lumbering rig houses one pilot, is sealed against hostile environments, and is armed with fixed or held weapons. When you make a forceful, damaging, or resistant move, you may (after rolling) replace the value of your action die with the rig’s integrity; if you do, Lose Momentum (-1).",
        level2: "🔴 Your exosuit is equipped with thrusters. You can maneuver in zero-g, make thrust-assisted leaps, and drop to a surface from altitude. When you burn fuel to overcome a critical obstacle (decide after rolling), you may reroll any dice. If you do, Sacrifice Resources (-1).",
        level3: "🔴 When you Withstand Damage, you may reroll one challenge die",
        other: "Integrity: [6] [5] [4] [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Hoverbike",
        level1: "🟢 Your unarmed hoverbike provides speedy planetside ground transport, and is equipped to carry up to two people and their gear. When you Undertake an Expedition (+edge), take +1 momentum on a hit. On a strong hit with a match, you also surge ahead or find a new path; mark progress.",
        level2: "🔴 When you fire the bike’s afterburner and make a move to perform a risky maneuver, you may add +integrity and take +2 momentum on a strong hit. If you do, count a weak hit as a miss.",
        level3: "🔴 When you make a move while maneuvering your bike and burn momentum to improve your result, roll your action die. On a 5 or 6, do not reset momentum.",
        other: "Integrity: [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Rover",
        level1: "🟢 Your unarmed rover provides protected planetside transport. When you Undertake an Expedition or Set a Course, add +1. When you Finish an Expedition in your rover, you may reroll one challenge die.",
        level2: "🔴 You may equip your rover with one module asset at no extra cost. When you Withstand Damage, the module can be broken or destroyed as with a command vehicle. If you reconfigure your rover, spend 1 experience, discard the module, and equip another with the same number of marked abilities.",
        level3: "🔴 When you Face Danger or React Under Fire by taking a hit or crashing through an obstacle, you may roll +integrity. If you do, take +1 momentum on a hit.",
        other: "Integrity: [5] [4] [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Service Pod",
        level1: "🟢 Your unarmed utility vehicle houses one pilot for short-range, low gravity operations. When you make a move using the pod’s manipulator arms to perform a delicate or forceful task, add +1 and take +1 momentum on a hit.",
        level2: "🔴 When you Face Danger, Gain Ground, or React Under Fire by maneuvering your pod through a hazardous or obstructed area, choose an approach and roll +integrity.<br>✴ Careful: Add +2 and Lose Momentum (-1)<br>✴ Reckless: Take +1 momentum on a hit.",
        level3: "🔴 When you make a move while controlling the pod and push its capabilities to the limit, you may take an automatic strong hit. If you do, Withstand Damage (-2).",
        other: "Integrity: [4] [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Shuttle",
        level1: "🟢 Your unarmed shuttle provides short-range transport for several people and equipment through space or atmosphere. When you travel to a location (not your command vehicle), you and your allies may take +1 momentum when you arrive.",
        level2: "🔴 When you Face Danger or React Under Fire to navigate through hazardous skies, avoid obstacles, or evade an attack, add +1 and take +1 momentum on a hit.",
        level3: "🔴 Your shuttle is sealed against high pressure environments, can travel underwater, and is more resistant to damage; when you Withstand Damage, add +1.",
        other: "Integrity: [4] [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Skiff",
        level1: "🟢 Your unarmed flatbed hover-vehicle carries several people, gear, and cargo over land or water. When you Undertake an Expedition or Set a Course, you may rely on the skiff’s simple durability and roll +integrity. If you do, take +1 momentum on a hit.",
        level2: "🔴 Your skiff is armed with a turreted cannon. When you Strike or Clash by firing the cannon, roll +integrity and take +1 momentum on a hit. On a strong hit with a match, your shots cause extra destruction or create havoc; mark progress.",
        level3: "🔴 Your skiff is fully stocked. When you Check Your Gear, add +1 and take +1 momentum on a hit.",
        other: "Integrity: [4] [3] [2] [1] [0], Battered: []"
    },
    { 
        name: "Snub Fighter",
        level1: "🟢 Your armed snub fighter carries a single pilot for space or atmospheric flight and combat. When you Enter the Fray, you may roll +integrity; if you do, take +2 momentum on a hit.",
        level2: "🔴 When you Strike or Clash, add +1. On a strong hit with a match, mark progress.",
        level3: "🔴 When you personally defeat a notable foe in your snub fighter, envision the victory mark you make on the fuselage. Tally your victories in this box. For every five, mark 2 ticks on your quests legacy track.",
        other: "Integrity: [4] [3] [2] [1] [0], Victories: [], Battered: []"
    }
];

const array_companions = [
    { 
        name: "Banshee",
        level1: "🟢 Your banshee companion accompanies you on planetside missions, using its echolocation to help guide the way. When you ride your banshee as you Undertake an Expedition or Set a Course, you may roll +its health.",
        level2: "🔴 When you make a move astride the banshee to detect a threat or avoid a fight, add +1 and take +1 momentum on a hit. On a strong hit with a match, you’re gone in a flash; take another +1 momentum.",
        level3: "🔴 When you make a combat move and roll a 1 on your action die, the banshee senses the danger and emits a powerful scream to alert you or distract your foes. You may reroll that die.",
        other: "Health: [4] [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Combat Bot",
        level1: "🟢 Your combat bot companion fights at your side. When you Strike aided by the bot, add +1; if you Clash, take +1 momentum on a hit.",
        level2: "🔴 When you use the threat of violence to Compel or Gain Ground while the bot brings its weapons to bear, you may roll +its health. If you do, take +1 momentum on a hit. On a strong hit with a match, the bot’s display is especially persuasive; take another +1 momentum.",
        level3: "🔴 Once per fight, when you React Under Fire by using the bot to draw fire or create a diversion, roll +its health. On a strong hit, mark progress. On a weak hit, face the cost as normal, but then you are in control.",
        other: "Health: [5] [4] [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Glow Cat",
        level1: "🟢 Your glowcat companion perceives the inner emotions and intentions of people and creatures in its vicinity, and embodies those impressions through the colors and intensity of its luminescent fur. When you Secure an Advantage by studying the glowcat’s reactions in a charged interaction, add +its health.",
        level2: "🔴 When you Compel, the glowcat’s reactions will help guide your approach; you may reroll your action die if its value is less than the glowcat’s health.",
        level3: "🔴 When you Endure Stress in the company of the glowcat, add +1. On a strong hit with a match, take +momentum equal to their health.",
        other: "Health: [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Protocol Bot",
        level1: "🟢 Your protocol bot companion is programmed with knowledge of cultures, languages, and customs. When you are aided by the bot as you make a move in a formal social interaction, add +1. On a strong hit with a match, you learn something which builds understanding or empathy; also mark 1 tick on your bonds legacy track.",
        level2: "🔴 When you first visit or interact with a new community or culture, you may ask for the bot’s insight. If you do, envision what you learn and take +1 momentum.",
        level3: "🔴 If you make a move in a charged interaction and the value of your action die is less than the bot’s health, you may reroll it as the bot interjects with their commentary or advice.",
        other: "Health: [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Rockhorn",
        level1: "🟢 Your rockhorn companion uses its resilient, stone-like hide and brute strength to overcome threats. When you make a move by sending the rockhorn to directly attack a foe or smash an obstacle, roll +its health.",
        level2: "🔴 When you make the Companion Takes a Hit move for the rockhorn, count a weak hit as a strong hit. On a strong hit with a match, its rapid healing makes it unstoppable; give it another +1 health or take +1 momentum.",
        level3: "🔴 The rockhorn will come to your aid in your most vulnerable moments. When you Endure Harm or Endure Stress and score a miss, you may reroll your action die if its value is less than the rockhorn’s health.",
        other: "Health: [5] [4] [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Sidekick",
        level1: "🟢 Your sidekick has a helpful expertise. When you make a move outside of a fight directly aided by their expertise, you may reroll your action die if its value is less than your sidekick’s health. If you then score a strong hit with a match, mark 1 tick on your bonds legacy track.",
        level2: "🔴 When you Enter the Fray with the support of your sidekick, take +2 momentum on a hit. When you Clash together, add +1.",
        level3: "🔴 When your sidekick acts to get you out of a tough spot, you may Face Danger or React Under Fire and roll +their health (instead of your own stat). On a hit, take +1 momentum.",
        other: "Health: [4] [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Sprite",
        level1: "🟢 Your sprite companion alters its delicate, crystalline form to fly, swim, or scurry, and can covertly navigate even the harshest of environments. When you make a move by sending it to perform trickery (such as creating a distraction, sneaking into a protected location, or stealing an object) add +its health.",
        level2: "🔴 You are attuned to the resonance of the sprite’s crystalline structure, and can communicate with it at a distance and perceive through its senses. When you Secure an Advantage by observing a situation from its perspective, or remotely Gather Information, add +its health.",
        level3: "🔴 With a moment’s rest, the sprite can mend its form and return automatically to max health.",
        other: "Health: [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Survey Bot",
        level1: "🟢 Your survey bot companion scans the path ahead. When you Undertake an Expedition (+wits) overland or within a site, add +1.",
        level2: "🔴 Once per expedition, when you Secure an Advantage by sending the bot to scout ahead, roll +its health. On a hit, also mark progress on the expedition. On a strong hit with a match, the bot uncovers an unexpected feature or location; envision what it reveals and mark 1 tick on your discoveries legacy track.",
        level3: "🔴 When you Explore a Waypoint aided by the bot’s sensors, or Face Danger to detect a threat, roll +its health and take +1 momentum on a hit.",
        other: "Health: [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Symbiote",
        level1: "🟢 You are physically bound to a being with 2 health. When you make aggressive moves while giving yourself to the symbiote’s power, add +its health. If you face physical harm, choose either the Endure Harm or Companion Takes a Hit move. To restore the symbiote’s health, you must Endure Stress and give the symbiote +health equal to the -spirit you face. If you make a move aided by the symbiote and roll a 1 on your action die, your fragile bond is broken for several hours.",
        level2: "🔴 When you make a move and heed the symbiote’s guidance (decide after rolling), you may reroll any dice. Then, Endure Stress (-2).",
        level3: "🔴 The symbiote gains power and has 3 health.",
        other: "Health: ([3]) [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Utility Bot",
        level1: "🟢 Your utility bot companion has helpful tools at-hand. When you make a move by directing it to access a system, cut through an obstacle, analyze a mechanical issue, or assemble or disassemble a device, roll +its health and take +1 momentum on a hit. On a strong hit with a match, it reveals an unexpected advantage or insight; take another +1 momentum.",
        level2: "🔴 When you Repair aided by the bot, add +1. On a miss, it reveals an alternative approach which will take extra time; you may reroll any dice, but first Lose Momentum (-2).",
        level3: "🔴 When you Check Your Gear to see if the bot has a specific tool or technique available, roll +its health and take +1 momentum on a hit.",
        other: "Health: [4] [3] [2] [1] [0], Out of Action: []"
    },
    { 
        name: "Voidglider",
        level1: "🟢 Your voidglider companion cruises in your starship’s energy wake and can help guide the way on spaceborne journeys. When you Undertake an Expedition, add +1.",
        level2: "🔴 The voidglider is harnessed and trained as a mount, and can be ridden for short-range spacebound transport. When you are riding the voidglider and make a move to detect or evade a threat by relying on its instincts, roll +its health.",
        level3: "🔴 When you make a move by signaling the voidglider to distract or attack a spaceborne foe, roll +its health and take +1 momentum on a hit.",
        other: "Health: [4] [3] [2] [1] [0], Out of Action: []"
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