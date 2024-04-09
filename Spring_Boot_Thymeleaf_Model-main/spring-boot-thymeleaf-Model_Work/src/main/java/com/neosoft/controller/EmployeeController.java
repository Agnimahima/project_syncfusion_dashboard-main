package com.neosoft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neosoft.entity.Employee;
import com.neosoft.repository.EmpoyeeRepository;
import com.neosoft.service.EmployeeService;
import com.neosoft.service.EmployeeServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl EmployeeServiceImpl;
	
	@GetMapping("/employees")
	public List<Employee> listemployees() {
		
		return EmployeeServiceImpl.getAllEmployees();
	}
	
//	@GetMapping("/employees/new")
//	public String createemployeeForm(Model model) {
//		
//		Employee employee = new Employee();
//		model.addAttribute("employee", employee);
//		
//		return "create_employee";
//	}
	
	@PostMapping("/employees")
	public void saveemployee(@RequestBody Employee employee) {
			
		EmployeeServiceImpl.saveEmployee(employee);
	}
	
	@GetMapping("/employees/edit/{id}")
	public Employee editEmployeeForm(@PathVariable Long id) {

		return EmployeeServiceImpl.getEmployeeById(id);
	}
	
	@PostMapping("/employees/{id}")
	public void updateemployee(@PathVariable Long id, 
			@RequestBody Employee employee) {
		
		Employee existingemployee = EmployeeServiceImpl.getEmployeeById(id);
		existingemployee.setId(id);
		existingemployee.setFirstName(employee.getFirstName());
		existingemployee.setLastName(employee.getLastName());
		existingemployee.setEmail(employee.getEmail());		
		EmployeeServiceImpl.updateEmployee(existingemployee);
		
	}
	
	@GetMapping("/employees/{id}")
	public void deleteemployee(@PathVariable Long id) {
		
		EmployeeServiceImpl.deleteEmployeeById(id);
		
	}	
}
