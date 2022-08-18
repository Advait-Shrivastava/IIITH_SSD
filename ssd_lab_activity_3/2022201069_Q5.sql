select Mgr_ssn,Dnumber,count(*) from DEPARTMENT,DEPENDENT where DEPARTMENT.Mgr_ssn = DEPENDENT.Essn && Dnumber IN (select Dnumber from DEPT_LOCATIONS group by Dnumber having coun
t(*)>1) group by Mgr_ssn,Dnumber;
