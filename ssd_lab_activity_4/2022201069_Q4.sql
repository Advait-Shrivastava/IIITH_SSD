CREATE DEFINER=`root`@`localhost` PROCEDURE `cursor`(
    INOUT cst_d VARCHAR(4000)
)
BEGIN
    DECLARE quit INT DEFAULT 0;
    DECLARE all_details VARCHAR(255) DEFAULT "";
    DECLARE agent CURSOR FOR SELECT CONCAT(CUST_NAME," ",CUST_COUNTRY," ",GRADE," ",WORKING_AREA) FROM customer WHERE AGENT_CODE LIKE 'A00%'; 
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET quit = 1;
    OPEN agent;
    iterator: LOOP
        FETCH agent INTO all_details;
        IF quit = 1 THEN
            LEAVE iterator;
        END IF;
        SET cst_d = CONCAT(onecustomer,"\n",custdata );
    END LOOP iterator;
    CLOSE agent;
END
