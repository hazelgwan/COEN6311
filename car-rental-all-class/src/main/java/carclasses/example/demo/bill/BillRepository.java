package carclasses.example.demo.bill;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface BillRepository extends JpaRepository<Bill, Integer>{
	

}
