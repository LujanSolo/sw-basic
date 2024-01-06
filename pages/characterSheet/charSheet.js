const characterStatsSection = document.getElementById("character-stats");

const attributesAndSkills = {
  dexterity: {
    name: "Dexterity",
    value: 0,
    pips: 0,
    skills: {
      blaster: {
        name: "Blaster",
        value: 0,
      },
      brawling: {
        name: "Brawling",
        value: 0,
      },
      brawlingParry: {
        name: "Brawling Parry",
        value: 0,
      },
      dodge: {
        name: "Dodge",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
  perception: {
    name: "Perception",
    value: 0,
    pips: 0,
    skills: {
      bargain: {
        name: "Bargain",
        value: 0,
      },
      command: {
        name: "Command",
        value: 0,
      },
      con: {
        name: "Con",
        value: 0,
      },
      dodge: {
        name: "Dodge",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
  knowledge: {
    name: "Knowledge",
    value: 0,
    pips: 0,
    skills: {
      blaster: {
        name: "Blaster",
        value: 0,
      },
      brawling: {
        name: "Brawling",
        value: 0,
      },
      con: {
        name: "Con",
        value: 0,
      },
      gambling: {
        name: "Gambling",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
  strength: {
    name: "Strength",
    value: 0,
    pips: 0,
    skills: {
      blaster: {
        name: "Blaster",
        value: 0,
      },
      brawling: {
        name: "Brawling",
        value: 0,
      },
      brawlingParry: {
        name: "Brawling Parry",
        value: 0,
      },
      dodge: {
        name: "Dodge",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
  mechanical: {
    name: "Mechanical",
    value: 0,
    pips: 0,
    skills: {
      blaster: {
        name: "Blaster",
        value: 0,
      },
      brawling: {
        name: "Brawling",
        value: 0,
      },
      brawlingParry: {
        name: "Brawling Parry",
        value: 0,
      },
      dodge: {
        name: "Dodge",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
  technical: {
    name: "Technical",
    value: 0,
    pips: 0,
    skills: {
      blaster: {
        name: "Blaster",
        value: 0,
      },
      brawling: {
        name: "Brawling",
        value: 0,
      },
      brawlingParry: {
        name: "Brawling Parry",
        value: 0,
      },
      dodge: {
        name: "Dodge",
        value: 0,
      },
      grenade: {
        name: "Grenade",
        value: 0,
      },
      heavyWeapons: {
        name: "Heavy Weapons",
        value: 0,
      },
      meleeParry: {
        name: "Melee Parry",
        value: 0,
      },
      melee: {
        name: "Melee",
        value: 0,
      },
    }
  },
};

Object.keys(attributesAndSkills).forEach((attribute) => {
  const attributeData = attributesAndSkills[attribute];

  characterStatsSection.innerHTML += `
    <div class="attribute-card">
      <div class="card-header">
        <label class="card-title" for="${attributeData.name.toLowerCase()}">${attributeData.name}</label>
        <input type="number" name="${attributeData.name.toLowerCase()}" id="${attributeData.name.toLowerCase()}" value="${attributeData.value}" />
      </div>
  `;

  Object.entries(attributeData.skills).forEach(([skill, skillData]) => {
    characterStatsSection.innerHTML += `
      <div class="card-body">
        <div class="label-input-group">
          <label class="card-skills" for="${skillData.name.toLowerCase()}-skill">${skillData.name}</label>
          <input type=number" name="${skillData.name.toLowerCase()}-skill" id="${skillData.name.toLowerCase()}-skill" value="${skillData.value}" />
    `;
  });
})