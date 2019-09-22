class Patient {
    constructor(_name, _id, _HEALTH_LEVEL, _BLOOD_LEVEL) {
        this.name = _name;
        this.id = _id;
        this.HEALTH_LEVEL = _HEALTH_LEVEL;
        this.BLOOD_LEVEL = _BLOOD_LEVEL;
    }

   getPatientStatus(testLevel){

        switch(testLevel){

            case "HEALTH_LEVEL":
            return HEALTH_LEVEL
            break;

            case "BLOOD_LEVEL":
            return BLOOD_LEVEL
            break;

            default:
        }

   }

   setPatientStatus(testLevel,value){
        switch(testLevel){

            case "HEALTH_LEVEL":
            HEALTH_LEVEL = value;
            break;

            case "BLOOD_LEVEL":
            BLOOD_LEVEL = value; 
            break;

            default:
        }


   }


}

module.exports = Patient;