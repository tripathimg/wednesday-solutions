module.exports = {
    up: queryInterface => {
        const arr = [
            {
                vmodel: 'Maruti 800',
                vnum: 'MH 04 DG 0506',
                curr_lat: '19.175166',
                curr_lng: '73.017712',
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date()
            },
            {
                vmodel: 'SUV',
                vnum: 'MH 06 FM 5555',
                curr_lat: '43.782780',
                curr_lng: '-79.334846',
                added_by: 1,
                modified_by: 1,
                created_at: new Date(),
                modified_at: new Date()
            }
        ];
        return queryInterface.bulkInsert('vehicle_details', arr, {});
    },
    down: queryInterface =>
        queryInterface.bulkDelete('vehicle_details', null, {})
};
