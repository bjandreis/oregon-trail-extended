class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        this.traveler = traveler
        if (this.passengers.length < this.capacity) {
            this.passengers.push(this.traveler)
        }
    }
    shouldQuarantine() {
        this.checkForSickPassenger = this.passengers.some(traveler => traveler.isHealthy === false)
        return this.checkForSickPassenger
    }
    totalFood() {
        this.sumOfFood = this.passengers.map(traveler => traveler.food)
        const sumReducer = (a, b) => a + b
        return this.sumOfFood.reduce(sumReducer)
    }
}