package com.neosoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.entity.Software;
import com.neosoft.repository.SoftwareRepository;


@Service
public class SoftwareServiceImpl implements SoftwareService {

	@Autowired
	private SoftwareRepository softwareRepository;	
	
	@Override
	public List<Software> getAllSoftwarecontroller() {
		return softwareRepository.findAll();
	}

	@Override
	public Software saveSoftwarecontroller(Software software) {
		return softwareRepository.save(software);
	}

	@Override
	public Software getSoftwareById(Long id) {
		return softwareRepository.findById(id).get();
	}

	@Override
	public Software updateSoftware(Software software) {		
		return softwareRepository.save(software);
	}

	@Override
	public void deleteSoftwareById(Long id) {
		softwareRepository.deleteById(id);	
	}
}
