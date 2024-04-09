package com.neosoft.service;

import java.util.List;

import com.neosoft.entity.JiraBoard;

public interface JiraBoardService {

 List<JiraBoard> getAllJiraBoards();
	
    JiraBoard saveJiraBoard(JiraBoard jiraBoard);
	
	JiraBoard getJiraBoardById(Long id);
	
	
	
	JiraBoard updateJiraBoard(JiraBoard jiraBoard);
	
	void deleteJiraBoardById(Long id);
}
