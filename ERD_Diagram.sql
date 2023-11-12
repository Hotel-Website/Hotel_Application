   +-----------------------+       +-----------------------+       +-------------------+       +-----------------------+
   |   Customer Profile   |       |   Employee Profile   |       |       Room      |       |    Reservation     |
   +-----------------------+       +-----------------------+       +-------------------+       +-----------------------+
   | PK  customer_id: INT |       | PK  employee_id: INT |       | PK  room_number:  |     | PK  reservation_id:  |
   |    first_name: VARCHAR |     |    first_name: VARCHAR |     |    INT            |     |    INT                |
   |    last_name: VARCHAR |      |    last_name: VARCHAR |       |    room_type:     |    |    guest_name:        |
   |    email: VARCHAR     |      |    email: VARCHAR     |       |    VARCHAR         |   |    VARCHAR            |
   |    phone_number: VARCHAR |   |    phone_number: VARCHAR |    |    availability:  |    |    check_in_date: DATE |
   |    address: VARCHAR     |    |    job_title: VARCHAR  |    +-------------------+       |    check_out_date: DATE|
   |    city: VARCHAR        |    |    department: VARCHAR |                                |    total_nights: INT   |
   |    state: VARCHAR       |    |    hire_date: DATE     |                                |    total_price: DECIMAL|
   |    zip_code: VARCHAR    |    |    address: VARCHAR    |                                |    check_in_status: BOOL|
   |    country: VARCHAR     |    |    city: VARCHAR       |                                |    check_out_status: BOOL|
   |    notes: TEXT          |    |    state: VARCHAR      |                                |    additional_notes: TEXT|
   +-----------------------+      |    zip_code: VARCHAR   |                                +-----------------------+
                               |    country: VARCHAR    |
                               |    notes: TEXT         |
                               +-----------------------+
       |
       | 1
       |
       v
   +-----------------------+
   |   Restaurant Menu    |
   +-----------------------+
   | PK  item_id: INT      |
   |    item_name: VARCHAR |
   |    description: TEXT  |
   |    category: VARCHAR  |
   |    price: DECIMAL     |
   |    vegetarian: BOOL   |
   |    allergen_info: TEXT|
   |    availability: BOOL |
   +-----------------------+

       |
       | M
       |
       v
   +-----------------------+
   |   Marketing Platform |
   +-----------------------+
   | PK  platform_id: INT  |
   |    platform_name: VARCHAR |
   |    platform_type: VARCHAR |
   |    contact_info: VARCHAR |
   +-----------------------+
