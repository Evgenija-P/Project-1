type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(dev: { level: Level }, newLevel: Level) {
  dev.level = newLevel;
}

const user: Developer = {
  level: 'junior',
  login: 'mama',
  skills: ['html'],
};

gradeDeveloper(user, 'middle');
