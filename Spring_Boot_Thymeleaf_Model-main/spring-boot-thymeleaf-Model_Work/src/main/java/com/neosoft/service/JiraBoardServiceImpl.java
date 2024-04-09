package com.neosoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.entity.JiraBoard;
import com.neosoft.repository.JiraBoardRepository;
@Service
public class JiraBoardServiceImpl implements JiraBoardService{

	@Autowired
	private JiraBoardRepository jiraBoardRepository;
	
	@Override
	public List<JiraBoard> getAllJiraBoards() {
		return jiraBoardRepository.findAll();
	}

	@Override
	public JiraBoard saveJiraBoard(JiraBoard jiraBoard) {
		return jiraBoardRepository.save(jiraBoard);
	}

	@Override
	public JiraBoard getJiraBoardById(Long id) {
		return jiraBoardRepository.findById(id).get();
	}

	
	
	

	@Override
	public JiraBoard updateJiraBoard(JiraBoard jiraBoard) {
		return jiraBoardRepository.save(jiraBoard);
	}
	
	

	@Override
	public void deleteJiraBoardById(Long id) {
		jiraBoardRepository.deleteById(id);
	}
}
