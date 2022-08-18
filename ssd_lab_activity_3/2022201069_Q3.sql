select DEPARTMENT.Mgr_Ssn,count(*) from DEPARTMENT,WORKS_ON where DEPARTMENT.Mgr_Ssn = WORKS_ON.Essn && Dnumber in (select Dnum from PROJECT where Pname="ProductY") group by DEPA
RTMENT.Mgr_Ssn;
