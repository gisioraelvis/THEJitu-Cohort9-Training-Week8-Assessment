CREATE OR ALTER PROCEDURE updateProfile(@id VARCHAR(100),
    @name VARCHAR(200),
    @email VARCHAR(300) ,
    @password VARCHAR(150))
AS
BEGIN
    UPDATE UserTable
    SET Name = @name, Email = @email, Password = @password
    WHERE Id = @id
END