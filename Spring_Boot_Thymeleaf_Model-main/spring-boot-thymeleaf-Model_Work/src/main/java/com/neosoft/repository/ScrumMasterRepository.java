package com.neosoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neosoft.entity.ScrumMaster;

@Repository
public interface ScrumMasterRepository extends JpaRepository<ScrumMaster,Long> {
	ScrumMaster getScrumMasterByUsername(String username);
}