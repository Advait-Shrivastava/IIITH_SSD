select concat(A.Fname,' ',A.Minit,' ',A.Lname), A.Ssn,A.Dno,count(*) from EMPLOYEE as A,EMPLOYEE as B where A.Ssn = B.Super_ssn group by A.Ssn;
