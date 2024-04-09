package com.neosoft.service;

import java.util.List;

import com.neosoft.entity.Ticket;

public interface TicketService {

	List<Ticket> getAllTickets();
	
	Ticket saveTicket(Ticket ticket);
	
	Ticket getTicketById(Long id);
	
	List<Ticket> findByJiraId(String jiraId);
	
	Ticket updateTicket(Ticket ticket);
	
	void deleteTicketById(Long id);
}
