package com.sla.bliblinventory;

import com.sla.bliblinventory.controller.LoginController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class BliblinventoryApplication {
	@Autowired
	LoginController service;

	public static void main(String[] args) {
		SpringApplication.run(BliblinventoryApplication.class, args);
	}
}
