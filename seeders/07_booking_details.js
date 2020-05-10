module.exports = {
    up: queryInterface => {
        const arr = [
            {
                uid: 1,
                vid: 1,
                stime: new Date(),
                s_lat: 10.89999,
                s_lng: 11.98899,
                etime: new Date(),
                d_lat: '10.08367',
                d_lng: '11.08765',
                bstatus: 2,
                fare: 50,
                pstatus: 2,
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date()
            },
            {
                uid: 1,
                vid: 2,
                stime: new Date(),
                s_lat: 10.89999,
                s_lng: 11.98899,
                etime: new Date(),
                d_lat: '10.08367',
                d_lng: '11.08765',
                bstatus: 2,
                fare: 50,
                pstatus: 2,
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date()

            }
        ];
        return queryInterface.bulkInsert('booking_details', arr, {});
    },
    down: queryInterface =>
        queryInterface.bulkDelete('booking_details', null, {})
};
