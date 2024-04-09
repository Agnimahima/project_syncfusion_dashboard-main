package com.neosoft.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data

public class Software {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long softwareId;
		private String softName;
	private String client;
		private String company;
		private String location;
	
		private String projectManager;
		public Long getSoftwareId() {
			return softwareId;
		}
		public void setSoftwareId(Long softwareId) {
			this.softwareId = softwareId;
		}
		public String getSoftName() {
			return softName;
		}
		public void setSoftName(String softName) {
			this.softName = softName;
		}
		public String getClient() {
			return client;
		}
		public void setClient(String client) {
			this.client = client;
		}
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		
		
		public String getProjectManager() {
			return projectManager;
		}
		public void setProjectManager(String projectManager) {
			this.projectManager = projectManager;
		}
		
		
	
	
	
}
