package com.neosoft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neosoft.entity.Employee;

public interface EmpoyeeRepository extends JpaRepository<Employee, Long> {

}

