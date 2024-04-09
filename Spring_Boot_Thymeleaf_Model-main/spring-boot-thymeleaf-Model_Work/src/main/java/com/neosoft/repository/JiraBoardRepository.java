package com.neosoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neosoft.entity.JiraBoard;

public interface JiraBoardRepository extends JpaRepository<JiraBoard,Long>{

}
