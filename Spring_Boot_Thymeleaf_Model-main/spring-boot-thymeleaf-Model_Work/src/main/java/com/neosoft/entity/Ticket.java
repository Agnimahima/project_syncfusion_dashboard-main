package com.neosoft.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ticket")
public class Ticket {
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private long ticketId;

	private String title;
	private String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	private long jiraId;

	public long getJiraId() {
		return jiraId;
	}

	public void setJiraId(long jiraId) {
		this.jiraId = jiraId;
	}

	public long getTicketId() {
		return ticketId;
	}

	public long getBlogId() {
		return ticketId;
	}

	public String getTitle() {
		return title;
	}

	public void setTicketId(long id) {
		this.ticketId = id;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}