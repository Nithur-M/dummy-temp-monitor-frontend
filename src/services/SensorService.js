import axios from 'axios';

const SENSORS_URL = 'http://localhost:8081/sensors/getsensor_ids';

class SensorService {

    getSensorId() {
        axios.get(SENSORS_URL);
    }
}

export default new SensorService();