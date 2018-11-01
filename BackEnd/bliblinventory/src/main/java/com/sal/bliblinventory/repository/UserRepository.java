package com.sal.bliblinventory.repository;

import com.sal.bliblinventory.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByNameContains(String name);
    User findByEmail(String email);
}