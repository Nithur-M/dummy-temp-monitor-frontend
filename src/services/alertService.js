import axiosInstance from './axios'

export const fetchAlertDetails = async ( sensor ) => {
    console.log(sensor);

    try {
        const { data } = await axiosInstance.get('/notify/get_messages_by_sensor_id', { params: { sensor_id: sensor }});

        const modifiedData = data.map((alertDetails) => ({
            description: alertDetails.description,
            date: alertDetails.date,
        }));
        return modifiedData;
    } catch(err){
        console.log(err);
    }}
