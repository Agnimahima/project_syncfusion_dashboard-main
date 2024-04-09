package com.neosoft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.entity.Software;
import com.neosoft.service.SoftwareServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class SoftwareController {

	@Autowired
	private SoftwareServiceImpl softwareServiceImpl;
	
	@GetMapping("/softwarecontroller")
	public List<Software> listSoftwareController() {
		
		
		return softwareServiceImpl.getAllSoftwarecontroller();
	}
	
//	@GetMapping("/softwares/new")
//	public String createSoftwareForm(Model model) {
//		
//		Software software = new Software();
//		model.addAttribute("software", software);
//		
//		return "create_software";
//	}
	
	@PostMapping("/softwares")
	public void saveSoftwares(@RequestBody Software software) {
		
		softwareServiceImpl.saveSoftwarecontroller(software);
		
	}
	
	@GetMapping("/software/edit/{id}")
	public Software editSofwareForm(@PathVariable Long id) {
		
		return softwareServiceImpl.getSoftwareById(id);
	}
	
	@PostMapping("/software/{id}")
	public void updateSoftware(@PathVariable Long id, 
			@RequestBody Software software) {
		
		Software existingSoftware = softwareServiceImpl.getSoftwareById(id);
		existingSoftware.setClient(software.getClient());
		//existingSoftware.setEmail(software.getEmail());
		//existingSoftware.setFirstName(software.getFirstName());
		///existingSoftware.setId(software.getId());
		//existingSoftware.setLastName(software.getLastName());
		existingSoftware.setSoftName(software.getSoftName());
		existingSoftware.setSoftwareId(software.getSoftwareId());
		softwareServiceImpl.updateSoftware(existingSoftware);
	}
	
	@GetMapping("/softwares/{id}")
	public void deleteSoftware(@PathVariable Long id) {
		
		softwareServiceImpl.deleteSoftwareById(id);
		
	}	
}
