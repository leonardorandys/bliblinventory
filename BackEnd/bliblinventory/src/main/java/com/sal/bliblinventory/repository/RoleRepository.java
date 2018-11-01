package com.sal.bliblinventory.repository;

import com.sal.bliblinventory.model.Role;
import com.sal.bliblinventory.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(RoleName roleName);
}
