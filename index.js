function Scooter(year, color, model){
    return {
        year,
        color,
        model
    }
}

function Driver(name, age, experience){
    return {
        name,
        age,
        experience
    } 
}

function PickupLocation(address, city){
    return {
        address,
        city
    } 
}

const newSooter = new Scooter(2020, "blue", "razr")
const newDriver = new Driver("Mike", 29, "mad-skillz")
const newPickup = new PickupLocation("4045 Anne Drive", "Seaford")