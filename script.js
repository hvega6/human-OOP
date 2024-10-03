class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.energy = 100;
        this.knowledge = [];
    }

    introduce() {
        return `Hello, I'm ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`;
    }

    learn(subject) {
        if (!this.knowledge.includes(subject)) {
            this.knowledge.push(subject);
            this.energy -= 10;
            return `${this.name} has learned ${subject}.`;
        }
        return `${this.name} already knows ${subject}.`;
    }

    sleep(hours) {
        this.energy = Math.min(100, this.energy + hours * 10);
        return `${this.name} slept for ${hours} hours and now has ${this.energy} energy.`;
    }

    exercise(minutes) {
        const energyLoss = Math.floor(minutes / 10);
        this.energy = Math.max(0, this.energy - energyLoss);
        return `${this.name} exercised for ${minutes} minutes and now has ${this.energy} energy.`;
    }

    listKnowledge() {
        if (this.knowledge.length > 0) {
            return `${this.name} knows: ${this.knowledge.join(', ')}`;
        }
        return `${this.name} doesn't know anything yet.`;
    }
}

// Example usage:
const john = new Human("John Doe", 30, "male");
console.log(john.introduce());
console.log(john.learn("JavaScript"));
console.log(john.exercise(30));
console.log(john.sleep(8));
console.log(john.listKnowledge());