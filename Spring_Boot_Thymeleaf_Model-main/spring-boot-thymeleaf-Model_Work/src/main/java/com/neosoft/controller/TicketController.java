package com.neosoft.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.entity.Ticket;
import com.neosoft.service.TicketServiceImpl;
@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class TicketController {
   
   @Autowired
	private TicketServiceImpl ticketServiceImpl;
	
	@GetMapping("/tickets")
	public List<Ticket> listteachers(Model model) {
		
		return ticketServiceImpl.getAllTickets();
	}
	
//	@GetMapping("/tickets/new")
//	public String createteacherForm(Model model) {
//		
//		Ticket ticket = new Ticket();
//		model.addAttribute("ticket", ticket);
//		
//		return "create_teacher";
//	}
	
	@PostMapping("/tickets")
	public void saveteacher(@RequestBody Ticket ticket) {
		
		ticketServiceImpl.saveTicket(ticket);
		
	}
	
//	@GetMapping("/tickets/{id}")
//	public List<Ticket> getTicket(@Request param Long id)
//	{
//		return ticketServiceImple.
//	}
	
	@GetMapping("/tickets/edit/{id}")
	public Ticket editteacherForm(@PathVariable Long id, Model model) {
		
		return ticketServiceImpl.getTicketById(id);
	}
	
	@GetMapping("ticketswithJiraid/{id}")
	public List<Ticket> getJiraId(@RequestParam("id") String id){
		return ticketServiceImpl.findByJiraId(id);
	}
	
	
	
	@PostMapping("/tickets/{id}")
	public void updateteacher(@PathVariable Long id, 
			@RequestBody Ticket ticket) {
		
		Ticket ticketModel = ticketServiceImpl.getTicketById(id);
		ticketModel.setTicketId(id);
		ticketModel.setTitle(ticket.getTitle());
		ticketServiceImpl.updateTicket(ticketModel);
	}
	
	@GetMapping("/tickets/{id}")
	public void deleteteacher(@PathVariable Long id) {
		
		ticketServiceImpl.deleteTicketById(id);
		
	}	
}