"use strict";
// create a function that change level of incoming developer
function gradeDeveloper(dev, newLevel) {
    dev.level = newLevel;
}
const user = {
    level: 'junior',
    login: 'mama',
    skills: ['html'],
};
gradeDeveloper(user, 'middle');
