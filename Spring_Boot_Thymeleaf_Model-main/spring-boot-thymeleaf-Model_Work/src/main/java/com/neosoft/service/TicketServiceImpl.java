package com.neosoft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neosoft.entity.Ticket;
import com.neosoft.repository.TicketRepository;
@Service
public class TicketServiceImpl implements TicketService{

	@Autowired
	private TicketRepository ticketRepository;	
	
	@Override
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}

	@Override
	public Ticket saveTicket(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	@Override
	public Ticket getTicketById(Long id) {
		return ticketRepository.findById(id).get();
	}

	@Override
	public List<Ticket> findByJiraId(String jiraId) {
		return ticketRepository.findByJiraId(jiraId);
	}

	@Override
	public Ticket updateTicket(Ticket ticket) {		
		return ticketRepository.save(ticket);
	}

	@Override
	public void deleteTicketById(Long id) {
		ticketRepository.deleteById(id);	
	}
	
}
