CREATE DEFINER=`root`@`localhost` PROCEDURE `Addition`(
IN number_1 INT,
IN number_2 INT,
OUT result INT
)
BEGIN
	Set result = number_1 + number_2;
END
