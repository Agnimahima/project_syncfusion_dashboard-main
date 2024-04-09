package com.neosoft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.neosoft.entity.Ticket;
@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long> {
	 List<Ticket> findByJiraId(String jiraId);
}
