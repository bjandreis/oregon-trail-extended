class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true
        }
    }
}