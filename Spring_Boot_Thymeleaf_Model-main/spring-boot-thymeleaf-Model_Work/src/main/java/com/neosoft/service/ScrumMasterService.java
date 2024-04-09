package com.neosoft.service;

import java.util.List;

import com.neosoft.entity.Employee;
import com.neosoft.entity.ScrumMaster;

public interface ScrumMasterService {
	
	List<ScrumMaster> getAllScrumMaster();
	
	ScrumMaster saveScrumMaster(ScrumMaster scrumMaster);
	
	ScrumMaster getScrumMasterByUserName(String username);
	
	ScrumMaster updateScrumMaster(ScrumMaster scrumMaster);
	
//	ScrumMaster getScrumMaster(String name);
	
	void deleteScrumMasterById(Long id);
}
