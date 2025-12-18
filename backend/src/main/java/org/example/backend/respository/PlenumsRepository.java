package org.example.backend.respository;

import org.example.backend.model.entity.PlenumsTermin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlenumsRepository extends MongoRepository<PlenumsTermin,String> {
}
