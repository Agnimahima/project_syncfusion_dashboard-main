package com.neosoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neosoft.entity.Software;

public interface SoftwareRepository extends JpaRepository<Software, Long> {

}
