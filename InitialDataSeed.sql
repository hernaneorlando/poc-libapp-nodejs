insert into Authors (Id, FirstName, LastName, DateOfBirth, CreatedAt, UpdatedAt) values
(gen_random_uuid(), 'Aldous', 'Huxley', to_date('07-26-1894', 'MM-DD-YYYY'), now(), now()),
(gen_random_uuid(), 'Jostein', 'Gaarder', to_date('08-08-1952', 'MM-DD-YYYY'), now(), now()),
(gen_random_uuid(), 'George', 'Orwell', to_date('07-25-1903', 'MM-DD-YYYY'), now(), now());