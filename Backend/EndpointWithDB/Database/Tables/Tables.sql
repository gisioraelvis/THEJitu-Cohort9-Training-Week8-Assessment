USE Airport

DROP TABLE IF EXISTS UserTable
CREATE TABLE UserTable
(
    Id VARCHAR(100),
    Name VARCHAR(200),
    Email VARCHAR(300) UNIQUE,
    Role VARCHAR(100) DEFAULT 'user',
    Password VARCHAR(150) ,
    isSent VARCHAR(150) DEFAULT '0'
)

DROP TABLE IF EXISTS FlightsBookings
CREATE TABLE FlightsBookings
(
    Id VARCHAR(50) UNIQUE ,
    Name VARCHAR(100) ,
    Email VARCHAR(100) ,
    Destination VARCHAR(100),
    TravelDate DATE ,
    isDeleted VARCHAR(10) DEFAULT '0'
)





