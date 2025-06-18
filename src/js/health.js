
export default function checkHealthStatus(character) {
    const { name, health } = character;
    
    if (health > 50) {
        return "healthy";
    } else if (health >= 15) {
        return "wounded";
    } else {
        return "critical";
    }
}

const character = { name: 'Маг', health: 90 };
const result = checkHealthStatus(character);
console.log(result);