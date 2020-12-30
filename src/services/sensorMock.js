import axiosInstance from './axios';

export const fetchSensorMock = async ( sensor ) => {
    console.log(sensor);

    try {
        const { data } = await axiosInstance.get('/sensorsmock/send_sensor_reads_to_charts', { params: { sensor_id: sensor }});

        const modifiedData = data.map((sensorMock) => ({
            data_value: sensorMock.data_value,
            date: sensorMock.date,
        }));
        console.log(modifiedData.data_value);
        return modifiedData;
    } catch(err){

    }}
