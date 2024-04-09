package com.neosoft.service;

import java.util.List;

import com.neosoft.entity.Software;

public interface SoftwareService {

	List<Software> getAllSoftwarecontroller();
	
	Software saveSoftwarecontroller(Software student);
	
	Software getSoftwareById(Long id);
	
	Software updateSoftware(Software student);
	
	void deleteSoftwareById(Long id);
}
