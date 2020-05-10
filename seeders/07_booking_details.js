module.exports = {
    up: queryInterface => {
        const arr = [
            {
                uid: 1,
                vid: 1,
                stime: new Date(),
                s_lat: 43.782780,
                s_lng: -79.334846,
                etime: new Date(new Date().getTime() + (30*60*1000)),
                d_lat: '19.175166',
                d_lng: '73.017712',
                bstatus: 2,
                fare: 50,
                pstatus: 2,
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date(new Date().getTime() + (30*60*1000))
            },
            {
                uid: 1,
                vid: 2,
                stime: new Date(),
                s_lat: 19.144630,
                s_lng: 72.948790,
                etime: new Date(new Date().getTime() + (60*60*1000)),
                d_lat: '19.175166',
                d_lng: '73.017712',
                bstatus: 2,
                fare: 150,
                pstatus: 2,
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date(new Date().getTime() + (60*60*1000))

            }
        ];
        return queryInterface.bulkInsert('booking_details', arr, {});
    },
    down: queryInterface =>
        queryInterface.bulkDelete('booking_details', null, {})
};
