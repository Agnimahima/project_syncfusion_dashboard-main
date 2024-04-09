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

import com.neosoft.entity.JiraBoard;
import com.neosoft.entity.Ticket;
import com.neosoft.service.JiraBoardServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class JiraBoardController {

	@Autowired
	private JiraBoardServiceImpl jiraBoardServiceImpl;
	
	@GetMapping("/jiraboards")
	public List<JiraBoard> listJiraBoards(Model model) {
		
		return jiraBoardServiceImpl.getAllJiraBoards();
	}
	
//	@GetMapping("/jiraboards/new")
//	public String createJiraBoardForm(Model model) {
//		
//		JiraBoard jiraBoard = new JiraBoard();
//		model.addAttribute("jiraboard", jiraBoard);
//		
//		return "create_teacher";
//	}
	
	@PostMapping("/jiraboards")
	public void saveJiraBoard(@RequestBody JiraBoard jiraBoard) {
		
		jiraBoardServiceImpl.saveJiraBoard(jiraBoard);
		
	}
	
	@GetMapping("/jiraboards/edit/{id}")
	public JiraBoard editJiraBoardForm(@PathVariable Long id, Model model) {
		
		return jiraBoardServiceImpl.getJiraBoardById(id);
	}
	
	@PostMapping("/jiraboards/{id}")
	public void updateJiraBoard(@PathVariable Long id, 
			@RequestBody JiraBoard jiraBoard) {
		
		JiraBoard jiraBoardModel = jiraBoardServiceImpl.getJiraBoardById(id);
		jiraBoardModel.setJiraId(id);
		jiraBoardModel.setBoardName(jiraBoard.getBoardName());
		jiraBoardModel.setProjectName(jiraBoard.getProjectName());
		jiraBoardModel.setEndDate(jiraBoard.getEndDate());
		jiraBoardModel.setStartDate(jiraBoard.getStartDate());
		jiraBoardServiceImpl.updateJiraBoard(jiraBoardModel);
	}
	
	@GetMapping("/jiraboards/{id}")
	public void deleteJiraBoard(@PathVariable Long id) {
		
		jiraBoardServiceImpl.deleteJiraBoardById(id);
	}	
	
}
