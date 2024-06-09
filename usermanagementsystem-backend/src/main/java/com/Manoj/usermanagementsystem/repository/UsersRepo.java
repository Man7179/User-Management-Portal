package com.Manoj.usermanagementsystem.repository;


import com.Manoj.usermanagementsystem.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<OurUsers,Integer> {


    Optional<OurUsers> findByEmail(String email);
}
