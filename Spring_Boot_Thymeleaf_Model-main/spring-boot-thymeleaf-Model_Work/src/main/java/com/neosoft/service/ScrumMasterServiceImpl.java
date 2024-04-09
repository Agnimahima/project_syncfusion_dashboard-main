package com.neosoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.entity.ScrumMaster;
import com.neosoft.repository.ScrumMasterRepository;

@Service
public class ScrumMasterServiceImpl implements ScrumMasterService{

	

	@Autowired
	private ScrumMasterRepository scrumMasterRepository;
	
	@Override
	public List<ScrumMaster> getAllScrumMaster() {
		return scrumMasterRepository.findAll();
	}

	@Override
	public ScrumMaster saveScrumMaster(ScrumMaster scrumMaster) {
		return scrumMasterRepository.save(scrumMaster);
	}
	
	@Override
	public ScrumMaster getScrumMasterByUserName(String username) {
		
		return scrumMasterRepository.getScrumMasterByUsername(username);
	}
	

	@Override
	public ScrumMaster updateScrumMaster(ScrumMaster scrumMaster) {
		return scrumMasterRepository.save(scrumMaster);
	}

	@Override
	public void deleteScrumMasterById(Long id) {
		scrumMasterRepository.deleteById(id);	
	}

	

}
