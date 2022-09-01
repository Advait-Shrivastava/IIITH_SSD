CREATE DEFINER=`root`@`localhost` PROCEDURE `live_in`(IN city varchar(20))
BEGIN
select CUST_NAME from customer where WORKING_AREA=city;
END
