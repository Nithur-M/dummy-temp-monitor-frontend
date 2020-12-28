import axiosInstance from './axios';

export const fetchSensorID = async () => {
    try {
        const { data } = await axiosInstance.get('/sensors/getsensor_ids');
        return data.map((item, index) => item);
    } catch(err){
        console.log(err);
    }
}