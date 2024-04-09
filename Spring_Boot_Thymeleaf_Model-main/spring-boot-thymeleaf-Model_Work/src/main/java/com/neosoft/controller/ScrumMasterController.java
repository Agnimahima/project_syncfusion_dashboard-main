package com.neosoft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.entity.ScrumMaster;
import com.neosoft.service.ScrumMasterServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class ScrumMasterController {

	@Autowired
	private ScrumMasterServiceImpl scrumMasterServiceImpl;
	
	@GetMapping("/scrummasters")
	public List<ScrumMaster> listscrumMasters() {
		
		return scrumMasterServiceImpl.getAllScrumMaster();
				
	}
	
//	@GetMapping("/scrummasters/new")
//	public String createScrumMasterForm(Model model) {
//		
//		ScrumMaster scrummaster = new ScrumMaster();
//		model.addAttribute("scrummaster", scrummaster);
//		
//		return "create_scrummaster";
//	}
	
	@PostMapping("/scrummasters")
	public void saveScrumMasters(@RequestBody ScrumMaster scrummaster) {
		
		scrumMasterServiceImpl.saveScrumMaster(scrummaster);
	}
	
	@GetMapping("/scrummasters/{username}")
	public ScrumMaster getScrumMasterByUsername(@PathVariable String username) {
		
		return scrumMasterServiceImpl.getScrumMasterByUserName(username);
	}
	
	
	@PostMapping("/scrummasters/{id}")
	public void updateScrumMaster(@PathVariable String username, 
			@RequestBody ScrumMaster scrumMaster) {
		
		ScrumMaster existingScrumMaster = scrumMasterServiceImpl.getScrumMasterByUserName(username);
		existingScrumMaster.setName(scrumMaster.getName());
		existingScrumMaster.setCustomerId(scrumMaster.getCustomerId());
		existingScrumMaster.setLocation(scrumMaster.getLocation());
		existingScrumMaster.setPassword(scrumMaster.getPassword());
		existingScrumMaster.setProjectName(scrumMaster.getProjectName());
		existingScrumMaster.setStatus(scrumMaster.getStatus());
		existingScrumMaster.setUsername(scrumMaster.getUsername());
		existingScrumMaster.setWeeks(scrumMaster.getWeeks());
		scrumMasterServiceImpl.updateScrumMaster(existingScrumMaster);

	}
	
	@GetMapping("/scrummasters/{id}")
	public void deleteScrumMaster(@PathVariable Long id) {
		
		scrumMasterServiceImpl.deleteScrumMasterById(id);
		
	}	
	
	
}
