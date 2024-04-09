package com.neosoft.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class JiraBoard {
	 @GeneratedValue(strategy = GenerationType.AUTO)
	   @Id
	   private long jiraId;
	   private String projectName;
	   private String boardName;
	   private String startDate;
	   private String endDate;
	public long getJiraId() {
		return jiraId;
	}
	public void setJiraId(long jiraId) {
		this.jiraId = jiraId;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getBoardName() {
		return boardName;
	}
	public void setBoardName(String boardName) {
		this.boardName = boardName;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	   
}
